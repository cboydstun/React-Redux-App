import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getBreweries} from './action/index';
import Breweries from './components/Breweries';

function App(props) {

  const applyBreweries = () => {
    props.getBreweries();
  }

  return (
    <div className="App">
      <div className="header">
      <h1 onClick={applyBreweries}>Breweries in Dallas, TX!</h1>
      </div>
      <div>
      <Breweries isFetching={props.isFetching} breweries={props.breweries} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
  breweries: state.breweries,
  state: state,
  isFetching: state.isFetching
  }
}

export default connect(
  mapStateToProps,
  {getBreweries}
)(App);