import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { traeCategoria } from "../../services/categoriaService";
import { v } from "../../styles/Variables";

export function Categoria() {
  const [categorias, setCategorias] = useState([]);
  const cargarCategorias = async () => {
    const { data: categos } = await traeCategoria();
    //se usa async and await por que podria darse que se ejecute setPeliculas
    //sin que  se haya obtenido al informacion en data : pelis
    setCategorias(categos);
  };

  useEffect(() => {
    cargarCategorias();
    //cambia el estado del componente
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <CardGrid>
        {categorias.map((card, index) => (
          <Card key={card.idCategoria}>
            <div className="card-header">Featured</div>
            <div>
              <CardTitle>{card.descripcion}</CardTitle>
              <CardBody>{card.esActivo}</CardBody>
            </div>
            <Divider />
            <ButtonContainer>
              <Button>Editar</Button>

              <Button>Eliminar</Button>
            </ButtonContainer>
          </Card>
        ))}
      </CardGrid>
    </div>
  );
}
const Container = styled.div`
  height: 100vh;
`;

const CardGrid = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  //background-color: #f0f0f0;

  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  //border: 1px solid #ec7c26;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 25px;
`;

const CardBody = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.button`
  background-color: transparent;
  color: #e96e38;
  border: 1px solid #e96e38;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e96e38;
    color: white;
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;
