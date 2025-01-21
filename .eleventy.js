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

  eleventyConfig.addGlobalData('site', 'The Copier Warrior');
  eleventyConfig.addGlobalData('copyright', '&copy;' + new Date().getFullYear() + ' Copier Warrior');
  eleventyConfig.addGlobalData('email', 'dale@thesalesrebellion.com');
  eleventyConfig.addGlobalData('facebook', 'salesrebellion');
  eleventyConfig.addGlobalData('mobile', '(407) 719-2844');
  eleventyConfig.addGlobalData('x', 'SalesRebellion');
  eleventyConfig.addGlobalData('youtube_channel', 'https://youtube.com/channel/UC-BqyrLcd1uRE9zjAZuFDeg');
};
