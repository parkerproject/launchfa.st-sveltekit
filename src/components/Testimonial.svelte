<script lang="ts">
  /*
    A component that can be used anywhere in your app

    <Testimonial
      platform="twitter"
      photo="https://..."
      verified_type={false}
      name="Rishi Raj Jain"
      handle="@rishi_raj_jain_"
      message_url="https://twitter.com/rishi/1233..."
      message="Hey, @rishi_raj_jain_ wow this is great."
    />
  */

  export let name: string
  export let photo: string
  export let handle: string
  export let message: string
  export let message_url: string
  export let platform: string = 'twitter'
  export let verified_type: boolean = false

  let formattedText = message.replace(/&amp;/g, '&')
  let tempText = '' + formattedText

  try {
    tempText = tempText
      .replace(/\B\@([\w\-]+)/gim, (match) => {
        // format all @ mentions
        return `<a style="color: rgb(29,161,242); font-weight:normal; text-decoration: none" href="https://twitter.com/${match.replace('@', '')}" target="_blank">${match}</a>`
      })
      .replace(/(#+[a-zA-Z0-9(_)]{1,})/g, (match) => {
        // format all # hashtags
        return `<a style="color: rgb(29,161,242); font-weight:normal; text-decoration: none" href="https://twitter.com/hashtag/${match.replace(
          '#',
          '',
        )}" target="_blank">${match}</a>`
      })
    const shortLinks = formattedText.match(/https:\/\/t\.co\/[a-zA-Z0-9]{0,10}/g)
    if (shortLinks) {
      shortLinks.forEach((i, _) => {
        if (_ !== shortLinks.length - 1) {
          tempText = tempText.replace(i, `<a href="${i}" class="text-[#1d9bf0]">${i}</a>`)
        } else {
          tempText = tempText.replace(i, ``)
        }
      })
    }
    formattedText = '' + tempText
  } catch (e) {
    // @ts-ignore
    console.log(e.message || e.toString())
  }
</script>

<div class="relative mt-4 flex break-inside-avoid flex-col rounded border border-white/25 p-[0.1rem] shadow">
  <div class="flex w-full flex-col px-6 py-4">
    <div class="flex flex-row items-center">
      <img width="48" height="48" loading="lazy" alt={name} class="h-[48px] w-[48px] rounded-full" src={photo} />
      <div class="author ml-4 flex flex-col !no-underline">
        <span class="flex items-center font-bold leading-5 text-white/50" title={name}>
          {name}
          {#if verified_type}
            <svg viewBox="0 0 24 24" aria-hidden="true" class="ml-1 h-5 w-5 fill-[#1d9bf0]">
              <g>
                <path
                  d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                />
              </g>
            </svg>
          {/if}
        </span>
        <span class="!text-gray-500" title={`@${handle}`}>
          @{handle}
        </span>
      </div>
      {#if platform === 'reddit'}
        <a aria-label={message_url} class="ml-auto" href={message_url} target="_blank" rel="noopener noreferrer">
          <svg width="40" height="40" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" class="_1O4jTk-dZ-VIxsCuYB6OR8">
            <g>
              <circle fill="#FF4500" cx="10" cy="10" r="10" />
              <path
                fill="#FFF"
                d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
              />
            </g>
          </svg>
        </a>
      {/if}
      {#if platform === 'ph'}
        <a aria-label={message_url} class="ml-auto" href={message_url} target="_blank" rel="noopener noreferrer">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="https://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#FF6154" />
              <path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF" />
            </g>
          </svg>
        </a>
      {/if}
      {#if platform === 'twitter'}
        <a aria-label={message_url} class="ml-auto" href={message_url} target="_blank" rel="noopener noreferrer">
          <svg viewBox="328 355 335 276" height="24" width="24" xmlns="https://www.w3.org/2000/svg">
            <path
              class="fill-[#3BA9EE]"
              d="M 630, 425    A 195, 195 0 0 1 331, 600    A 142, 142 0 0 0 428, 570    A  70,  70 0 0 1 370, 523    A  70,  70 0 0 0 401, 521    A  70,  70 0 0 1 344, 455    A  70,  70 0 0 0 372, 460    A  70,  70 0 0 1 354, 370    A 195, 195 0 0 0 495, 442    A  67,  67 0 0 1 611, 380    A 117, 117 0 0 0 654, 363    A  65,  65 0 0 1 623, 401    A 117, 117 0 0 0 662, 390    A  65,  65 0 0 1 630, 425    Z"
            />
          </svg>
        </a>
      {/if}
      {#if platform === 'github'}
        <a aria-label={message_url} class="ml-auto" href={message_url} target="_blank" rel="noopener noreferrer">
          <svg height="24" aria-hidden="true" viewBox="0 0 16 16" width="24">
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      {/if}
    </div>
    <div contenteditable="false" bind:innerHTML={formattedText} class="mb-1 mt-4 whitespace-pre-wrap text-white" />
  </div>
</div>
