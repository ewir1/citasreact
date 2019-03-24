import React, { Component } from 'react'

export default class Cita extends Component {
  render() {

    const {fecha, hora, mascota, propietario, sintomas} = this.props.info;

    return (
      <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0 font-weight-bold text-success">{mascota}</h3>
            <p className="card-text m-0"><span className="font-weight-bold">Nombre dueño: </span>{propietario}</p>
            <p className="card-text m-0"><span className="font-weight-bold">Fecha: </span>{fecha}</p>
            <p className="card-text m-0"><span className="font-weight-bold">Hora: </span>{hora}</p>
            <p className="card-text"><span className="font-weight-bold">Sintomas: </span>{sintomas} <br /></p>

            <button onClick={() => this.props.borrarCita(this.props.idCita)} className="btn btn-danger">Borrar &times;</button>

            <hr/>
        </div>
      </div>
    )
  }
}
