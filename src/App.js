import React, { Component } from 'react';
import Book from './Book/Book'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    return (
      <div className="App">
        {!isLoaded
          ? <div> Loading </div>
          : (
            <ul className="books">
              {items.map(item => (
                <Book
                  author={item.author}
                  title={item.title}
                  year={item.year}
                  imageLink={item.imageLink}
                  key={`${item.author}${item.title}`}
                />
              ))}
            </ul>
          )}
        )
      </div>
    );
  }
}
