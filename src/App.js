import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/chiranjeevi2686/demo/user/repo/posts')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))

  }
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="App">
        <h1 className="App">Cheeky Monsters</h1>
        <SearchBox
          placeholder='monster search'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    )
  }
}

export default App;
