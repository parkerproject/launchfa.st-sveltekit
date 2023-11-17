require('dotenv').config()

const { spawn } = require('child_process')

async function preview() {
  try {
    let command
    if (process.env.DEPLOYMENT_PLATFORM === 'vercel' || process.env.DEPLOYMENT_PLATFORM === 'netlify') {
      command = 'vite'
      args = ['preview']
    } else {
      command = 'node'
      args = ['-r', 'dotenv/config', 'build']
    }
    const childProcess = spawn(command, args)
    childProcess.stdout.on('data', (data) => {
      process.stdout.write(data)
    })
    childProcess.stderr.on('data', (data) => {
      process.stderr.write(data)
    })
    childProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Command executed successfully')
      } else {
        console.error(`Command failed with code ${code}`)
      }
    })
  } catch (e) {
    console.log(e)
  }
}

preview()
