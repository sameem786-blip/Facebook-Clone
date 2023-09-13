import React from 'react'
import "./posts.scss"
import Post from '../post/Post';

const Posts = () => {
    const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/11894773/pexels-photo-11894773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/11894773/pexels-photo-11894773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/11894773/pexels-photo-11894773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];
  return (
      <div className="posts">
          {posts.map(post => (
              <Post post={post} key={post.id}/>  
          ))}
    </div>
  )
}

export default Posts