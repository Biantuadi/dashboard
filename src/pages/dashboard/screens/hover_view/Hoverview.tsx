import styled from "styled-components";
import Header from "../header/Header";
import IconDone from "../../../../assets/icons/done.svg";
import IconInProgress from "../../../../assets/icons/in_progress.svg";
import IconWaiting from "../../../../assets/icons/waiting.svg";
import { Task } from "./TaskCard";
import Person from "../../../../assets/others/person-standing.png";
import Button from "../../../../components/Button";
import { LuSettings2 } from "react-icons/lu";

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
          <div className="grid_1">
            <div className="content_img">
              <img src={Person} alt="icon done" />
            </div>
            <div className="content_text">
              <span className="span-text">NEW V6 UPDATE</span>
              <div className="middle_text">
                <h3>New update available!</h3>
                <p className="span-text">Your favorite template has a new trendy look, more customization options, screens & more.</p>
              </div>
            <Button text="Update now" className="classic" icon={<LuSettings2 />} />
            </div>

          </div>
          <div className="grid_2"></div>
          <div className="grid_3"></div>
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

    .grid_1 {
      display: flex;
      gap: 20px;
      align-items: center;
      background-color: rgb(245, 247, 255);
      border-radius: 20px;
      padding: 40px;

      .content_img {
        width: 200px;
        img {
          width: 100%;
          height: auto;
        }
      }

      .content_text {
        display: flex;
        flex-direction: column;
        gap: 15px;

        span.span-text {
          color: rgb(99, 102, 241);
          font-size: 12px;
          font-weight: 600;
        }

        h3 {
          font-size: 16px;
          line-height: 1.2;
          color: rgb(17, 25, 39);
          font-weight: 600;
        }

        .middle_text{
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        p {
          font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    color: rgb(17, 25, 39);
        }

        button {
          width: 150px;
        }
      }
    }

    .grid_2 {
      height: 200px;
      background-color: #f5f7fa;
    }

    .grid_3 {
      height: 200px;
      background-color: #f5f7fa;
    }

    .grid_4 {
      height: 200px;
      background-color: #f5f7fa;
    }
  }
`;

