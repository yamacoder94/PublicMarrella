import styled from "styled-components";
import TablaVenta from "./TablaVenta";
export function Reportes() {
  return (
    <Container>
      <h1 style={{ marginLeft: "30px" }}>Reportes</h1>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <TablaVenta></TablaVenta>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
