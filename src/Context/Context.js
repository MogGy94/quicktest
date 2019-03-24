import React,{Component} from 'react';
import {State} from './State';

export const QuickContext = React.createContext();

export class QuickProvider extends Component {
    constructor(){
        super()
        this.state = State
        //this.setBusqueda = this.setBusqueda.bind(this)
    }
    
    methods = {
        setBusqueda: (e) =>{this.setState({nombre_de_pelicula:e.target.value}) },
        setResults : (results) => {this.setState({results})}
    }
    
    render(){
        return(
            <QuickContext.Provider value = {{

                state: this.state,
                methods: this.methods
            }}>
                {this.props.children}
            </QuickContext.Provider>
        )
    }

    componentDidMount(){
        // console.log(this.state.nombre_de_pelicula)
    }

}