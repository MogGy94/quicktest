import React from "react"

const NavBar = ()  => {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Hola Quick</a>
            <form className="form-inline">
                <input onChange={(e)=>handleChange(e)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <ButtonWrapper>
                    <RButton name= "SERIE" onChange={jaja}></RButton>
                    <RButton name= "PELICULA"  onChange={jaja}></RButton>
                </ButtonWrapper>
            </form>
            
           
        </nav>
        )
}
var handleChange =(e) =>{
    console.log("Holi",e.target.value)
    
}

const RButton = (props) =>{
    console.log(props)
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
export default NavBar;