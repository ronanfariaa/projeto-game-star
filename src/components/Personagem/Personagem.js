import React, { Component } from "react";
import people from "../../services/people";



class Personagem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      loading: '',
      people: {
        name: '', height: '', mass: '', hair_color: '',
        skin_color: '', eye_color: '', birth_year: '', gender: '', homeworld: '', films: [],
      }

    }
  }

  getPlanetData = () => {
    let idPeople = Math.floor(Math.random() * 61 + 1);
    this.setState({ loading: true })
    people.getPeople(idPeople).then(people => {
      this.setState({
        people: people.data,
        loading: false,
        error: people.ok
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
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark"><h2>{this.state.people.name}</h2></p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark"> Altura : {this.state.people.height}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark"> Peso : {this.state.people.mass}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark">Cor do Cabelo : {this.state.people.population}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark">Quantos Anos :{this.state.people.birth_year}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark">Genero:{this.state.people.gender}</p>
                    <p class="border-0 border-light rounded list-group-item text-lg-center text-warning bg-dark">Destaque em {this.state.people.films.length} Filmes</p>
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
export default Personagem;