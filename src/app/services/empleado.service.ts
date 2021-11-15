import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  findEmpleado!: Empleado;
  EMPLEADOS: Empleado[] = [
    { id: 0, nombreCompleto: 'Felipe Martinez', correo: 'lmartinez@gmail.com', telefono: 3104356789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 1, nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 3104356789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 2, nombreCompleto: 'Juan Toro', correo: 'jtoro@gmail.com', telefono: 3134455789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    { id: 3, nombreCompleto: 'Maria Perez', correo: 'mperez@gmail.com', telefono: 3124354769, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    { id: 4, nombreCompleto: 'Juan Salgado', correo: 'jsalgado@gmail.com', telefono: 3114334789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 5, nombreCompleto: 'Claudia Marin', correo: 'cmarin@gmail.com', telefono: 3134354779, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 6, nombreCompleto: 'Pedro Cano', correo: 'pcano@gmail.com', telefono: 3122356789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 7, nombreCompleto: 'Sofia Lopez', correo: 'sperez@gmail.com', telefono: 3134455789, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 8, nombreCompleto: 'Luz  va Perez', correo: 'lperez@gmail.com', telefono: 3155566789, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 9, nombreCompleto: 'Henry alvarez', correo: 'halvarez@gmail.com', telefono: 3104356767, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    { id: 10, nombreCompleto: 'Juanita Cao', correo: 'jcano@gmail.com', telefono: 3134356987, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 11, nombreCompleto: 'Juliana Sanchez', correo: 'jsanchez@gmail.com', telefono: 3113457789, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    { id: 12, nombreCompleto: 'Ligia Arias', correo: 'larias@gmail.com', telefono: 3124356776, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 13, nombreCompleto: 'Olga Morales', correo: 'omorales@gmail.com', telefono: 3134356743, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { id: 14, nombreCompleto: 'Camilo salazar', correo: 'csalazar@gmail.com', telefono: 3164356709, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    { id: 15, nombreCompleto: 'valentina henao', correo: 'vhenao@gmail.com', telefono: 31543567834, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Viudo' },
    { id: 16, nombreCompleto: 'walentina henao', correo: 'wid:1,zhenao@gmail.com', telefono: 31543567834, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
  ];
  constructor() { }
  agregarEmpleado(empleado: Empleado): void {
    this.EMPLEADOS.unshift(empleado);
  }
  buscarEmpleado(id: number): Empleado | undefined {
    return this.EMPLEADOS.find(p => p.id == id);
  }
  editarEmpleado(empleado: Empleado): void {
    console.log('service', empleado)
    this.findEmpleado = this.EMPLEADOS.find(p => p.id == empleado.id)!
    this.findEmpleado.id = empleado.id;
    this.findEmpleado.nombreCompleto = empleado.nombreCompleto;
    this.findEmpleado.correo = empleado.correo;
    this.findEmpleado.telefono = empleado.telefono;
    this.findEmpleado.sexo = empleado.sexo;
    this.findEmpleado.fechaIngreso = empleado.fechaIngreso;
    this.findEmpleado.estadoCivil = empleado.estadoCivil;
    console.log(this.findEmpleado)
  }

  eliminarEmpleado(indice: number): void {
    //this.EMPLEADOS.splice(indice,1);
    this.EMPLEADOS = this.EMPLEADOS.filter(p => { return p.id != indice })
    console.log(this.EMPLEADOS)
  }
  get empleados() {
    return this.EMPLEADOS;
  }
}
