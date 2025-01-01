module.exports = function(eleventyConfig) {
    // Copy the `assets` directory to the compiled site
    eleventyConfig.addPassthroughCopy("src/assets");
    
    // Watch for changes in these directories
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addWatchTarget("./src/styles/");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
