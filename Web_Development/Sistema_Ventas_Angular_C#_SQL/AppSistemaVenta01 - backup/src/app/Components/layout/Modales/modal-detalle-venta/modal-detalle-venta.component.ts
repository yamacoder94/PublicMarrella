import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Venta } from '../../../../Interfaces/venta';
import { DetalleVenta } from '../../../../Interfaces/detalle-venta';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-modal-detalle-venta',
  templateUrl: './modal-detalle-venta.component.html',
  styleUrl: './modal-detalle-venta.component.css'
})
export class ModalDetalleVentaComponent implements OnInit {

  fechaRegistro:string = "";
  numeroDocumento:string = "";
  tipoPago: string = "";
  total: string = "";
  detalleVenta: DetalleVenta[]= [];
  columnasTabla : string[] = ['producto','cantidad','precio','total']

  constructor(
    @Inject(MAT_DIALOG_DATA)public _venta:Venta,private http: HttpClient)
    {
      this.fechaRegistro = _venta.fechaRegistro!;
      this.numeroDocumento = _venta.numeroDocumento!;
      this.tipoPago = _venta.tipoPago;
      this.total = _venta.totalTexto;
      this.detalleVenta = _venta.detalleVenta;
      


  }

  ngOnInit(): void {
    
  }

  pdfUrl: string = './assets/555.pdf'; // Replace this with your PDF file URL

  imprimirFactura(){
    // console.log(this.pdfUrl);
    // this.http.get(this.pdfUrl, { responseType: 'blob' }).subscribe((data: Blob) => {
    //   const file = new Blob([data], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);
    //   window.open(fileURL, '_blank');
    // });

    window.print(); //imprime lo que tenemos en el modelo , osea la pagina entera

    

  }

  
}
