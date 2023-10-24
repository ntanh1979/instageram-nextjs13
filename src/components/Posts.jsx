import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "ntanh",
            userImg : `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR418zJYjF6GK5cRJj8XChxCQyEhEZDxwa8SGMv1ujAy4qKQZpv90GYbKFP8xCgy7Q9bjg&usqp=CAU" ,
            caption : "Nice picture"
        },
        {
            id: "2",
            username: "nhanh",
            userImg : `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypoEza8O7zxqquAGdHLezPV0_0AhtZpBcWpHETYNqsQ&s" ,
            caption : "Nice picture"
        },
        {
            id: "3",
            username: "ndanh",
            userImg : `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFz4F5NJ6GX0xPLlDzjHfpE5zjaYw_F-xgL_HGPHS&s" ,
            caption : "Nice picture"
        },
    ]
  return (
    <div>
      {
        posts.map((post)=>(
             <Post 
                key={post.id}  
                id={post.id}  
                username = {post.username}
                userImg= {post.userImg}
                img = {post.img}
                caption = {post.caption}

             />   
        )
        )
      }
    </div>
  )
}
