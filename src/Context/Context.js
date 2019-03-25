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
        setResults : (results) => {this.setState({results})},
        setPage: (page) => {this.setState({page})},

        upload_results:(new_res) => {this.setState({
            results:{
                ...this.state.results,
                Search:this.state.results.Search.concat(new_res)
            }})
        },
        set_flag_serie: () =>{
            this.setState({flag_serie: !this.state.flag_serie})
            if (this.state.flag_pelicua){
                this.setState({flag_pelicua:!this.state.flag_pelicua})
            }
        },
        set_flag_pelicua: (flag_serie) =>{
            this.setState({flag_pelicua:!this.state.flag_pelicua})
            if (this.state.flag_serie){
                this.setState({flag_serie: !this.state.flag_serie})
            }
        },
       
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