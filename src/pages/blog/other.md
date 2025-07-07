index.astro

---
// import { redirect } from "astro/runtime/server";
Astro.redirect('/blog/page/1');
---



<!-- O)O)O)O)O)O)O)O)O)O)O)O)O)O -->
<!-- O)O)O)O)O)O)O)O)O)O)O)O)O)O -->
<!-- O)O)O)O)O)O)O)O)O)O)O)O)O)O -->
<!-- [page].astro -->
---
import type { GetStaticPaths } from "astro";
// import { getCollection } from "astro:content";
import MainLayout from "../../layouts/MainLayout.astro";
import BlogLayout from "../../layouts/BlogLayout.astro";
import Paginate from "../../components/Paginate.astro";
import { getSortedPosts } from "../../lib/server-utils";
import { formatDatePretty, formatDateNumeric } from "../../lib/utils";

// const allBlogPosts = await getCollection("blog");

// export const prerender = true;

// export const getStaticPaths = async (allBlogPosts, { paginate }) => {
// export const getStaticPaths = async ({ paginate }) => {
//   // const posts = await getSortedPosts(allBlogPosts);
//   const posts = await getSortedPosts();
//   return paginate(posts, { pageSize: 10 })
// };
  // return posts.map((entry) => ({
  //   params: { slug: entry.data.slug },
  //   props: { entry }
  // }));
  // const blogEntries = await getCollection("blog");
  // return blogEntries.map((entry) => ({
    // params: { slug: entry.data.slug },
    // params: { slug: entry.id },
    // props: { entry }
  // }));
// };
// const title = "Blog | MC";
// const posts = await Astro.glob("../content/blog/*.md");
// const posts = await getCollection("blog");
// const posts = await getSortedPosts();

// ~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~
const layoutTitle = "MC | Blog";

// const { posts } = Astro.props;
// get the three most recent posts
// const recentPosts = posts
// const recentPosts = allBlogPosts
  // .sort((a, b) => new Date(b.data.published) - new Date(a.data.published))

// let posts = await getSortedPosts();

// const recentPosts = posts.slice(0, 3);
  // .sort((a, b) => new Date(b.data.published) - new Date(a.data.published))
  // .slice(0, 3);
// generate url path for every blog collection entry
// export const getStaticPaths = async () => {
  // // const blogEntries = await getCollection("blog");
  // const blogEntries = await getSortedPosts();
  // return blogEntries.map((entry) => ({
  //   params: { slug: entry.slug },
  //   props: { entry }
  // }));
// };
// const { entry } = Astro.props;

// !property 'render' does not exist on type 'never'
// const { Content } = await entry.render();

---

<MainLayout>
  <section class="blog">
    <div class="blog__header">
      <h1>Welcome to My Blog</h1>
    </div>
    <div class="blog__content">
      <div class="blog__left-column">
        <div class="blog__list">
          <ul>
            <!-- {allBlogPosts.map((post) => ( -->
            <!-- {posts.map((post) => (
              <div class="blog__list-item">
                <li>
                  <div class="blog__item-image">
                    {/* <img src="" alt=""> */}
                  </div>
                  <div class="blog__item-info">
                    <h2>
                      <a href={`/blog/${post.data.slug}`}>{post.data.title}</a>
                    </h2>
                    <div class="blog__item-date">
                      <div>{formatDateNumeric(post.data.published)}</div>
                    </div>
                  </div>
                  </li>
              </div>
            ))} -->
          </ul>
        </div>
      </div>
      <div class="blog__right-column">

        <div class="blog__sidebar">
          <div class="blog__recent-posts">
            <div class="blog__recent-posts-header">
              <h3>Recent Posts</h3>
              <div class="blog__recent-posts-list">
                <!-- {recentPosts.map((post) => (
                  <div class="blog__recent-post-item 1">
                    <div class="blog__recent-post-title">
                      <h4>{post.data.title}</h4>
                    </div>
                    <div class="blog__recent-post-info">
                      <div class="blog__recent-post-author">
                        <span>Theodore McKinley</span>
                      </div>
                      <div class="blog__recent-post-date">
                        <span>{formatDateNumeric(post.data.published)}</span>
                      </div>
                    </div>
                  </div>
                ))} -->
              </div>  
            </div>
          </div>
        </div>
        <div class="blog__ad-spot">Ad goes here.</div>
      </div>
    </div>
    <div class="blog__paginate">
      <!-- <Paginate desc="Hello World!" /> -->
    </div>
  </section>
  <!-- <BlogLayout posts={posts}> -->
    <!-- <ul>
      {posts.map((post) => (
        <div class="blog__list-item">
          <li>
            <div class="blog__item-image">
              {/* <img src="" alt=""> */}
            </div>
            <div class="blog__item-info">
              <h2>
                <a href={`/blog/${post.data.slug}`}>{post.data.title}</a>
              </h2>
              <div class="blog__item-date">
                <div>{formatDateNumeric(post.data.published)}</div>
              </div>
            </div>
            </li>
        </div>
      ))}
    </ul> -->
  <!-- </BlogLayout> -->
</MainLayout>

<!-- <MainLayout {title} >

</MainLayout> -->

<!-- <MainLayout > -->
  <!-- <h1>Blog</h1> -->
  <!-- <ul>
    {posts.map((post) => (
      <li><a href={`/blog/${post.slug}`}>{post.data.title}</a></li>
    ))}
  </ul>
</MainLayout> -->

<!-- O)O)O)O)O)O)O)O)O)O)O)O)O)O -->
<!-- O)O)O)O)O)O)O)O)O)O)O)O)O)O -->
<!-- O)O)O)O)O)O)O)O)O)O)O)O)O)O -->
<!-- [...slug].astro -->

