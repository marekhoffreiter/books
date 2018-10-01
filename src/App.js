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
          isloaded: true,
          items: json,
        })
      });
  }

  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading</div>;
    }

    else
      return (
        <div className="App">

          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.author} | Title: {item.title} | Year: {item.year} | Picture: {item.imageLink}
                ></li>
            ))};
  
            </ul>


        </div>
      );
  }
}

export default App;
