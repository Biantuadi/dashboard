import styled from "styled-components";
import Header from "../header/Header";
import IconDone from "../../../../assets/icons/done.svg";
import IconInProgress from "../../../../assets/icons/in_progress.svg";
import IconWaiting from "../../../../assets/icons/waiting.svg";
import { Task } from "./TaskCard";
import UpdateSettings from "./cards_grid/UpdateSettings_1";
import EventsUpcomming from "./cards_grid/EventsUpcomming_3";
import JobTransactions from "./cards_grid/JobTransactions_2";

export default function Hoverview() {
  return (
    <HoverviewStyled>
      <Header />

      <div className="see_tasks">
        <div className="first_container_text-and-button">
          <h1 className="">Overview</h1>
          <button className="classic">+ Ajouter un contact</button>
        </div>

        <div className="tasks_container">
          <Task
            label="Terminé"
            image={IconDone}
            see_more_link="/dashboard/tasks/done"
            number_of_task={10}
          />
            <Task
              label="En cours"
              image={IconInProgress}
              see_more_link="/dashboard/tasks/in_progress"
              number_of_task={0}
            />
          <Task
            label="En attente"
            image={IconWaiting}
            see_more_link="/dashboard/tasks/waiting"
            number_of_task={5}
          />
        </div>

        <div className="section_grid">
          <UpdateSettings />
          <JobTransactions />
          <EventsUpcomming />
          <div className="grid_4"></div>
        </div>
      </div>
    </HoverviewStyled>
  );
}

const HoverviewStyled = styled.div`
  padding: 10px 30px;
  background-color: #FDFDFD;
  height: 100%;

  .see_tasks {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 45px;

    .first_container_text-and-button {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        line-height: 1.2;
    color: rgb(17, 25, 39);
      }

      button {
      }
    }

    .tasks_container {
      display: flex;
      gap: 40px;
    }
  }

  .section_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    .collectif_grid {
      border-radius: 20px;
 background-color: #fff;
 box-shadow: rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;
 height: 200px;
    }

    
  }
`;

