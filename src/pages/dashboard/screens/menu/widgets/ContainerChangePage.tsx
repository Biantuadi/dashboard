import React from "react";
import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface ContainerChangePageProps {
  currentPage: number;
  totalPages: number;
  onPageNext: () => void;
  onPagePrevious: () => void;
}

const ContainerChangePage: React.FC<ContainerChangePageProps> = ({
  currentPage,
  totalPages,
  onPageNext,
  onPagePrevious,
}) => {
  return (
    <ChangePageContainer>
      <div className="text_container">
        <p>
          Page {currentPage} sur {totalPages}
        </p>
      </div>

      <div className="icons_container">
        <GrFormPrevious
          onClick={onPagePrevious}
          style={{ color: currentPage === 1 ? "rgb(108, 115, 127)" : "" }}
        />
        <GrFormNext
          onClick={onPageNext}
          style={{
            color:
              currentPage === totalPages ? "rgb(108, 115, 127)" : "",
          }}
        />
      </div>
    </ChangePageContainer>
  );
};

const ChangePageContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 20px;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.57;
    flex-shrink: 0;
  }

  .icons_container {
    display: flex;
    svg {
      cursor: pointer;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-size: 1.5rem;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 5px;

      &:hover {
        background-color: rgba(108, 115, 127, 0.04);
      }
    }
  }
`;

export default ContainerChangePage;
