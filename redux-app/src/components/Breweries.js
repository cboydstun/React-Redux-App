import React from 'react';
import Brewery from './Brewery'

const Breweries = (props) => {
  return (
    <div className ="breweryBox">
      <div className="heading">
        {props.isFetching ? (<p>We have acquired this brewery list!</p>) : 
        (
        <div className="address">
        {props.breweries.map( (brewery) =>  <Brewery key={brewery.id} breweryName={brewery.name} address={brewery.street} />)}
        </div>)}
      </div>
    </div>
  )}

export default Breweries;