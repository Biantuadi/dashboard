import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import { TbSmartHome } from "react-icons/tb";
import LinkNavigation from "./LinkNavigation";

export default function Navmenu() {
  return (
    <NavmenuStyled>
      <HeaderNav />
      <div className="container_navigations">
        <LinkNavigation
          to="/dashboard"
          label="Dashboard"
          icon={<TbSmartHome />}
        />
        <LinkNavigation
          to="/projects"
          label="Projects"
          icon={<TbSmartHome />}
        />
      </div>
    </NavmenuStyled>
  );
}

const NavmenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px 20px 0 25px;
  height: 100vh;

  .container_navigations {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
  }

  .nav_item {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 7px;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 230px;

    svg {
      font-size: 1.25rem;
      border-radius: 50%;
      /* color: #6366F1; */
      color: #9da4ae;
    }

    .text {
      flex-grow: 1;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      white-space: nowrap;
      /* color: #ffffff; */
      color: #9da4ae;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.04);
    }
  }

  .nav_item.active {
    background-color: rgba(255, 255, 255, 0.04);

    svg {
      color: #6366f1;
    }

    .text {
      color: #ffffff;
    }
  }
`;
