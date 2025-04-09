
export default function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("public/css/bundle.css");
  
  // pass through all public assets
  eleventyConfig.addPassthroughCopy("public/**/*.*");



  eleventyConfig.setServerOptions({
    liveReload: true,
    port: 8080,
  });

}
