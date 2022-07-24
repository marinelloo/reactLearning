import './styles/App.css'
import PostList from "./components/PostList";
import {useState} from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Bavascript 2', body: 'Cescription'},
        {id: 3, title: 'Cavascript 3', body: 'Description'}
    ])

    const [selectSort,setSelectedSort] = useState('');
    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        console.log(sort)
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

  return (
    <div className="App">
        <PostForm create = {createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MySelect defaultOption="Sort By" value={selectSort} onChange={sortPosts} options={[
                {name: 'Sort By Name', value: 'name'},
                {name: 'Sort By Description', value: 'description'},
            ]}/>
        </div>
        {posts.length !== 0 ?
            <PostList posts={posts} title="List of Posts" remove={removePost}/>
            : <h1 style={{textAlign: 'center'}}>
                Posts not found
            </h1>
        }

    </div>

  );
}

export default App;
