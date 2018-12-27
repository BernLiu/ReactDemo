import React, { Component } from 'react';
import './App.css';
import Table from './componetn/table';
import FormComponent from './componetn/Form';

class App extends Component {
  state = {
    characters : [
      {
        'name':'CaoCao',
        'job':'Janitor'
      },
      {
        'name':'SunQuan',
        'job':'Bouncer'
      },
      {
        'name':'LiuBei',
        'job':'Aspring actress'
      },
      {
        'name':'DongZhuo',
        'job':'Bartender'
      }
    ]
  };

  removeCharacter = index =>{
    const { characters } = this.state;

    this.setState({
      characters : characters.filter(
        (character,i) => {
          return i !== index;
        }
      )
    });
  }

  handleSubmit = character => {
    this.setState({
      characters : [...this.state.characters,character]
    });
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table characterData = {characters}  removeCharacter ={this.removeCharacter}/>
        < FormComponent handleSubmit ={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
