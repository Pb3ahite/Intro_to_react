import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        const p = this.props.Post
        return ( 
            <div className="card" style={{ width: '18rem' }}>
                <img src={arguments.urlToImage ?? 'https://placeholder.com/150'} className="car-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{a.title}</h5>
                    <p className="card-text">{a.description}</p>
                    <a href={a.url} target='_blank' className="btn btn-primary">Go somewhere</a>
                </div>

            </div>
        )
    }
}