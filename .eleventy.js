const i18n = {
    en: require('./src/_data/i18n/en.json'),
    es: require('./src/_data/i18n/es.json')
};

module.exports = function(eleventyConfig) {
    // Copy the `assets` directory to the compiled site
    eleventyConfig.addPassthroughCopy("src/assets");
    
    // Watch for changes in these directories
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addWatchTarget("./src/styles/");

    // Add i18n shortcode
    eleventyConfig.addShortcode("i18n", function(key, lang = 'en') {
        return i18n[lang][key] || key;
    });

    // Add redirect shortcode
    eleventyConfig.addShortcode("redirect", function(url) {
        return `
            <!DOCTYPE html>
            <meta http-equiv="refresh" content="0; url=${url}">
            <link rel="canonical" href="${url}">
        `;
    });

    // Add language collection
    eleventyConfig.addCollection("pages_en", function(collection) {
        return collection.getFilteredByGlob("src/en/**/*.njk");
    });
    
    eleventyConfig.addCollection("pages_es", function(collection) {
        return collection.getFilteredByGlob("src/es/**/*.njk");
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
