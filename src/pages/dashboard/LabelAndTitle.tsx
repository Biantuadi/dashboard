import styled from "styled-components";

interface LabelAndTitleProps {
    label: string;
    child: React.ReactNode;
  }
  
  const LabelAndTitle: React.FC<LabelAndTitleProps> = ({ label, child }) => {
    return (
      <LabelAndTitleStyled>
        <span>{label}</span>
        <div className="flex">{child}</div>
      </LabelAndTitleStyled>
    );
  };

  const LabelAndTitleStyled = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.66;
    color: rgb(108, 115, 127);
    flex: 1;
  }

  .flex {
    flex: 1.8;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.57;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;


export default LabelAndTitle;