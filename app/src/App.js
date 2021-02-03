import './App.css';
import React, { useEffect } from "react";
import { connect } from 'react-redux';

import SearchForm from './components/SearchForm.js';
import { fetchCharacters } from "./store/actions/actions.js";

function App(props) {

  useEffect(() => {

    props.fetchCharacters();

  }, [])

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <SearchForm />
      {props.characters.map((character) => {
        return(
        <h1 key={character.id}>{character.name}</h1>
        )
      })}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return{
    characters: state.characters
  }
}

export default connect(mapStateToProps, { fetchCharacters })(App);
