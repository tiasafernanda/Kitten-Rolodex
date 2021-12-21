import React, { Component } from 'react';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

class Kitten extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kittens: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ kittens: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { kittens, searchField } = this.state;
    const filteredKittens = kittens.filter((kitten) =>
      kitten.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <h1> Kittens Rolodex </h1>
        <SearchBox
          placeholder='Search Your Kitten'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList kittens={filteredKittens} />
      </div>
    );
  }
}

export default Kitten;
