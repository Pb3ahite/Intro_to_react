import React, { Component } from 'react';

export default class Newspage extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = async () => {
    const res = await fetch(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6'
    );
    const data = await res.json();
    if (data.status === 'ok') {
      this.setState({
        articles: data.articles
      });
    }
  };

  render() {
    return (
      <div>
        
        <main className="flex">
          {this.state.articles.map((item, index) => (
            <div class="card" style={{ width: '18rem' }}>
              <img src={item.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <a href={item.url} class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }
}
