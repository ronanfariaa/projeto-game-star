import React, { Component } from 'react';
import planets from '../../services/planets';

class Jogo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      loading: '',
      planet: {
        name: '', rotation_period: '', orbital_period: '', diameter: '',
        climate: '', gravity: '', terrain: '', population: '', films: [],
      }

    }
  }

  getPlanetData = () => {
    let idPlanet = Math.floor(Math.random() * 61 + 1);
    this.setState({ loading: true })
    planets.getPlanet(idPlanet).then(planet => {
      this.setState({
        planet: planet.data,
        loading: false,
        error: planet.ok
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
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark"><h2>{this.state.planet.name}</h2></p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark"> Clima : {this.state.planet.climate}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark"> Gravidade : {this.state.planet.gravity}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark">População : {this.state.planet.population}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark">Territorio :{this.state.planet.terrain}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark">Diametro :{this.state.planet.diameter}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark">Destaque em {this.state.planet.films.length} Filmes</p>
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
export default Jogo;