import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Testing() {

  // api's link 
  const postUrl = `https://jsonplaceholder.typicode.com/posts`;
  const userUrl = `https://jsonplaceholder.typicode.com/users`;

  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {

    axios.get(postUrl)
      .then((res) => {
        setPost(res.data);
      })
      .catch(console.error)

    axios.get(userUrl)
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.error)
    console.log(post)
    console.log(user)
  }, []);

  return (
    <ul>
      {
        post.map((post, index) => (
          <li key={index}>
            {post.name}
          </li>
        ))
      }
    </ul>
  )
}

export default Testing