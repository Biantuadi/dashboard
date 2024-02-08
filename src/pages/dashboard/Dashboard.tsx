import styled from "styled-components";
import Header from "./header/Header";
import Navmenu from "./navbar/Navmenu";
import Hoverview from "./screens/hover_view/Hoverview";

export default function Dashboard() {
  return (
    <DashboardStyled>
      <Header />
      <main>
        <Navmenu />
        <Hoverview />
      </main>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  color: red;
`;
