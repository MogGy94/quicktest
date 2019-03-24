import React from 'react'

import './css/Card.css'
class Grid extends React.Component{
    render(){
        return (
            <div className="grid-container">
                {this.props.children}
            </div>
        )
    }
}

// a = new Array(n);


var  FancyCard = (a) => {
    console.log(a.i)
    var mySt = {width : "100%"}

    return(
        <div className="grid-item " draggable="true"> 
            <div className="CCARD">
                <input type="checkbox" name=""/>
                
                <div className= "toggle"> +</div>
                <div className= "imgBx">
                    <img src="/assets/dance.gif" alt="holi"  style={mySt}/>
                </div>
                <div className= "shadow"> +</div>
                <div className= "details">
                    
                    <h2> {a.i+" "}   Relative sizing</h2>
                    <p>    Icons inherit the font-size of their parent container which allow 
                        them to match any text you might use with them. With the following
                        classes, we can increase or decrease the size of icons relative to
                        that inherited font-size.
                    </p>
                </div>
            </div>
        </div>
    )

}




export const Ctest = (l) => {
    var cards = new Array(l);
    //var cards = new Array(1,2,3,4,5,6,7,8,9);
    console.log(cards.length,cards);
    for(var i = 0 ; i < cards.length ; i++ ){
        cards[i] = <FancyCard i ={i} key={i}></FancyCard>;
    }
    return cards
}

export default Grid