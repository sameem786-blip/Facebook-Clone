import React from 'react'
import "./posts.scss"
import Post from '../post/Post';
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios';

const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get('/posts', {
        credentials: 'include',
      }).then(
        (res) => res.data,
        // console.log(data)
      ),
  });

  return (
      <div className="posts">
          {error ? "error" : (isLoading ? "Loading" : data.map(post => (
              <Post post={post} key={post.id}/>  
          )))}
    </div>
  )
}

export default Posts