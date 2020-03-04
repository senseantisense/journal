module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_assets/");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("2017/");
  eleventyConfig.addPassthroughCopy("2018/");
  eleventyConfig.addPassthroughCopy("2019/");


  // <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
 
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });

  return {
    
  };
};
