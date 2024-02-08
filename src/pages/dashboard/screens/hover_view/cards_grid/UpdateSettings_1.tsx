import styled from "styled-components";
import Person from "../../../../../assets/others/person-standing.png";
import Button from "../../../../../components/Button";
import { LuSettings2 } from "react-icons/lu";

export default function UpdateSettings() {
  return (
    <UpdateSettingsStyled className="update_settings">
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

          </UpdateSettingsStyled>
  )
}

const UpdateSettingsStyled = styled.div`

display: flex;
      gap: 20px;
      align-items: center;
      background-color: rgb(245, 247, 255);
      border-radius: 20px;
      padding: 40px;
      height: 250px;

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
    
`;