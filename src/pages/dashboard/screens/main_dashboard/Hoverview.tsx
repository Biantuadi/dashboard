import styled from "styled-components";
import IconDone from "../../../../assets/icons/done.svg";
import IconInProgress from "../../../../assets/icons/in_progress.svg";
import IconWaiting from "../../../../assets/icons/waiting.svg";
import { Task } from "./TaskCard";
import UpdateSettings from "./cards_grid/UpdateSettings_1";
import EventsUpcomming from "./cards_grid/EventsUpcomming_3";
import JobTransactions from "./cards_grid/JobTransactions_2";
import TitlePage from "../../../../components/TitlePage";

export default function Hoverview() {
  return (
    <HoverviewStyled>
      

        
        <TitlePage text="Overview" button_text="+ Ajouter un contrat" onClick={() => {}} />

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
