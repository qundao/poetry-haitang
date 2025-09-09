import fonts from "@chinese-fonts/index";
import loadjs from "loadjs";
import config from "@/config/config.json";

type fontName = keyof typeof fonts;

// https://github.com/cnpm/unpkg-white-list/pull/213
const fontCDN = "https://registry.npmmirror.com";

// 仅保留少数字体
const font_names = config.site.fonts;

// 修改字体顺序
export const fontList = font_names.map((name) => {
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
