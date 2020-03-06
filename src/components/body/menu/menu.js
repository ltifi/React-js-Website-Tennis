import React from 'react';
import './menu.css';
function Menu(){
    return(
        <div className="menu">
           <b>Menu </b>
           <hr/>
           <ul>
  <li><a href="#Home"> Home</a></li>
  <li><a href="#ListeT"> Liste des tournois Grand chelem </a></li>
  <li><a href="#ListeJ"> classement joueurs</a></li>
  <li><a href="#Contact"> Contact</a></li>
  <li><a href="#About"> About</a></li>
</ul>
          
        </div>
    )
}
export default Menu;