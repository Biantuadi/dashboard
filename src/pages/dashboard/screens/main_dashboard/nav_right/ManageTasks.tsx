import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
// import LabelAndTitle from "../../../LabelAndTitle";

interface ManageTasksProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManageTasks({ isOpen, onClose }: ManageTasksProps) {
  return (
    <ManageTasksStyled open={isOpen}>
      <header className="header">
        <CiStar />
        <IoCloseOutline onClick={onClose} />
      </header>
      <hr />
      <div className="content"></div>
    </ManageTasksStyled>
  );
}

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
  animation: ${({ open }) => (open ? "slideInRight 0.3s forwards" : "none")};

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

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

  hr {
    border: none;
  }
`;
