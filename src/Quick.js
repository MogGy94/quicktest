import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Grid,{Ctest} from './Components/Card'
import {State} from './Context/State'

import {getItems} from './servicios/consultar'

import {QuickContext,QuickProvider} from './Context/Context'

class Quick extends Component {
  constructor(){
    super();
    this.state = State
    this.setBusqueda = this.setBusqueda.bind(this)
  }

  render() {
    return (
      <QuickProvider>
        <QuickContext.Consumer>
          {(contex) =>{
              console.log(contex.state.nombre_de_pelicula,contex.state.nombre_de_pelicula.length)   
              console.log(contex.state.results)         
              return(
                <div className="App">
               
                  <NavBar></NavBar>
                  <button type="button" className="btn btn-block btn-outline-primary" onClick={() =>getData()}>getData</button>
                  <ButtonWrapper>
                            <RButton name= "SERIE" onChange={jaja}></RButton>
                            <RButton name= "PELICULA"  onChange={jaja}></RButton>
                  </ButtonWrapper>
                  
                  <Grid>
                    {Ctest(10)}
                  </Grid>
                </div>
              )
            }
          }
        </QuickContext.Consumer>
      </QuickProvider>
    );
  }

  setBusqueda(e){
    this.setState({nombre_de_pelicula:e.target.value})
  }

  componentDidMount(){

  }
}

var getData = async () =>{ 
  console.log("Fetching data")
  console.log(await getItems("matrix","movie"))
}



const RButton = (props) =>{
  // console.log(props)
return( 
  <label className="btn btn-outline-info "  >
      <input type="checkbox" checked autoComplete="off" onChange={()=>jaja}/> {props.name}
  </label>
  )

}

class ButtonWrapper  extends React.Component{
  handleChange(){
      console.log("Holi")
  }
  render(){
     return(
      <div className="btn-group-toggle" data-toggle="buttons" onChange={() =>this.handleChange()}>
          {this.props.children}
      </div>
     )
  }
}

var jaja = () =>{

  console.log("hoooli")
}






export default Quick;
