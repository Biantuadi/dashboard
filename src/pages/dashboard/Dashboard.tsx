import styled from "styled-components";
import Navmenu from "../../components/navbar/Navmenu";
// import Hoverview from "./screens/hover_view/Hoverview";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function Dashboard() {
  return (
    <DashboardStyled>
      <div className="container_navbar">
        <Navmenu />
      </div>

      <div className="container_home-section">
      <Header />
        <Outlet />
      </div>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  background-color: #FDFDFD;
  
  .container_navbar {
    background-color: #1c2536;
    position: fixed;
    height: 100%;
    width: 280px;

  }

  .container_home-section {
    background-color: #FDFDFD;
    margin-left: 280px;
  }
`;
