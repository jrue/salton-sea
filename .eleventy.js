const path = require("path");

module.exports = function(eleventyConfig) {

  // Watch SCSS (don’t copy it)
  eleventyConfig.addWatchTarget("src/assets/scss");

  // Passthrough assets
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/assets/data": "assets/data" });

  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "assets/js/bootstrap.bundle.min.js"
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2": "assets/fonts/bootstrap-icons.woff2",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff": "assets/fonts/bootstrap-icons.woff",
  });

  // Optional: create a .nojekyll so Pages doesn’t try to Jekyll-process your output
  eleventyConfig.addPassthroughCopy({ ".nojekyll": ".nojekyll" });

  // Read pathPrefix from env (set by the workflow), fallback to "/" for local dev
  const pathPrefix = process.env.BASE_URL || "/";

  return {
    pathPrefix,                      // <-- important for GitHub Pages
    dir: { input: "src", output: "_site" }
  };
};
