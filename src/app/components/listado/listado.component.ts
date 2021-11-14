import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { EmpleadoService } from 'src/app/services/empleado.service';
import {Empleado} from '../../interfaces/empleado'


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Empleado>;

  
  //dataSource: MatTableDataSource<ListadoItem>;
  dataSource=new MatTableDataSource();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombreCompleto', 'correo','telefono','Acciones'];

  constructor(private empleadoService:EmpleadoService) {
   // this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
   this.dataSource.data=this.empleadoService.EMPLEADOS
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarEmpleado(i:number){
    console.log('eliminar', i,i+1)
    this.empleadoService.eliminarEmpleado(i)
    this.dataSource.data=this.empleadoService.EMPLEADOS
  }
}
