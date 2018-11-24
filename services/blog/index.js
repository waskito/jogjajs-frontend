import fetch from 'isomorphic-fetch'

export function getPosts() {
  return fetch('http://0.0.0.0:1337/blogs')
}

export function getPostDetail(slug) {
  return fetch(`http://0.0.0.0:1337/blogs/${slug}`)
}