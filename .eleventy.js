export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy({ 'node_modules/font-awesome/fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy({ 'node_modules/bootstrap-sass/assets/fonts/bootstrap': 'fonts/bootstrap' });
  eleventyConfig.addPassthroughCopy('favicon');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.setIncludesDirectory('_includes');
  eleventyConfig.setLayoutsDirectory('_layouts');

  eleventyConfig.addGlobalData('copyright', '&copy;' + new Date().getFullYear() + ' Copier Warrior');
};
