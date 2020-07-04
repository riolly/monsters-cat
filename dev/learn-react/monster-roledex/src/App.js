import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: '',
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }
  handleChange = e => {
    this.setState({ searchString: e.target.value })
  }
  render() {
    const { monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchString.toLowerCase()))
    return (
      <div className="App">
        <h1 className="title">Monsters Cat</h1>
        <SearchBox 
          placeholder="Search your monster" 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
