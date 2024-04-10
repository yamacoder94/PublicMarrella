import { Component, OnInit } from '@angular/core';

import { Chart,registerables } from 'chart.js';
import { DashBoardService } from '../../../../Services/dash-board.service';
Chart.register(...registerables); 
//trabajaremos solo con barras


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent implements OnInit{

  totalIngresos:string="0";
  totalVentas:string="0";
  totalProductos:string = "0";


  constructor(
    private _dashboardServicio:DashBoardService
  ){}

  //muestra informacion en grafico
  mostrarGrafico(labelGrafico:any[],dataGrafico:any[]){

    const chartBarras = new Chart('chartBarras',{
        type:'bar',
        data:{
          labels:labelGrafico,
          datasets:[{
            label:"# de Ventas",
            data: dataGrafico,
            backgroundColor:['rgba(75, 192, 192, 0.2)'],
            borderColor:[
              'rgb(75, 192, 192)'
            ],
            borderWidth:1
          }]
        },
        options:{
          maintainAspectRatio:false,
          responsive: true,
          scales:{
            y:{
              beginAtZero:true
            }
          }
        }

    });

  }

  ngOnInit(): void {
    

    this._dashboardServicio.resumen().subscribe({
      next:(data) => {
        if(data.status){
          this.totalIngresos = data.value.totalIngresos;
          this.totalVentas = data.value.totalVentas;
          this.totalProductos = data.value.totalProductos;

          const arrayData: any[] = data.value.ventasUltimaSemana;
          console.log(arrayData);

          const labelTemp =  arrayData.map((value) => value.fecha);
          const dataTemp =  arrayData.map((value) => value.total);
          console.log(labelTemp,dataTemp);

          this.mostrarGrafico(labelTemp,dataTemp);
        }
      }
      ,
      error:(e) =>{}



    })
  }

}
