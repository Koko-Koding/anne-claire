import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {

  // Add a filter to format urls with base URL
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("public/css/bundle.css");
  
  // pass through all public assets
  eleventyConfig.addPassthroughCopy("public/**/*.*");

  eleventyConfig.setServerOptions({
    liveReload: true,
    port: 8080,
  });

}
