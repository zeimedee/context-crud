import React,{useContext,useState} from 'react'
import { CrudContext } from './context/crudContext'
import Posts from './posts';

function Post() {
    const {setPost,setPosts, post,} = useContext(CrudContext);

    const handleClick =(e)=>{
        e.preventDefault();
        setPosts(posts => posts.concat(post))
        setPost('')
    }
    return (
        <div>
        <labe>Post</labe>
        <input
            type='text'
            value={post}
            onChange={(e)=>{setPost(e.target.value)}}
        />
        <button
        onClick={handleClick}
        >Post</button>
            
        </div>
    )
}

export default Post
