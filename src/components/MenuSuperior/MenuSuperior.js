import React, { Component } from "react";
import { Link } from "react-router-dom";
import logotop from "../../assets/img/logotop.png"

class MenuSuperior extends Component {
    render() {
        return (
            <div className=" container">
                <a class="align-items-center " href="/">
                    <center><img src={logotop} width="330" height="200" alt="logotop"></img></center>
                </a>     <br></br>
                <ul className="nav justify-content-center   ">
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

