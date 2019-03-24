import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Grid,{Ctest,CListtest} from './Components/Card'


import {getItems} from './servicios/consultar'

import {QuickContext,QuickProvider} from './Context/Context'

class Quick extends Component {
  constructor(){
    super();
    this.state = {
      results : []
    }
    // this.setBusqueda = this.setBusqueda.bind(this)
  }

  render() {
    return (
      <QuickProvider>
        <QuickContext.Consumer>
          {(contex) =>{
              console.log(contex.state.results)
              
              return(
                <div className="App">
               
                  <NavBar></NavBar>
                  <ButtonWrapper>
                            <RButton name= "SERIE" onChange={jaja}></RButton>
                            <RButton name= "PELICULA"  onChange={jaja}></RButton>
                  </ButtonWrapper>
                  <Grid>
                   {CListtest(contex.state.results)}
                  </Grid>
                  
                </div>
              )
            }
          }
        </QuickContext.Consumer>
      </QuickProvider>
    )} 

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
