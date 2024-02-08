import styled from 'styled-components'
import { GoChevronDown } from 'react-icons/go'

export default function HeaderNav() {
  return (
    <HeaderNavStyled>
        <div className="container_logo">
          <svg
            fill="none"
            height="100%"
            viewBox="0 0 24 24"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.16"
              d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z"
              fill="#6366F1"
            ></path>
            <path
              d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z"
              fill="#6366F1"
            ></path>
          </svg>
        </div>
        <div className="container_left">
          <div className="text_container">
            <h6 className="css-agywf3">A'tast</h6>
            <span className="span-text">Production</span>
          </div>
          <div className="icon_chevron_down">
            <GoChevronDown />
          </div>
        </div>
      </HeaderNavStyled>

  )
}

const HeaderNavStyled = styled.div`
 display: flex;
    align-items: center;
    gap: 17px;

    .container_logo {
      border: 1px solid #2f3746;
      padding: 5px;
      border-radius: 10px;
      width: 42px;
      height: 42px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .container_left {
      display: flex;
      align-items: center;

      cursor: pointer;
      gap: 60px;
      .icon_chevron_down {

        svg {
          transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          font-size: 18px;
          cursor: pointer;
          border-radius: 50%;
          color: rgb(108, 115, 127);

          &:hover {
            background-color: #e0e0e012;
            
          }
        }
      }
    }

    .text_container {
      h6 {
        font-weight: 700;
        color: #ffffff;
      }

      
    }
`