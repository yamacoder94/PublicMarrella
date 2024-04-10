import { Component ,OnInit, AfterViewInit, viewChild, ViewChild} from '@angular/core';

//tablas
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';//para trabajar con los dialogos , o los modales

import { ModalUsuarioComponent } from '../../Modales/modal-usuario/modal-usuario.component';
import { Usuario } from '../../../../Interfaces/usuario';
import { UsuarioService } from '../../../../Services/usuario.service';
import { UtilidadService } from '../../../../Reutilizable/utilidad.service';
import Swal from 'sweetalert2';
import { error } from 'console';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
  
})


export class UsuarioComponent implements OnInit, AfterViewInit {
  
  columnasTabla: string[] = ['nombreCompleto','correo','rolDescripcion','estado','acciones'];
  dataInicio:Usuario[] = [];
  dataListaUsuarios = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator,{static: true}) paginator! : MatPaginator;//esto es para inicializar el paginator con algun valor
  

  //@ViewChild(MatPaginator, {static: true}) set matPaginator(paginator: MatPaginator) {
    //this.dataListaUsuarios.paginator = paginator;
  //}
  
  constructor(
    private dialog:MatDialog,
    private _usuarioServicio:UsuarioService,
    private _utilidadServicio:UtilidadService,
    

  ){}

    obtenerUsuarios(){

      this._usuarioServicio.lista().subscribe({
        next:(data) => {
          if(data.status)
          this.dataListaUsuarios.data =data.value;
        else
        this._utilidadServicio.mostrarAlerta("No se encontraron datos","Error!")
        },
        error:(e) => {}
        
      })

    }
  

  //cuando el componente inicia 
  ngOnInit(): void {
    this.obtenerUsuarios();
    
  }

  //se crea la paginacion
  //significa que cargara la paginacion luego de que se carguen los datos 
  ngAfterViewInit(): void {
    this.dataListaUsuarios.paginator = this.paginator;
    
    
  }


  
  aplicarFiltroTable(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaUsuarios.filter = filterValue.trim().toLocaleLowerCase();

  }

  //abre modal que crea usuario nuevo 
  nuevoUsuario(){
    //abre el modal
    this.dialog.open(ModalUsuarioComponent,{
        //evita que el usuario pueda cerrar el modal si hace click por fuera
        disableClose:true
    }).afterClosed().subscribe(resultado => {

      if(resultado === "true")this.obtenerUsuarios();

    });


  }

  editarUsuario(usuario:Usuario){
    this.dialog.open(ModalUsuarioComponent,{
        //evita que el usuario pueda cerrar el modal si hace click por fuera
        disableClose:true,
        data: usuario
    }).afterClosed().subscribe(resultado => {

      if(resultado === "true")this.obtenerUsuarios();

    });


  }

  eliminarUsuario(usuario:Usuario){
    
    //mensaje de alerta 
    Swal.fire({
      title: "Desea eliminar el usuario?",
      text: usuario.nombreCompleto,
      icon:"warning",
      confirmButtonColor:'#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, volver',

    }).then((resultado) => {
      if(resultado.isConfirmed){

        this._usuarioServicio.eliminar(usuario.idUsuario).subscribe({
          
          next:(data) =>{
            if(data.status){
              this._utilidadServicio.mostrarAlerta("El usuario fue eliminado","Listo!");
              this.obtenerUsuarios();

            }else
              this._utilidadServicio.mostrarAlerta("No se pudo elminar el usuario", "Error");
            
          },
          error:(e) =>{}

        })
      }

    

    })

  }




}