---
// import type { GetStaticPaths } from "astro";
// import MainLayout from "../../layouts/MainLayout.astro";
// import BlogLayout from "../../layouts/BlogLayout.astro";
// import BlogHeader from "../../components/headers/BlogHeaders.astro";
// import { imageConfig } from "astro:assets";
// import { getCollection, getEntry, render } from "astro:content";
// import { formatDateNumeric } from "../../lib/utils";
// import { getPostBySlug } from "../../lib/server-utils";
// import { sequence } from "astro:middleware";

// generate url path for every blog collection entry

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export const getStaticPaths = async () => {
//   const blogEntries = await getCollection("blog");
//   return blogEntries.map((entry) => ({
//     // params: { slug: entry.data.split("/") },
//     // params: { slug: entry.data },
//     params: { slug: entry.id },
//     props: { entry }
//   }));
// };
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export const getStaticPaths = async () => {
//   const blogEntries = await getCollection("blog");
//   return blogEntries.map((post) => ({
//     params: { slug: post.data.slug },
//     props: { post }
//   }));
// };

// const { slug } = Astro.params;


// console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
// console.log("slug: ", slug)
// console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
// get full entry (contains render method)
// const entry = await getEntry('blog', slug as string);
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
// console.log("entry: ", entry)
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
// redirect or error
// if (!entry) {
//   throw new Error(`No Blog post found for slug: ${slug}`);
// }

// if (slug === undefined) {
//   throw new Error(`Slug not found. It's required in your md file to have one.`);
// }

// const entry = await getEntry('blog', slug);
// if (entry === undefined) {
//   return Astro.redirect('/404');
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// export const prerender = true;
// const { entry } = Astro.props;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const { entry, post } = Astro.props;

// console.log("entry: ");
// console.log(entry);
// console.log("------------------------------")
// console.log("------------------------------")
// console.log("Astro")
// console.log(Astro)
// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
// // !property 'render' does not exist on type 'never'
// get rendered content
// const { Content } = await entry.render();
// ~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~
// const { Content } = await render(entry);
// ~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~

// import BlogLayout from "../../layouts/BlogLayout.astro";
// import { getSortedPosts } from "../../lib/server-utils";

// export async function getStaticPaths() {
//   const posts = await getSortedPosts();

//   return posts.map((post) => ({
//     params: { slug: post.slug.split("/") }, // for catch-all route
//     props: { entry: post },
//   }));
// }

// const { entry } = Astro.props;
// const { Content } = await entry.render();

---

<!-- <MainLayout> -->
  <!-- <section class="blogPost"> -->
    <!-- <div class="">test</div> -->
    <!-- <BlogHeader
      title={entry.data.title}
      category={entry.data.category}
      author={entry.data.author}
      published={formatDateNumeric(entry.data.published)}
      image={entry.data.image}
    />
    <article class="blogPost__post-content">
      <Content />
    </article> -->
  <!-- </section> -->
<!-- </MainLayout> -->