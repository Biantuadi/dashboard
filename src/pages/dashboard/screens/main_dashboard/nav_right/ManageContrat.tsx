import { CiStar } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
import { IoMdMore } from "react-icons/io";
import { splitDate } from "../../../../../utils/main_utils";

interface ManageContratProps {
  isOpen: boolean;
  handleCloseManageContrat: () => void;
  contrats: any[];
  selectedContrat: string;
  setContrats: (contrats: any[]) => void;
  handleOpenManageContrat: (taskLabel: string) => void;
}

export default function ManageContrat({
  isOpen,
  handleCloseManageContrat,
  contrats,
  selectedContrat,
  handleOpenManageContrat,
}: ManageContratProps) {
  return (
    <ManageContratsStyled open={isOpen}>
      <header className="header">
        <CiStar />
        <IoCloseOutline onClick={handleCloseManageContrat} />
      </header>
      <nav>
        <li
          className={
            selectedContrat === "Valider" ? "active classic" : "classic"
          }
          onClick={() => handleOpenManageContrat("Validé")}
        >
          Validé
        </li>
        <li
          className={
            selectedContrat === "En cours" ? "active classic" : "classic"
          }
          onClick={() => handleOpenManageContrat("En cours")}
        >
          En cours
        </li>
        <li
          className={
            selectedContrat === "Annuler" ? "active classic" : "classic"
          }
          onClick={() => handleOpenManageContrat("Annulé")}
        >
          Annulé
        </li>
      </nav>
      <div className="content">
        {contrats
          .filter((contrat) => contrat.status === selectedContrat)
          .map((contrat, index) => (
            <div key={index} className="contrat_card">
              <header>
                <p>{contrat.type}</p>
                <IoMdMore />
              </header>
              <span className="span-text status">{contrat.status}</span>
              <p className="span-text">{contrat.description}</p>
              <hr />
              <div className="date">
                <p>
                  {splitDate(contrat.date).day} {splitDate(contrat.date).month}{" "}
                  {splitDate(contrat.date).year}
                </p>
                <p>{contrat.start}</p>
                <p>{contrat.end}</p>
              </div>
            </div>
          ))}
      </div>
    </ManageContratsStyled>
  );
}

const ManageContratsStyled = styled.div<{ open: boolean }>`
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
    padding: 20px;
    justify-content: flex-end;
    align-items: center;
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
    gap: 10px;
    border-bottom: 1px solid rgb(242, 244, 247);

    li {
      cursor: pointer;
      font-size: 14px;
      padding-bottom: 10px;
      padding-left: 20px;
      padding-right: 20px;

      &.active {
        color: rgb(99, 102, 241);
        border-bottom: 1.7px solid rgb(99, 102, 241);
      }
    }
  }

  .content {
    padding: 20px;
    overflow-y: auto;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    gap: 20px;

    /* scroll bar none */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .contrat_card {
    border-radius: 20px;
    transition: 0.3s;
    cursor: pointer;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 5px 22px,
      rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;
    position: relative;

    &:hover {
      background-color: rgba(17, 25, 39, 0.04);
    }
  }

  .span-text {
  }

  .status {
    font-size: 14px;
    font-weight: 600;
    color: rgb(99, 102, 241);
  }

  .date {
    display: flex;
    gap: 20px;
    padding-top: 10px;
    font-size: 14px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    svg {
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
`;
