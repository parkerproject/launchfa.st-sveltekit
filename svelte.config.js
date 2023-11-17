import path from 'path'
import * as dotenv from 'dotenv'
import node from '@sveltejs/adapter-node'
import vercel from '@sveltejs/adapter-vercel'
import netlify from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/kit/vite'

dotenv.config()

const netlifyAdapter = netlify({
  edge: false,
  split: false,
})

const vercelAdapter = vercel({
  split: false,
  runtime: 'nodejs18.x',
})

const nodeAdapter = node()

const adapters = {
  node: nodeAdapter,
  vercel: vercelAdapter,
  netlify: netlifyAdapter,
}

const adapter = adapters[process.env.DEPLOYMENT_PLATFORM] ?? adapters['node']

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter,
    alias: {
      '@/*': path.resolve('./src/'),
    },
  },
}
