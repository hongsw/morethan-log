const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Martin Hong",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "GPTs developer",
    bio: "I develop everything using GPT.",
    email: "hongbuzz_at_gmail.com",
    linkedin: "martin-hong-sw",
    github: "hongsw",
    instagram: "",
  },
  projects: [
    {
      name: `OpenAI News Actions`,
      href: "https://github.com/hongsw/openai-actions-api-list",
    },
  ],
  // blog setting (required)
  blog: {
    title: "대GPTs시대 | 졸면안되-AI 정보사이트",
    description: "많은 정보를 😺고양이의 센스처럼, 🐶강아지의 후각처럼 생각해봅니다ㅎ",
  },

  // CONFIG configration (required)
  link: "https://ai-actions.com",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
