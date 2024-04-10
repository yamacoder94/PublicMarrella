import { Component ,OnInit, AfterViewInit, viewChild, ViewChild} from '@angular/core';

//para las tablas 
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ModalProductoComponent } from '../../Modales/modal-producto/modal-producto.component';
import { Producto } from '../../../../Interfaces/producto';
import { ProductoService } from '../../../../Services/producto.service';
import { UtilidadService } from '../../../../Reutilizable/utilidad.service';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { Menu } from '../../../../Interfaces/menu';
import { MenuService } from '../../../../Services/menu.service';
import { Injectable } from '@angular/core';
import { LayoutComponent } from '../../layout.component';




@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit,AfterViewInit {

  
  //probando traer la session de usuario 
  // rolUsuario2:string ='';
  usuario: any;

  listaMenus:Menu[]= [];
  correoUsuario:string = '';
  rolUsuario:string ='';

  columnasTabla: string[] = ['nombre','categoria','stock','precio','estado','acciones'];
  dataInicio:Producto[] = [];
  dataListaProductos = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator,{static: true}) paginator! : MatPaginator;//esto es para inicializar el paginator con algun valor
  

  constructor(
    private router:Router,
    private _menuServicio:MenuService,
    


    //inyecciones de dependencia
    private dialog:MatDialog,
    private _productoServicio:ProductoService,
    private _utilidadServicio:UtilidadService,
    

  ){}
  

  obtenerProductos(){

    this._productoServicio.lista().subscribe({
      next:(data) => {
        if(data.status)
        this.dataListaProductos.data =data.value;
      else
      this._utilidadServicio.mostrarAlerta("No se encontraron datos","Error!")
      },
      error:(e) => {}
      
    })

  }

  traerRolUsuario(){
    this.usuario = this._utilidadServicio.obtenerSesionUsuario();


  }



  ngOnInit(): void {

    //this.rolUsuario2 = _utilidadServicio.obtenerSesionUsuario();
    //this.usuario = this._utilidadServicio.obtenerSesionUsuario();


    this.traerRolUsuario();//
    console.log(this.usuario);
    this.obtenerProductos();

  }

  ngAfterViewInit(): void {
    this.dataListaProductos.paginator = this.paginator;
  }


  aplicarFiltroTable(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaProductos.filter = filterValue.trim().toLocaleLowerCase();

  }

  //abre modal que crea producto nuevo 
  nuevoProducto(){
    //abre el modal
    this.dialog.open(ModalProductoComponent,{
        //evita que el usuario pueda cerrar el modal si hace click por fuera
        disableClose:true
    }).afterClosed().subscribe(resultado => {

      if(resultado === "true")this.obtenerProductos();

    });


  }

  editarProducto(producto:Producto){
    this.dialog.open(ModalProductoComponent,{
        //evita que el usuario pueda cerrar el modal si hace click por fuera
        disableClose:true,
        data: producto
    }).afterClosed().subscribe(resultado => {

      if(resultado === "true")this.obtenerProductos();

    });


  }

  eliminarProducto(producto:Producto){
    
    //mensaje de alerta 
    Swal.fire({
      title: "Desea eliminar el producto?",
      text: producto.nombreCompleto,
      icon:"warning",
      confirmButtonColor:'#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, volver',

    }).then((resultado) => {
      if(resultado.isConfirmed){

        this._productoServicio.eliminar(producto.idProducto).subscribe({
          
          next:(data) =>{
            if(data.status){
              this._utilidadServicio.mostrarAlerta("El producto fue eliminado","Listo!");
              this.obtenerProductos();

            }else
              this._utilidadServicio.mostrarAlerta("No se pudo elminar el producto", "Error");
            
          },
          error:(e) =>{}

        })
      }

    

    })

  }

  shouldShowRow(): boolean{
    //necesito traer el rol del usuario
    //this.rolUsuario2 = this._utilidadServicio.obtenerSesionUsuario();
    if(this.usuario && this.usuario.rolDescripcion === "Empleado"){
      return false;
    }
    return true;
   }

}
