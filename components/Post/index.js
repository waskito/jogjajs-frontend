import React from 'react'
import { Link } from '../../routes'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route='blog' params={{ slug: post.slug }}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem