import fonts from "@chinese-fonts/index";
import loadjs from "loadjs";

type fontName = keyof typeof fonts;

// https://github.com/cnpm/unpkg-white-list/pull/213
const fontCDN = "https://registry.npmmirror.com";

// 仅保留少数字体
const FONT_NAMES = [
  "京華老宋体",
  "汇文明朝体",
  "思源屏显臻宋",
  "铁蒺藜体",
  "飞花宋体",
  "黄令东齐伋体",

  "朱雀仿宋",
  "逐浪萌芽字",

  "优设标题黑",
  "得意黑",
  "霞鹜漫黑",

  "江西拙楷",
  "演示佛系体",
  "演示悠然小楷",
];

// 修改字体顺序
export const fontList = FONT_NAMES.map((name) => {
  const fontEntry = Object.entries(fonts).find(([_, font]) => font.name === name);
  return fontEntry ? { key: fontEntry[0] as fontName, name } : null;
}).filter(Boolean) as Array<{ key: fontName; name: string }>;

export const changeFont = async (fontKey: fontName) => {
  const font = fonts[fontKey];
  const fontLinks = font.remotePath.map((fontInfo) => {
    return fontInfo.path.replace(
      `packages/${fontKey}`,
      `${fontCDN}/@chinese-fonts/${fontKey}/latest/files`,
    );
  });
  const fontFamily = font.remotePath[0].css.family;
  await loadjs(fontLinks, { returnPromise: true });
  document.documentElement.style.setProperty(
    "--custom-font",
    JSON.stringify(fontFamily),
  );
  localStorage.setItem(
    "custom-font",
    JSON.stringify({
      fontFamily,
      fontLinks,
    }),
  );
};
