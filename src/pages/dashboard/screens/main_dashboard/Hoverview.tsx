import { useState } from "react";
import styled from "styled-components";
import { CiStar } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import IconDone from "../../../../assets/icons/done.svg";
import IconInProgress from "../../../../assets/icons/in_progress.svg";
import IconWaiting from "../../../../assets/icons/waiting.svg";
import { Task } from "./TaskCard";
import UpdateSettings from "./cards_grid/UpdateSettings_1";
import EventsUpcomming from "./cards_grid/EventsUpcomming_3";
import JobTransactions from "./cards_grid/JobTransactions_2";
import TitlePage from "../../../../components/TitlePage";


export default function Hoverview() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState("");

  const handleOpenManageTasks = (taskLabel: string) => {
    setSelectedTask(taskLabel);
    setIsOpen(true);
  };

  const handleCloseManageTasks = () => {
    setSelectedTask("");
    setIsOpen(false);
  };

  return (
    <HoverviewStyled>
      <TitlePage text="Overview" button_text="+ Ajouter un contrat" onClick={() => {}} />

      <ManageTasksStyled open={isOpen}>
        <header className="header">
          <CiStar />
          <IoCloseOutline onClick={handleCloseManageTasks} />
        </header>
        <nav>
          <li className={selectedTask === "Terminé" ? "active" : ""} onClick={() => handleOpenManageTasks("Terminé")}>Terminé</li>
          <li className={selectedTask === "En cours" ? "active" : ""} onClick={() => handleOpenManageTasks("En cours")}>En cours</li>
          <li className={selectedTask === "En attente" ? "active" : ""} onClick={() => handleOpenManageTasks("En attente")}>En attente</li>
        </nav>
        <div className="content">{selectedTask}</div>
      </ManageTasksStyled>

      <div className="tasks_container">
        <Task
          label="Terminé"
          image={IconDone}
          number_of_task={10}
          openManageTasks={() => handleOpenManageTasks("Terminé")}
        />
        <Task
          label="En cours"
          image={IconInProgress}
          number_of_task={0}
          openManageTasks={() => handleOpenManageTasks("En cours")}
        />
        <Task
          label="En attente"
          image={IconWaiting}
          number_of_task={5}
          openManageTasks={() => handleOpenManageTasks("En attente")}
        />
      </div>

      <div className="section_flex">
        <div className="container_flex_1">
          <UpdateSettings />
          <JobTransactions />
        </div>
        <div className="container_flex_2">
          <EventsUpcomming />
        </div>
        <div className="grid_4"></div>
      </div>
    </HoverviewStyled>
  );
}


const HoverviewStyled = styled.div`
  background-color: #fdfdfd;
  height: 100%;
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 0 30px 50px 30px;

  .tasks_container {
    display: flex;
    gap: 40px;
  }

  .section_flex {
    display: flex;

    .container_flex_1 {
      display: flex;
      flex-direction: column;
      flex: 1.5;
      gap: 30px;
      margin-right: 30px;
    }

    .container_flex_2 {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 30px;
    }

    .collectif_grid {
      border-radius: 20px;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 5px 22px,
        rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;
      padding: 20px;
    }
  }
`;

const ManageTasksStyled = styled.div<{ open: boolean }>`
  position: fixed;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 30px;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-450px")};
  bottom: 0;
  width: 450px;
  height: 100%;
  z-index: 3000;
  transition: right 0.3s ease-in-out;

  .header {
    display: flex;
    padding: 40px 20px;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid rgb(242, 244, 247);
    gap: 20px;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    svg {
      font-size: 1.5rem;
      color: rgb(108, 115, 127);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      padding: 5px;

      &:hover {
        background-color: rgba(108, 115, 127, 0.04);
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-bottom: 1px solid rgb(242, 244, 247);

    li {
      cursor: pointer;
      font-weight: bold;
      color: #666;
      transition: color 0.3s;

      &:hover {
        color: #333;
      }

      &.active {
        color: #000;
      }
    }
  }
`;