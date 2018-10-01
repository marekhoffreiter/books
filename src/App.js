import React, { Component } from 'react';


class App extends Component {

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
      .then(json => {
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
          : <ul>
              {items.map(item => (
                <li key={`${item.title}${item.author}`}>
                  Name: {item.author} | Title: {item.title} | Year: {item.year} | Picture: {item.imageLink}
                  ></li>
              ))};
            </ul>

        }



      </div>
    );
  }
}


export default App;
