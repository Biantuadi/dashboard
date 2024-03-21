import styled from "styled-components";
import Button from "../../../../../components/Button";

export default function StepTwo({ previousStep, nextStep }: any) {
    return (
      <StepContainer>
        <h3>Étape 2: Détails</h3>
        <div className="button_container">
          <Button onClick={previousStep} text="Précédent" />
          <Button onClick={nextStep} text="Suivant" />
        </div>
      </StepContainer>
    );
  };

  const StepContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  
`;