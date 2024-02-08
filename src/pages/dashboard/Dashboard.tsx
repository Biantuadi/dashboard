import styled from "styled-components";
import Navmenu from "../../components/navbar/Navmenu";
import Hoverview from "./screens/hover_view/Hoverview";

export default function Dashboard() {
  return (
    <DashboardStyled>
      <div className="container_navbar">
        <Navmenu />
      </div>

      <div className="container_home-section">
        <Hoverview />
      </div>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  display: flex;
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
