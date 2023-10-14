import { apiUrl } from "@/utils/url"

export async function allBlogs(search='') {
  const res = await fetch(`${apiUrl}/social_awareness_blogs`, {cache: "no-cache"});
  const data = await res.json();
  return data.blogs;
}

export async function allArchives() {
  const res = await fetch(`${apiUrl}/blog_archives?s=""`, {cache: "no-cache"});
  const data = await res.json();
  return data
}

export async function recent_five_blogs() {
  const res = await fetch(`${apiUrl}/recent_five_blogs?s""`, {cache: "no-cache"});
  const data = await res.json();
  return data;
}

export async function blog_categories() {
  const res = await fetch(`${apiUrl}/blog_categories?s""`, {cache: "no-cache"});
  const data = await res.json();
  return data;
}

export async function blog_by_category(slug, s='') {
  const res = await fetch(`${apiUrl}/blog_categories/${slug}?s=${s}`, {cache: "no-cache"});
  const data = await res.json();
  return data.blogs;
}

export async function blog_by_archive(slug, s='') {
  const res = await fetch(`${apiUrl}/blog_archives/${slug}?s=${s}`, {cache: "no-cache"});
  const data = await res.json();
  return data.blogs;
}

export async function blog_by_slug(slug) {
  const res = await fetch(`${apiUrl}/social_awareness_blogs/${slug}`, {cache: "no-cache"});
  const data = await res.json();
  return data;
}

export async function blog_linktree(s='') {
  const res = await fetch(`${apiUrl}/linktrees?s=${s}`, {cache: "no-cache"});
  const data = await res.json();
  return data.blogs;
}
