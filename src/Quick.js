import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Grid,{Ctest,CListtest} from './Components/Card'


import {getItems} from './servicios/consultar'

import {QuickContext,QuickProvider} from './Context/Context'
import { isContext } from 'vm';


var root= { 
  primary: '#ddd',
  dark: '#333',
  light: '#fff',
  shadow: '0 1px 5px rgba(104,104,104,0.8)',
}
var footerStyle = {
  marginTop: "2rem",
  background: root.dark,
  color: root.light,
  textAlign: 'center',
  padding: '1rem',
}

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
              // console.log(contex.state.results)
              var {set_flag_pelicua,set_flag_serie} = contex.methods
              var {flag_pelicua,flag_serie} = contex.state
              var {totalResults} = contex.state.results
              window.onscroll = function() {uploadDAta()};
              
              var uploadDAta = async () => {
                var {upload_results,setPage} = contex.methods; 
                var {page,nombre_de_pelicula} = contex.state
                var bound = 170*page

                console.log("page",page,document.documentElement.scrollTop,document.body.scrollTop)
                console.log("todo",totalResults,Math.ceil(parseFloat(totalResults)/10),bound)
                console.log(".................")
                if (document.body.scrollTop > bound || document.documentElement.scrollTop > bound){
                  if (page+1 <= Math.ceil(parseFloat(totalResults)/10)){
                    setPage(page+1)  
                    
                    var new_results = await getItems(nombre_de_pelicula,flag_serie?"series":"movie",page+1)
                    // console.log(new_results.data.Search)
                    upload_results(new_results.data.Search)
                  }
                }
                
                
                // #var results = await getItems(nombre_de_pelicula,flag_pelicua? "movie":"series")
                // setResults(results.data)
                
            }
            
              return(
                <div className="App">
               
                  <NavBar></NavBar>
                  <ButtonWrapper>
                      <RButton c={flag_serie} name= "SERIE" handlerCheck={set_flag_serie}></RButton>
                      <RButton c={flag_pelicua} name= "PELICULA"  handlerCheck={set_flag_pelicua}></RButton>
                  </ButtonWrapper>
                  {contex.state.loading?  <Loading_stuff></Loading_stuff>:<br></br>}
                  <Grid>
                   {CListtest(contex.state.results)}
                  </Grid>
                  <footer style={footerStyle}> Proyect desarrollado por Edilberto Cañon Pasquel para aplicar a Quick </footer>
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
    <label className=""  >
        <input checked={props.c} type="checkbox"  autoComplete="off"   onChange={(e)=>props.handlerCheck(e)} /> {props.name}
    </label>
    )

}

class ButtonWrapper  extends React.Component{

  render(){
     return(
      <div className="wrapper"  >
          {this.props.children}
      </div>
     )
  }
}




var Loading_stuff = () =>{
  return(
    <React.Fragment>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  )
}


export default Quick;
