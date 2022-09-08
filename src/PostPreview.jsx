import React from 'react'

const PostPreview = (props) => {
  return (
    <div>
        <div className="post-preview">
            <a href="post.html">
            <h2 className="post-title">{props.title}</h2>
            <h3 className="post-subtitle">{props.subtitle}</h3>
            </a>
            <p className="post-meta">
            Posted by 
            <a href="#!"> {props.author} </a>
            on {props.date}
            </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
    </div>
  )
}

export default PostPreview