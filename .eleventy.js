// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/fonts");

    // eleventyConfig.addPlugin(syntaxHighlight);
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}