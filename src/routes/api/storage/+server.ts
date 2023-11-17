import { v4 as uuidv4 } from 'uuid'
import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'
import { initializeApp } from 'firebase/app'
import { getSession } from '@/lib/utils/auth'
import fireBaseConfig from '@/lib/db/firebaseConfig.example'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

// Define an asynchronous function named GET that accepts a request object.
export async function GET(event: RequestEvent) {
  // Check if the user is authenticated using the getSession function
  const user = getSession(event.request)
  if (!user) {
    // If the user is not authenticated, return a 403 (Forbidden) response
    throw error(403)
  }

  // Extract the 'image' parameter from the request URL.
  const url = new URL(event.request.url)
  const image = url.searchParams.get('image')

  // Check if the 'image' parameter exists in the URL.
  if (image) {
    try {
      // Initialize the Firebase app with the provided configuration.
      const app = initializeApp(fireBaseConfig)

      // Get a reference to the Firebase storage.
      const storage = getStorage(app)

      // Create a reference to the specified image in storage.
      const fileRef = ref(storage, image)

      // Get the download URL of the image.
      const imagePublicURL = await getDownloadURL(fileRef)

      // Return a JSON response with the image's public URL and a 200 status code.
      return json({ imagePublicURL })
    } catch (e) {
      // If an error occurs, log the error message and return a JSON response with a 500 status code.
      throw error(500, { message: e.message || e.toString() })
    }
  }

  // If the 'image' parameter is not found in the URL, return a JSON response with a 400 status code.
  throw error(400, { message: 'Invalid Request.' })
}

// Define an asynchronous function to handle POST requests
export async function POST(event: RequestEvent) {
  // Check if the user is authenticated using the getSession function
  const user = getSession(event.request)
  if (!user) {
    // If the user is not authenticated, return a 403 (Forbidden) response
    throw error(403)
  }
  // Check if the user has an email (an additional check for authentication)
  if (user.email) {
    // Initialize the Firebase app with the provided configuration
    const app = initializeApp(fireBaseConfig)
    // Get a reference to the Firebase Storage and parse the request data as a FormData object
    const storage = getStorage(app)
    const data = await event.request.formData()
    // Get the 'file' field from the form data
    const file = data.get('file')
    // Check if a file was provided
    if (!file) {
      throw error(400, { message: 'No File Provided.' })
    }
    // Check if the 'file' object is an instance of File (not necessary)
    if (!(file instanceof File)) {
      throw error(400, { message: 'Uploaded file is not an instance of valid file.' })
    }
    // Check if the file size exceeds the limit of 5 MB
    if (file.size > 5 * 1024 * 1024) {
      throw error(400, { message: 'File size exceeds the limit of 5 MB.' })
    }
    try {
      // Generate a unique fileId (assuming uuidv4 is defined elsewhere)
      const fileId = uuidv4()
      // Create a reference to the Firebase Storage location where the file will be stored
      const storageRef = ref(storage, `uploads/${fileId}/${file.name}`)
      // Read the file as an array buffer
      const fileBuffer = await file.arrayBuffer()
      // Upload the file to Firebase Storage and retrieve metadata
      const { metadata } = await uploadBytes(storageRef, new Uint8Array(fileBuffer))
      const { fullPath } = metadata
      if (!fullPath) {
        // If there was an error during the upload, return a 403 response with an error message
        throw error(403, {
          message: `<span>There was some error while uploading the file.</span> <span class="mt-1 text-xs text-gray-500">Report an issue with the current URL that you are on and with the code XXX.</span>`,
        })
      }
      // Generate a non-publicly accessible URL for the uploaded file
      // Use this url to perform a GET to this endpoint with image query param valued as below
      const imageURL = `https://storage.googleapis.com/${storageRef.bucket}/${storageRef.fullPath}`
      // Return a success response with a message
      return json({ message: 'Uploaded Successfully' })
    } catch (e) {
      // If there was an error during the upload process, return a 403 response with the error message
      throw error(403, { message: e.message || e.toString() })
    }
  }
  // If the user doesn't have an email or there was an issue with authentication, return a 403 response
  throw error(403)
}
