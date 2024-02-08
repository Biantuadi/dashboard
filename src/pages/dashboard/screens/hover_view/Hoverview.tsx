import styled from "styled-components";
import Header from "../header/Header";
import IconDone from "../../../../assets/icons/done.svg";
import IconInProgress from "../../../../assets/icons/in_progress.svg";
import IconWaiting from "../../../../assets/icons/waiting.svg";
import { Task } from "./TaskCard";

export default function Hoverview() {
  return (
    <HoverviewStyled>
      <Header />

      <div className="see_tasks">
        <div className="first_container_text-and-button">
          <h1 className="css-agywf3 ">Overview</h1>
          <button className="classic">+ Ajouter un contact</button>
        </div>

        <div className="tasks_container">
          <Task
            label="Terminé"
            image={IconDone}
            see_more_link="https://www.google.com"
            number_of_task={5}
          />
            <Task
              label="En cours"
              image={IconInProgress}
              see_more_link="https://www.google.com"
              number_of_task={5}
            />
          <Task
            label="En attente"
            image={IconWaiting}
            see_more_link="https://www.google.com"
            number_of_task={5}
          />
        </div>
      </div>
    </HoverviewStyled>
  );
}

const HoverviewStyled = styled.div`
  padding: 10px 30px;
  background-color: #fff;
  height: 100%;

  .see_tasks {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    .first_container_text-and-button {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 2em;
      }

      button {
      }
    }

    .tasks_container {
      display: flex;
      gap: 40px;
    }
  }
`;

