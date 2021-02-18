import {useState} from 'react'
import './App.css';
import {CrudContext} from './context/crudContext'
import Post from './post'
import Posts from './posts'

function App() {
  const [post,setPost] = useState('');
  const [posts,setPosts] = useState([])
   return (
    <div>
      <CrudContext.Provider value={{post, setPost,posts,setPosts}}>
        <Post />
        <Posts />
      </CrudContext.Provider>
    </div>
  );
}

export default App;
