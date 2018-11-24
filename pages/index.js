import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts/Main'
import { getPosts } from '../services/blog'

import Post from '../components/Post'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(p => <Post key={p.title} post={p} />)}
    </ul>
  </Layout>
)

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
