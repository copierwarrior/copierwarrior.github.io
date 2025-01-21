export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'css': 'css',
    'favicon': 'favicon',
    'img': 'img',
    'js': 'js',
    'node_modules/font-awesome/fonts': 'fonts',
    'node_modules/bootstrap-sass/assets/fonts/bootstrap': 'fonts/bootstrap',
  });
  eleventyConfig.setIncludesDirectory('_includes');
  eleventyConfig.setLayoutsDirectory('_layouts');

  eleventyConfig.addGlobalData('copyright', '&copy;' + new Date().getFullYear() + ' Copier Warrior');
};
