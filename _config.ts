import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import brotli from "lume/plugins/brotli.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import sitemap from "lume/plugins/sitemap.ts";
import robots from "lume/plugins/robots.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import nav from "lume/plugins/nav.ts";

const site = lume();
site.use(base_path());
site.use(nav(/* Options */));
site.use(sitemap(/* Options */));
site.use(robots(/* Options */));
site.use(brotli());
site.use(date());
site.use(favicon());
site.use(jsx());
site.use(nunjucks(/* Options */));
site.use(tailwindcss(/* Options */));
site.use(postcss());
site.use(picture(/* Options */));
site.use(transformImages());
site.use(googleFonts({
  cssFile: "styles.css",
  fonts: {
    text:
      "https://fonts.google.com/share?selection.family=Questrial&display=swap",
  },
}));


export default site;
site.copy("/assets");
site.copy("/media");

site.addEventListener("afterBuild", () => {
  for (const page of site.pages) {
    console.log(page.src.path); // Logs the paths of all processed pages
  }
});
