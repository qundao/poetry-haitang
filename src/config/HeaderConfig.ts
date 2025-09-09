import config from "@/config/config.json";

const base = config.site.base_path.replace(`/+$`, "");

export const headerConfig = {
  links: [
    {
      text: '首页',
      href: `${base}`,
    },
    // {
    //   text: '诗词 + AI',
    //   href: `${base}/ai`,
    // },
    {
      text: '每日一诗 🔥',
      href: `${base}/today`,
    },
    {
      text: '诗集',
      // href: `${base}/collections`,
      links: [
        {
          text: '所有诗集 🔥',
          href: `${base}/collections`,
        },
        {
          text: '唐诗三百首',
          href: `${base}/collections/1`,
        },
        {
          text: '宋词三百首',
          href: `${base}/collections/2`,
        },
        {
          text: '元曲三百首',
          href: `${base}/collections/109`,
        },
        {
          text: '给孩子的诗',
          href: `${base}/collections/3`,
        },
      ],
    },
    {
      text: '诗词',
      links: [
        {
          text: '按朝代检索 🔥',
          href: `${base}/dynasties`,
        },
        {
          text: '所有诗人',
          href: `${base}/authors`,
        },
        {
          text: '所有诗词',
          href: `${base}/works`,
        },
      ],
    },
  ],
  actions: [
    // {
    //   text: 'Search',
    //   href: `${base}/search`,
    //   target: '_self',
    // }
  ],
};
