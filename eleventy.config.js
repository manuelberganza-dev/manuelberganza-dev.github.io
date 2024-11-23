const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("code/img");
    eleventyConfig.addPassthroughCopy("code/js");
    eleventyConfig.addPassthroughCopy("code/assets");

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    return {
        dir: {
            input: "code",
            output: "docs"
        }
    }
}