import React,{useContext} from 'react'
import { CrudContext } from './context/crudContext'

function Posts() {
    const {posts,setPosts} = useContext(CrudContext)
    const removeItem=(n)=>{ 
        setPosts(posts => posts.filter(post => post !== n))
    }
    return (
        <div>
            <hr/>
            {posts.map((value, index)=>{
                return <div>
                <li key={index}>{value}{index}</li>
                <button onClick={(e)=>{
                    e.preventDefault()
                    removeItem(value)
                }}>X</button>
                </div>
            })}
            
        </div>
    )
}

export default Posts
