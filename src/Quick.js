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







export default Quick;
