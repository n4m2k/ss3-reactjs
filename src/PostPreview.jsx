import React from 'react'
import { Link } from 'react-router-dom'
const PostPreview = (props) => {
  return (
    <div>
        <div className="post-preview">
            <Link to="/post">
            <h2 className="post-title">{props.title}</h2>
            <h3 className="post-subtitle">{props.subtitle}</h3>
            </Link>
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