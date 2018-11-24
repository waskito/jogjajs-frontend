import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import { getPost } from '../services/blog';
import Layout from '../layouts/Main';
import Head from 'next/head'

const PostPage = ({ post }) => (
  <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>{post.title}</h1>
      <img src={`http://0.0.0.0:1337/${post.cover.url}`} alt={post.title}/>
      <p>{post.content}</p>
  </Layout>
)

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  const json = await res.json()
  return { post: json }
}

export default PostPage