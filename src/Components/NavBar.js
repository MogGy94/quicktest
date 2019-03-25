import React from "react"
import {QuickContext} from '../Context/Context'
import {getItems} from '../servicios/consultar'

const NavBar = ()  => {
    return(
        <QuickContext.Consumer>
           {(context) =>{
               var {methods} = context
              
               return(
                    <nav className="navbar navbar-dark bg-dark text-white">
                    <a className="navbar-brand">Hola Quick</a>
                        <form className="form-inline">
                            <input onChange={(e)=>handleChange(e,methods)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success my-2 my-sm-0" disabled type="submit">Busca Tu Peli</button>
                        </form>
                    </nav>
               )
           }}
        </QuickContext.Consumer>
        )


}

const handleChange  = async (e,methods) =>{
    var {setBusqueda,setResults,setPage,set_flag_loading} = methods;
    setBusqueda(e)
    
    if (e.target.value.length >= 3 ){
        var name = e.target.value
        var results = await getItems(name)
        console.log(results)
        setResults(results.data)
        setPage(1)
        set_flag_loading(false) 
    }
    else if (e.target.value.length ==0  ){
        set_flag_loading(false) 
    }
    else{
        set_flag_loading(true)    
        setResults({
                Search: []
        })
    }
}


export default NavBar;