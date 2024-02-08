import styled from "styled-components";

export function Task({
    label,
    image,
    see_more_link,
    number_of_task,
  }: {
    label: string;
    image: string;
    see_more_link: string;
    number_of_task: number;
  }) {
    return (
      <TaskStyled>
        <div className="container_task_img_text">
          <div className="container_img">
            <img src={image} alt={label} />
          </div>
          <div className="texts_infos">
            <span>{label}</span>
            <h3>{number_of_task}</h3>
          </div>
        </div>
        {/* diviser */}
        <div className="container_see_more">
          <a href={see_more_link} target="_blank" rel="noreferrer">
            See more
          </a>
        </div>
      </TaskStyled>
    );
  }
  
  const TaskStyled = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 20px ;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 5px 22px,
      rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;
      flex: 1;
    
  
    .container_task_img_text {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  
    .container_img {
      padding: 10px;
      border-radius: 10px;
  
      img {
        width: 60px;
        height: 60px;
      }
    }
  
  `;
  