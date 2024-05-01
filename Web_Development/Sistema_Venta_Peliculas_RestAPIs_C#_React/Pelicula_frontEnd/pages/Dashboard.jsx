import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import Card from "react-bootstrap/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

//#region prop graficos
const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const inicioBar = {
  labels: [""],
  datasets: [
    {
      label: "Total Ventas",
      data: [0],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const inicioDonut = {
  labels: [""],
  datasets: [
    {
      label: "Total",
      data: [0],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

//#endregion

export function Dashboard() {
  const [dataBar, setDataBar] = useState(inicioBar);
  const [dataDonut, setDataDonut] = useState(inicioDonut);

  useEffect(() => {
    fetch("https://localhost:7101/api/Reporte/ResumenSemana")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);

        const labelsBar = responseJson.ventasSemana.map((item) => item.fecha);
        const valuesBar = responseJson.ventasSemana.map((item) => item.total);

        const contenidoBar = {
          labels: labelsBar,
          datasets: [
            {
              label: "Total Ventas",
              data: valuesBar,
              backgroundColor: "#038aff",
            },
          ],
        };

        setDataBar(contenidoBar);

        //--------------------------------------------------------------
        const labelsDonut = responseJson.productosSemana.map(
          (item) => item.producto
        );
        const valuesDonut = responseJson.productosSemana.map(
          (item) => item.total
        );

        const contenidoDonut = {
          labels: labelsDonut,
          datasets: [
            {
              label: "Total",
              data: valuesDonut,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        };

        setDataDonut(contenidoDonut);
      });
  }, []);

  return (
    <>
      <div style={{ paddingBottom: "20px" }}>
        <h1 style={{ marginLeft: "30px", marginTop: "20px" }}>Dashboard</h1>
      </div>
      <Contenedor>
        <div className="card" id="item1">
          Item 1
        </div>
        <div className="card" id="item2">
          Item 2
        </div>
        <div className="card" id="item3">
          Item 3
        </div>
        <div className="card" id="item4">
          Item 4
        </div>
      </Contenedor>
      <Container>
        <div className="card">
          <div className="card-body">
            <div className="container mt-2">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Total ventas de la semana</h2>
                  <div style={{ height: 350 }}>
                    <Bar options={options} data={dataBar} />
                  </div>
                </div>

                <div className="col-sm-6">
                  <h2>Productos mas vendidos</h2>
                  <div style={{ height: 350 }}>
                    <Doughnut data={dataDonut} options={options} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container mt-2">
        <div className="row">
          <div className="col-sm-6">
            <h1>Total ventas de la semana</h1>
            <div style={{ height: 350 }}>
              <Bar options={options} data={dataBar} />
            </div>
          </div>

          <div className="col-sm-6">
            <h1>Productos mas vendidos</h1>
            <div style={{ height: 350 }}>
              <Doughnut data={dataDonut} options={options} />
            </div>
          </div>
        </div>
      </div> */}
      </Container>
      <div>
        <h1>TExto</h1>
      </div>
    </>
  );
}
const Container = styled.div`
  //height: 80vh;

  .card {
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr; /* Four rows, each occupying 1 fraction of the available space */
  gap: 10px; /* Adjust as needed */
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  .item {
    background-color: #f0f0f0; /* Example background color */
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc; /* Example border */
  }
  .card {
    background-color: #fff; /* Example background color */
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc; /* Example border */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
