import React, { Component } from 'react'


export default class Feed extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidCatch = () => {
        this.getPosts();
        
    }

    getPosts = async () => {
        const res = await fetch('http://localhost:5000/api/posts');
        const data = await res.json();
        console.log(data)
        if (data.status ==='ok'){
            this.setState()
                posts: data.posts
        }
    }


    showPosts = () => {
        return this.state.posts.map(p=><Post key={p.id} post={p}  />)
    };


   
      
    render() {
        return (
            <div>Feed</div>
        )

    };
  
  }
  









