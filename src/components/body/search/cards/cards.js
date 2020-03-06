import React from 'react';
import './cards.css';

function Cards(props){
    return(
        <div className="imagelist">
         
        <div><img src={props.img} alt={props.title} height="125"width="125"></img></div> 
        <div>{props.title}</div>
        <div>{props.desc}</div>
        </div>
    )
}
export default Cards ;