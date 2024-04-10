import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { ProductoService } from '../../../../Services/producto.service';
import { VentaService } from '../../../../Services/venta.service';
import { UtilidadService } from '../../../../Reutilizable/utilidad.service';

import { Producto } from '../../../../Interfaces/producto';
import { Venta } from '../../../../Interfaces/venta';
import { DetalleVenta } from '../../../../Interfaces/detalle-venta';

import Swal from 'sweetalert2';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent implements OnInit{

  listaProductos:Producto[] = []; //trae todos los productos
  listaProductosFiltro: Producto[] = [];

  listaProductosParaVenta: DetalleVenta[] = [];
  bloquearBotonRegistrar:boolean = false; //variable para bloquear el boton

  productoSeleccionado!: Producto; //Variable que almacena temporalmente el producto seleccionado
  tipodePagoPorDefecto:string = "Efectivo";
  totalPagar: number = 0;

  formularioProductoVenta: FormGroup;
  columnasTabla: string[] = ['producto','cantidad','precio','total','accion'];
  datosDetalleVenta = new MatTableDataSource(this.listaProductosParaVenta);

  retornarProductosPorFiltro(busqueda:any):Producto[]{
    const valorBuscado = typeof busqueda === "string"? busqueda.toLocaleLowerCase():busqueda.nombreCompleto.toLocaleLowerCase();

    return this.listaProductos.filter(item => item.nombreCompleto.toLocaleLowerCase().includes(valorBuscado));
  }

  constructor(
    private fb:FormBuilder,
    private _productoServicio:ProductoService,
    private _ventaServicio:VentaService,
    private _utilidadService:UtilidadService

  ){
    this.formularioProductoVenta = this.fb.group({
      producto:['',Validators.required],
      cantidad:['',Validators.required]
    });

    this._productoServicio.lista().subscribe({
      next:(data) => {
        if(data.status) {
            const lista = data.value as Producto[];
            this.listaProductos = lista.filter(p => p.esActivo == 1 && p.stock > 0);//solo productos con stock mayor a 0


        }
    
      },
      error:(e) => {}
      
    })

    this.formularioProductoVenta.get('producto')?.valueChanges.subscribe( value =>{
      this.listaProductosFiltro = this.retornarProductosPorFiltro(value);

    } )

  }

  ngOnInit(): void {
    
  }

  //para mostrar un producto que se ha seleccionado por busqueda
  mostrarProducto(producto: Producto):string{
    return producto.nombreCompleto;
  }

  productoParaVenta(event:any){
    this.productoSeleccionado = event.option.value;
  }

  //Agrega productos para su venta 
  agregarProductoParaVenta(){
    const _cantidad : number = this.formularioProductoVenta.value.cantidad;
    const _precio:number = parseFloat(this.productoSeleccionado.precio);
    const _total:number = _cantidad * _precio;
    this.totalPagar = this.totalPagar + _total;

    this.listaProductosParaVenta.push({
      idProducto: this.productoSeleccionado.idProducto,
      descripcionProducto: this.productoSeleccionado.nombreCompleto,
      cantidad: _cantidad,
      precioTexto: String(_precio.toFixed(2)),
      totalTexto: String(_total.toFixed(2))

    })

    this.datosDetalleVenta = new MatTableDataSource(this.listaProductosParaVenta);
    

    this.formularioProductoVenta.patchValue({
      producto:'',
      cantidad:''

    })
  }

  eliminarProducto(detalle: DetalleVenta){
    this.totalPagar = this.totalPagar - parseFloat(detalle.totalTexto),
    this.listaProductosParaVenta = this.listaProductosParaVenta.filter(p => p.idProducto != detalle.idProducto);
    
    this.datosDetalleVenta = new MatTableDataSource(this.listaProductosParaVenta);
  
  }


  registrarVenta(){
    if(this.listaProductosParaVenta.length > 0){
      //the esta forma se bloquea un boton desde un metodo 
      //
      this.bloquearBotonRegistrar = true;

      const request: Venta ={
        tipoPago: this.tipodePagoPorDefecto,
        totalTexto : String(this.totalPagar.toFixed(2)),
        detalleVenta : this.listaProductosParaVenta

      }

      this._ventaServicio.registrar(request).subscribe({
        next:(response) =>{
          if(response.status){
            this.totalPagar = 0.00;
            this.listaProductosParaVenta = [];
            this.datosDetalleVenta = new MatTableDataSource(this.listaProductosParaVenta);

            Swal.fire({
              icon:"success",
              title:"Venta Registrada!",
              text: `Numero de venta ${response.value.numeroDocumento}`
            })

          }else
          this._utilidadService.mostrarAlerta("No se pudo registrar la venta","Error!");


        },
        complete:()=>{
          this.bloquearBotonRegistrar = false;

        },
        error:(e) => {
          //en caso que se necesite agarrar el error
        }
      })
    }
  }

}
