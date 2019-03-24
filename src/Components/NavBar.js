import React from "react"
import {QuickContext} from '../Context/Context'
import {getItems} from '../servicios/consultar'

const NavBar = ()  => {
    return(
        <QuickContext.Consumer>
           {(context) =>{
               var {methods} = context
              
               return(
                    <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">Hola Quick</a>
                        <form className="form-inline">
                            <input onChange={(e)=>handleChange(e,methods)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
               )
           }}
        </QuickContext.Consumer>
        )
}

const handleChange  = async (e,methods) =>{
    var {setBusqueda,setResults} = methods;
    setBusqueda(e)
    
    if (e.target.value.length >= 3 ){
        var name = e.target.value
        var results = await getItems(name)
        setResults(results.data)
    }else{
        setResults({
                Search: []
        })
    }
}


export default NavBar;