import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUsers } from "react-icons/lu";

export default function Header() {
  const notificationCount = 5;
  return (
    <HeaderStyled>
      <Tooltip
        title="Search"
        placement="bottom"
        enterDelay={300}
        leaveDelay={200}
        sx={{ backgroundColor: "#151e27" }} 
      >
        <span>
          <GoSearch className="icon-search" />
        </span>
      </Tooltip>

      <div className="aside_header">
        <div className="flag_france">
          <img src="https://www.countryflags.com/wp-content/uploads/france-flag-png-xl.png" alt="flag" />
        </div>
        <div className="notification-icon-container">
          <IoIosNotificationsOutline className="notification-icon" />
          {notificationCount > 0 && (
            <div className="notification-counter">{notificationCount}</div>
          )}
        </div>
        <div className="contacts_icon_container">
        <LuUsers className="contacts_icon" />
        </div>
        <div className="container_profile_avatar">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(6px);
    background-color: rgba(255, 255, 255, 0.8);
    position: sticky;
    top: 0px;
    z-index: 1100;

  .aside_header {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .flag_france {
    width: 23px;
    height: 18px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon-search {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 2.6em;
    padding: 8px;
    border-radius: 50%;
    color: rgb(108, 115, 127);
    cursor: pointer;

    &:hover {
      background-color: #e0e0e051;
    }
  }

  .notification-icon-container {
    position: relative;
    display: inline-block;
  }

  .notification-icon {
    font-size: 2em;
    color: rgb(108, 115, 127);
    cursor: pointer;
  }

  .notification-counter {
    position: absolute;
    top: -2px;
    right: -4px;
    background-color: red;
    color: white;
    font-size: 12px;
    border-radius: 50%;
    padding: 2px 5px;
  }

  .contacts_icon_container {
    color: rgb(108, 115, 127);
    cursor: pointer;
  }

  .contacts_icon {
    font-size: 1.7em;
    color: rgb(108, 115, 127);
    cursor: pointer;
  }

  .container_profile_avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    padding: 2px;
    border: 2px solid rgb(242, 244, 247);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }


`;
