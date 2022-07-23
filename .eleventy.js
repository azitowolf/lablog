// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/scripts");
    // eleventyConfig.addPassthroughCopy("./src/_site/scripts/prism.js");

    // eleventyConfig.addPlugin(syntaxHighlight);
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}