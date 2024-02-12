import styled from "styled-components"

export default function ChangeStatus() {
  return (
    <ChangeStatusStyled className="container_change_status">
                    <span>Validé ✅</span>
                    <span>En cours 📝</span>
                    <span >Annulé ❌</span>
                  </ChangeStatusStyled>
  )
}

const ChangeStatusStyled = styled.div`
position: absolute;
      top: 50px;
      right: 20px;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 30px;
      border-radius: 10px;
      padding: 10px;
      border-radius: 10px;
      z-index: 3000;

      span {
        display: block;
        padding: 10px;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 5px;

        &:hover {
          background-color: rgba(17, 25, 39, 0.04);
        }
      }
    
    
    span {
      font-size: 14px;
      font-weight: 400;
    }

`