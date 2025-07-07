---
title: "Let's Create a Database on Neon"
published: 2025-05-10
updated: 2025-05-10
author: "John Doe"
image:
  src: "/images/banana.jpg"
  alt: "A picture of bananas"
description: "Have you ever wondered about the Banana?"
draft: false
category: "food"
slug: "database-with-neon"
---


"
---
pages/blog/index.astro
import MainLayout from "../../layouts/MainLayout.astro";
import { getSortedPosts } from "../../lib/server-utils";
import Paginate from "../../components/Paginate.astro";

const posts = await getSortedPosts();
const pageSize = 10;
const page = 1;
const totalPages = Math.ceil(posts.length / pageSize);
const paginatedPosts = posts.slice((page - 1) * pageSize, page * pageSize);
---
<MainLayout>
  same layout as /blog/page/[page].astro
  <h1>Welcome to My Blog</h1>
  {paginatedPosts.map(post => (
    <h2>{post.data.title}</h2>
  ))}
  <Paginate currentPage={page} totalPages={totalPages} />
</MainLayout> -->
"