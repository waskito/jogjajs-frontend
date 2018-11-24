import React from 'react'
import styled from 'styled-components'
import { getPosts } from '../services/blog'

import Post from '../components/Post'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const IndexPage = ({ posts }) => (
    <ul>
      {posts && posts.map(p => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
)

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
