import { Component ,OnInit, AfterViewInit, viewChild, ViewChild} from '@angular/core';

import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';//para trabajar con los dialogos o modales

import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment'; //para poder trabajar con las fechas

import { ModalDetalleVentaComponent } from '../../Modales/modal-detalle-venta/modal-detalle-venta.component';
import { VentaService } from '../../../../Services/venta.service';
import { UtilidadService } from '../../../../Reutilizable/utilidad.service';
import { Venta } from '../../../../Interfaces/venta';

export const MY_DATA_FORMATS={
  parse:{
    dateInput:'DD/MM/YYYY'

  },
  display:{
    dateInput:'DD/MM/YYYY',
    monthYearLabel:'MMMM YYYYY'
  }
}


@Component({
  selector: 'app-historial-venta',
  templateUrl: './historial-venta.component.html',
  styleUrl: './historial-venta.component.css',
  providers:[{
    provide:MAT_DATE_FORMATS,useValue:MY_DATA_FORMATS
  }]
})
export class HistorialVentaComponent implements OnInit,AfterViewInit {

  formularioBusqueda: FormGroup;
  opcionesBusqueda: any[]= [
    {value:"fecha", descripcion:"Por fechas"},
    {value:"numero", descripcion:"Numero venta"}
  
  ]
  columnasTabla:string[] = ['fechaRegistro','numeroDocumento','tipoPago','total','accion']
  dataInicio: Venta[] = [];
  datosListaVenta =  new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTotal!:  MatPaginator;


  constructor(
    private fb:FormBuilder,
    private dialog:MatDialog,
    private _ventaServicio: VentaService,
    private  _utilidadServicio: UtilidadService

  ){
    this.formularioBusqueda = this.fb.group({
      buscarPor:['fecha'],
      numero: [''],
      fechaInicio: [''],
      fechaFinal: ['']
    })

    this.formularioBusqueda.get("buscarPor")?.valueChanges.subscribe(value => {
      this.formularioBusqueda.patchValue({
        numero:"",
        fechaInicio:"",
        fechaFin:""
      })
    })


  }

  ngOnInit(): void {
    
  }

  //se crea la paginacion
  //significa que cargara la paginacion luego de que se carguen los datos 
  ngAfterViewInit(): void {
    this.datosListaVenta.paginator = this.paginacionTotal;
    
    
  }


  
  aplicarFiltroTable(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log(filterValue);
    this.datosListaVenta.filter = filterValue.trim().toLocaleLowerCase();
    console.log(this.datosListaVenta.filter);

  }

  buscarVentas(){
    let _fechaInicio: string ="";
    let _fechaFin: string ="";

    if(this.formularioBusqueda.value.buscarPor === "fecha"){
      _fechaInicio  = moment.default(this.formularioBusqueda.value.fechaInicio).format('DD/MM/YYYY');
      _fechaFin  = moment.default(this.formularioBusqueda.value.fechaFin).format('DD/MM/YYYY');

      if(_fechaInicio === "Invalid date" || _fechaFin === "Invalid date"){
        this._utilidadServicio.mostrarAlerta("Debe ingresar ambas fechas","Error!")
        return;
      }

    }

    this._ventaServicio.historial(
      this.formularioBusqueda.value.buscarPor,
      this.formularioBusqueda.value.numero,
      _fechaInicio,
      _fechaFin
    ).subscribe({
      next:(data) =>{
        if(data.status)
        this.datosListaVenta =  data.value;
        else
        this._utilidadServicio.mostrarAlerta("No se encontraron datos", "Error!");
      },
      error:(e) => {

      }

    })
  }

  verDetalleVenta(_venta:Venta){
    this.dialog.open(ModalDetalleVentaComponent,{
      data:_venta,
      disableClose:true,
      width: '700px'

    })
  }

}
