import { getCollection } from "astro:content";


export const getSortedPosts = async () => {
  const blogPostsList = await getCollection('blog');
  // console.log("blogPostsList");
  // console.log(blogPostsList);

  const filteredPosts = blogPostsList.filter(({ data }) => data.draft === false && !!data.published);

  // have drafts visible in dev, but hidden in production...
  /*
  const filteredPosts = blogPostsList.filter(({ data }) => {
  if (import.meta.env.PROD) {
    return data.draft === false && !!data.published;
  }
  return true; // In dev, show all posts
});
  */

  const sortedPosts = filteredPosts.sort((a,b) => {
    // convert strings to valid dates
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateB.getTime() - dateA.getTime(); // newest first
  });

  console.log("***********************")
  console.log("***********************")
  console.log("sortedPosts");
  console.log(sortedPosts);
  console.log("***********************")
  console.log("***********************")
  return sortedPosts;
};

export const getPostBySlug = async () => {
  const blogPostsList = await getCollection('blog');
  console.log("blogPostsList");
  console.log(blogPostsList);

  const filteredPosts = blogPostsList.filter(({ data }) => data.draft === false);

  const sortedPosts = filteredPosts.sort((a,b) => b.data.published - a.data.published);

  return sortedPosts;
};