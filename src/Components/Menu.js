import React from 'react'
import Card from './Card';
const Menu = () =>{
    return(
      <div class="container">
      <div class="memus">
      <div class="flex-container">
         <div class="flex-item-left">
            <div class="menu-title"> Specials</div>
            
            </div>
         <div class="flex-item-right">         

        <button class="btn btn-warning">
                    Menus
                </button>
                </div>
      </div>
      <Card />
      </div>
      </div>
    );
}

export default Menu;