<script lang="ts">
  /*
    A component that can be used anywhere in your app
    
    <FAQ
      faqs={
        [
          { question: `Hey, who's this?`, answer: `It's me, ma!` },
          { question: `Hey, who's this agan?`, answer: `Hey ma, it's me again!` }
        ]
      }
    />
  */

  export let faqs = [
    {
      question: 'What do I get exactly?',
      answer: `1/ The SvelteKit repo with all the boilerplate code you need to run an online business: a payment system, a database, login, UI components, and much more.\n2/ The documentation helps you set up your app from scratch, write copy that sells, and launch fast.\n3/ Access to the GitHub with makers who build & launch fast!`,
    },
    {
      question: 'But why Svelte?',
      answer: `Svelte alongwith HTML, provides you the ability to write javascript in simplest form, via <script> tag! While still server side rendering the app, maintaining your SEO on it's way.`,
    },
    {
      question: 'Javascript or Typescript?',
      answer: 'Both! You can choose once you get access',
    },
    {
      question: 'I do not know what is Svelte, can I still use it?',
      answer: `The reason for choosing Svelte is to solve this for you. You are good to go if you know HTML, and can read up quickly on how <script> tag is used in apps/websites!`,
    },
    {
      question: 'What all payment methods are supported?',
      answer: `Selling via Lemon Squeezy makes me have more than just Stripe and PayPal. Apple Pay, Google Pay, Alipay, WeChat Pay, Cash App Pay and ACH are also supported!`,
    },
    {
      question: 'Is it a website template?',
      answer: `It's not just a template. It's all in one standalone components and APIs written on top of the Web API that can be used in any project.\nYou can copy/paste sections to build your site quickly, like a pricing, hero or FAQ section, or a bunch of UI components like buttons, etc, or the endpoints configured under the /api directory.\nOh don't forget, it has a killer SEO component written in bare HTML!`,
    },
    {
      question: 'I can build it myself, why should I buy it?',
      answer: "True. While you're building it, others are launching theirs.",
    },
    {
      question: 'Can I get a refund?',
      answer:
        'Please contact at jain71000@gmail.com and describe the refund reason. Once I receive your refund request, I will inspect it and notify you about the decision. Usually, I can not make a refund because all the products are digital.',
    },
  ]
</script>

<section id="faq">
  <div class="mx-auto flex max-w-7xl flex-col gap-8 px-8 py-24">
    <div class="flex flex-col text-left">
      <p class="text-base-content text-3xl font-extrabold text-launchfast sm:text-4xl">Questions and Answers</p>
    </div>
    <ul class="basis-1/2">
      {#each faqs as i}
        <li class="group">
          <div class="border-base-content/10 relative flex w-full items-center gap-2 border-t border-white/10 py-5 text-left text-base font-semibold md:text-lg">
            <span class="text-base-content flex-1 font-medium text-white/75">{i.question}</span>
          </div>
          <div class="mb-5 overflow-hidden whitespace-pre-line text-white/50">
            {i.answer}
          </div>
        </li>
      {/each}
      <div class="text-base-content/80 border-t border-white/10 pt-4 text-white/50">
        Got more? Send me a DM on
        <a class="text-base-content border-b border-launchfast" target="_blank" href="https://twitter.com/rishi_raj_jain_">Twitter</a>
        or by
        <a href="mailto:jain71000@gmail.com" target="_blank" class="text-base-content border-b border-launchfast">email</a>.
      </div>
    </ul>
  </div>
</section>
