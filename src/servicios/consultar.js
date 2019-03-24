import Axios from "axios";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2f68a198&s=ama"

export const getItems = () =>{
    return(Axios(url))
}