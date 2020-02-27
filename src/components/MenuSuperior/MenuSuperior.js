import React, { Component } from "react";
import { Link } from "react-router-dom";
import logotop from "../../assets/img/logotop.png"
import '../MenuSuperior/MenuSuperior.css'

class MenuSuperior extends Component {
    render() {
        return (
            <div className=" container">
                <a className="menuSup_Href" href="/">
                    <img className="menuSup-Logo" src={logotop} width="330" height="200" alt="logotop"></img>
                </a>     <br></br>
                <ul className="menuSup-nav nav">
                    <li>
                        <Link to="/">   <input type="button" value="Planetas" class="btn btn-outline-warning " /> </Link>
                    </li>
                    <li >
                        <Link to="/personagem"> <input type="button" value="Personagens" class="btn btn-outline-warning " /> </Link>
                    </li>
                    <li>
                        <Link to="/nave" ><input type="button" value="Naves" class="btn btn-outline-warning " /> </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuSuperior;

