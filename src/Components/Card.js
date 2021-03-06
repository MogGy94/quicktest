import React from 'react'

import './css/Card.css'
import image from "../assets/noimage.jpg"

class Grid extends React.Component{
    render(){
        return (
            <div className="grid-container" onScroll={()=>{console.log("scrollin")}}>
                {this.props.children}
            </div>
        )
    }
}

// a = new Array(n);


var  FancyCard = ({props}) => {
    // console.log(props)
    var mySt = {width : "100%"}
    // console.log(props.Poster)
    return(
        <div className="grid-item " draggable="true"> 
            <div className="card">            
                <div className= "card-img-center imgBx">
                    <img src={props.Poster =="N/A"? image:props.Poster} alt="NOT IMAGE AVAIABLE"  style={mySt}/>
                </div>
                <div className= "details">          
                    <h6>{props.Title}</h6>
                    <h6>{props.Year}</h6>
                </div>
            </div>
        </div>
    )

}




export const Ctest = (l) => {
    var cards = new Array(l);
    //var cards = new Array(1,2,3,4,5,6,7,8,9);
    // console.log(cards.length,cards);
    for(var i = 0 ; i < cards.length ; i++ ){
        cards[i] = <FancyCard i ={i} key={i}></FancyCard>;
    }
    return cards
}

export const CListtest = (res) => {
    // console.log(res.results)
    var carList
    var sIndex = Object.keys(res).indexOf("Search")
    // console.log(Object.keys(res).indexOf("Search"))
    if (sIndex >= 0){
        carList = res.Search.map((item,i)=>{
            // console.log(i)
            return <FancyCard props = {item} key={i+123}></FancyCard>
        })
    }
    
    // console.log(carList)
    return carList
}

export default Grid