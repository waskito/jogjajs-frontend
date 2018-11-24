import fetch from 'isomorphic-fetch'

export function getPosts() {
  return fetch('http://localhost:1337/blog')
}

export function getPost(slug) {
  return fetch(`http://localhost:1337/blog/${slug}`)
}