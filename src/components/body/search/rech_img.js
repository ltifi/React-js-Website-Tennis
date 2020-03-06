import React from 'react';
import './rech_img.css';
import  Recherche from './recherche/recherche';
import Cards from './cards/cards'
function RechercheforImg(){
    return(
        <div className="rechImg">
         
          < Recherche/>
         <div className="liste"> 
            < Cards img="image2.jpg" title="Novac djokovic" desc="classé premier"/>
            < Cards img="image3.jpg" title="Rfael Nadal" desc="classé deuxiéme"/>
            < Cards img="image4.jpg" title="Dominic Thiem" desc="classé 3 éme"/>
         </div>
        </div>
    )
}
export default RechercheforImg ;