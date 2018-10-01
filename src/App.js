import React, { Component } from 'react';
import Book from './Book/Book'

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
                <Book
                author= {item.author}
                title= {item.title}
                year= {item.year}
                />
              ))};
            </ul>

        }



      </div>
    );
  }
}


export default App;

// return <Person
// click={() => this.deletePersonHandler(index)} 
// name={person.name} 
// age={person.age}
// key={person.id}
// changed={(event) => this.nameChangedHandler(event, person.id)}/>
// Name: {props.author} | Title: {props.title} | Year: {props.year} | Picture: {props.imageLink}
