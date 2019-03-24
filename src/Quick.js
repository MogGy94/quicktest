import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Grid,{Ctest} from './Components/Card'


import {getItems} from './servicios/consultar'
class Quick extends Component {
  render() {
    return (
      <div className="App">
      <button type="button" className="btn btn-outline-primary" onClick={() =>getData()}>getData</button>
        <NavBar></NavBar>
        <Grid>
          {Ctest(10)}
        </Grid>
        
      </div>
    );
  }
}

var getData = async () =>{ 
  console.log("Fetching data")
  console.log(await getItems())
}


export default Quick;
