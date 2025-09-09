import config from "@/config/config.json";

const base = config.site.base_path.replace(`/+$`, "");

export const footerConfig = {
    links: [
        {
            title: '网站导航',
            links: [
                // { text: '诗词 + AI', href: `${base}/ai` },
                { text: '每日一诗', href: `${base}/today` },
                { text: '所有诗集', href: `${base}/collections` },
                { text: '所有朝代', href: `${base}/dynasties` },
                { text: '所有诗人', href: `${base}/authors` },
                { text: '所有诗词', href: `${base}/works` },
            ],
        },
        {
            title: '热门诗集',
            links: [
                { text: '唐诗三百首', href: `${base}/collections/1` },
                { text: '宋词三百首', href: `${base}/collections/2` },
                { text: '元曲三百首', href: `${base}/collections/109` },
                { text: '古诗十九首', href: `${base}/collections/13` },
                { text: '给孩子的诗', href: `${base}/collections/3` },
            ],
        },
        {
            title: '热门诗人',
            links: [
                { text: '李白', href: `${base}/authors/10041` },
                { text: '杜甫', href: `${base}/authors/10035` },
                { text: '苏轼', href: `${base}/authors/10001` },
                { text: '李清照', href: `${base}/authors/10043` },
                { text: '纳兰性德', href: `${base}/authors/10020` },
            ],
        },
        {
            title: '热门诗词',
            links: [
                { text: '将进酒', href: `${base}/works/10214` },
                { text: '满江红', href: `${base}/works/10042` },
                { text: '定风波', href: `${base}/works/10154` },
                { text: '岳阳楼记', href: `${base}/works/10089` },
                { text: '归去来兮辞', href: `${base}/works/10277` },
            ],
        },
    ],
    secondaryLinks: [
        { text: '服务条款', href: `${base}/terms-of-service` },
        { text: '隐私政策', href: `${base}/privacy-policy` },
        { text: '站点地图', href: `${base}/sitemap-index.xml` },
        { text: '关于诗社', href: `${base}/about` },
    ],
    socialLinks: [
        // { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/' },
        // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
        // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
        // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
        // { ariaLabel: 'RSS', icon: 'tabler:rss', href: `${base}/rss.xml` },
    ],
    footNote: `© 2024-${new Date().getFullYear()} All Rights Reserved.`,
};
