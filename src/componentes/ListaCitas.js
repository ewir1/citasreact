import React, { Component } from 'react'
import Cita from './Cita';

export default class ListaCitas extends Component {
  render() {

    const citas = this.props.citas;
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas aquí';
    

    return (
      <div>
          <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="">
                    {Object.keys(this.props.citas).map(cita => (
                        <Cita 
                            key={cita} 
                            idCita={cita}
                            info={this.props.citas[cita]} 
                            borrarCita={this.props.borrarCita}
                        />
                    ))}
                </div>
            </div>
          </div>
      </div>
    )
  }
}
