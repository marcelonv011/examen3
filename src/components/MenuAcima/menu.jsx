import React from "react";
import "./styles/style.css"
import "./menu.css"
import { BrowserRouter, Route, Link } from "react-router-dom"


function MenuAcima() {
  return (
    
      <div class="cabezal">
      <img class="logo" src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-car-logo-template-design-car-logo-with-modern-frame-isolated-png-image_886170.jpg"/>
        <nav>
            <ul>
          <li><a href="#">Principal</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Ja tenho conta</a></li>
          <li><a href="#">Proximamente</a></li>
            </ul>
        </nav>
    </div>  
  );
}

export default MenuAcima;
