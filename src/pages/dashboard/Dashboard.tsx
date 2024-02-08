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
  height: 100vh;
  display: flex;
  
  .container_navbar {
    background-color: #1c2536;
  }

  .container_home-section {
    width: 100%;
    background-color: #FDFDFD;
  }
`;
