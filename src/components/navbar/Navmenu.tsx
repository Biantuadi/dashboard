import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import { TbSmartHome } from "react-icons/tb";
import LinkNavigation from "./LinkNavigation";
import { CiCalendarDate } from "react-icons/ci";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import Button from "../Button";
import { SiCodesignal } from "react-icons/si";
import { RiHistoryFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";

export default function Navmenu() {
  return (
    <NavmenuStyled>
      <HeaderNav />
      <div className="container_navigations">
        <LinkNavigation
          to="/dashboard"
          label="Dashboard"
          icon={<TbSmartHome />}
          end
        />
        <LinkNavigation
          to="./menu"
          label="Menu"
          icon={<IoRestaurantOutline />}
        />
        <LinkNavigation
          to="./calendar"
          label="Calendar"
          icon={<CiCalendarDate />}
        />
        <LinkNavigation
          to="./contacts"
          label="Contacts"
          icon={<FiUsers /> }
        />
        <LinkNavigation
          to="./analytics"
          label="Analytics"
          icon={<IoAnalyticsOutline />}
        />
        <LinkNavigation
          to="./history"
          label="History"
          icon={<RiHistoryFill />}
        />
        <LinkNavigation
          to="/dashboard/profile"
          label="Profile"
          icon={<IoPersonOutline />}
        />
        <LinkNavigation
          to="/logout"
          label="Logout"
          icon={<IoLogOutOutline />}
        />
      </div>
        <Button text="Design facture" className="classic" icon={<SiCodesignal />}/>
    </NavmenuStyled>
  );
}

const NavmenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px 20px 0 25px;

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

  button {
    font-weight: normal;
    margin-top: 30em;

    svg {
      font-size: 1.03rem;
      color: #fff;
    }
  }
`;
