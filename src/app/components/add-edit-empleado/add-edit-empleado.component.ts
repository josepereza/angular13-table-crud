import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../../interfaces/empleado'

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmpleadoComponent implements OnInit {
  estadosCiviles: any[]= ['Soltero','Casado','Viudo','Separado'];
  idEmpleado!:number;
  accion:string = 'Crear';

  myForm!: FormGroup;

  constructor(private fb :FormBuilder,
    private empleadoService:EmpleadoService,
    private router:Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute) {

this.myForm = fb.group({
  id:[''],
nombreCompleto: ['', [Validators.required,Validators.maxLength(20)]],
correo: ['', [Validators.required,Validators.email]],
fechaIngreso: ['', Validators.required],
telefono: ['', [Validators.required,Validators.maxLength(10)]],
estadoCivil: ['', Validators.required],
sexo: ['', Validators.required],
});

this.idEmpleado = aRoute.snapshot.params['id'];
console.log('add-edit', this.idEmpleado)

}


  ngOnInit(): void {
    if(this.idEmpleado != undefined){
      this.accion = "Editar";
      this.buscarEmpleado();
  } 
  }
  buscarEmpleado(){
    const empleado:any= this.empleadoService.buscarEmpleado(this.idEmpleado);
    this.myForm.patchValue({
      id:empleado.id,
      nombreCompleto: empleado.nombreCompleto,
      correo: empleado.correo,
      telefono: empleado.telefono,
      fechaIngreso: empleado.fechaIngreso,
      estadoCivil: empleado.estadoCivil,
      sexo: empleado.sexo
    });
  }
  guardarEmpleado(){

    const empleado: Empleado = {
      id:this.myForm.value.id,
      nombreCompleto: this.myForm.value.nombreCompleto,
      correo: this.myForm.value.correo,
      telefono: this.myForm.value.telefono,
      fechaIngreso: this.myForm.value.fechaIngreso,
      estadoCivil: this.myForm.value.estadoCivil,
      sexo: this.myForm.value.sexo
    };

    if(this.idEmpleado !== undefined){
      console.log(empleado)
      this.editarEmpleado(empleado);
    }else{
      this.agregarEmpleado(empleado);
    }
  }

  agregarEmpleado(empleado:Empleado):void{
    this.empleadoService.agregarEmpleado(empleado);

      this.snackBar.open('El empleado fue agregado con exito','',{
        duration: 3000
      });

      this.router.navigate(['/']);
  }

 

  editarEmpleado(empleado:Empleado):void{
    this.empleadoService.editarEmpleado(empleado);

    this.snackBar.open('El empleado fue actualizado con exito','',{
      duration: 3000
    });

    this.router.navigate(['/']);
  }
}
