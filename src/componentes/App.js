import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
    citas: {}
  }

  componentDidMount() {
    // console.log('Mounted!!')
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      // console.log('Hay algo!!');
      this.setState ({
        citas: JSON.parse(citasLS)
      })
    } else {
      // console.log('No hay nada!!');
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = infoCita => {
    // console.log(infoCita);

    // Tomar una copia del state
    const citas = {...this.state.citas};

    // Agregarlo al state actual
    citas[`citas${Date.now()}`] = infoCita;

    // Set al state
    this.setState({
      citas
    })
  }


  borrarCita = id => {
    // console.log('Eliminando' + id);

    // Leer el state
    const citas = {...this.state.citas}
    // console.log(id);
    // console.log(citas);

    // Borrar el state
    delete citas[id]

    console.log(citas);
    
    // Actualizar el state
    this.setState({
      citas
    })

  }

  render() {
    return (
     <div className="body">
        <div className="container">
        <Header titulo="Administrador de pacientes de Veterinaria" />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas 
                citas={this.state.citas} 
                borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
