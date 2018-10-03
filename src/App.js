import React, { Component } from 'react';
import Book from './Book/Book'
import Reserve from './Book/Reserve';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isReserved: false,
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
          isReserved: false,
        })
      });
  }

  render() {
    const { isLoaded, items, isReserved } = this.state;
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
                  link={item.link}
                  key={`${item.author}${item.title}`}
                  isReserved={isReserved}
                  onClick={this.makeReservation}
                />
              ))}
            </ul>
          )}
        )
      </div>
    );
  }
}
