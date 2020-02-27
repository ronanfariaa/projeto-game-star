import React, { Component } from "react";
import starships from "../../services/starships";


class Nave extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      loading: '',
      starships: {
        name: '', model: '', manufacturer: '', cost_in_credits: '',
        length: '', crew: '', passengers: '', starship_class: '', films: [],
      }

    }
  }

  getPlanetData = () => {
    let idStarships = Math.floor(Math.random() * 61 + 1);
    this.setState({ loading: true })
    starships.getStarships(idStarships).then(starships => {
      this.setState({
        starships: starships.data,
        loading: false,
        error: starships.ok
      })
    }).catch(error => {
      this.setState({
        loading: false,
        error: false
      })
    })
  };

  componentDidMount() {
    this.getPlanetData()
  }
  render() {
    return (
      <div class="col-sm">
        <div className="col-sm  ">
          <div class="card-img-overlay">
            <div class="d-flex justify-content-center" >
              <center>
                <div class="container">
                  <div class="col align-self-center ">
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark"><h4>{this.state.starships.name}</h4></p>
                    < p class="border-0 border-light rounded list-group-item text-sm-center text-warning bg-dark"> Modelo: {this.state.starships.model}</p>
                    < p class="border-0 border-light rounded list-group-item text-sm-center text-warning bg-dark"> Clase: {this.state.starships.starship_class}</p>
                    < p class="border-0 border-light rounded list-group-item text-sm-center text-warning bg-dark">Passageiros : {this.state.starships.passengers}</p>
                    < p class="border-0 border-light rounded list-group-item text-sm-center text-warning bg-dark">Valor :{this.state.starships.cost_in_credits}</p>
                    < p class="border-0 border-light rounded bottom-0 list-group-item text-sm-center text-warning bg-dark">Fabricante :{this.state.starships.manufacturer}</p>
                    <p class="border-0 border-light rounded list-group-item text-center text-warning bg-dark">Destaque em {this.state.starships.length} Filmes</p>
                    <br></br>
                    <center><input class="btn btn-outline-danger " type="button" value="Próximo" onClick={this.getPlanetData} /></center>
                  </div>
                </div>
              </center>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nave;