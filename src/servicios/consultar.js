import Axios from "axios";


// type = movie, series, episode+
export const getItems = (name,type= "movie",page= 1) =>{
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=2f68a198&s=${name}&type=${type}&page=${page}`
    // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=2f68a198&s=${name}`
    return(Axios(url))
}