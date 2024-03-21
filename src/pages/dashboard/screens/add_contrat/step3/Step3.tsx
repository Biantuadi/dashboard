import styled from "styled-components";
import Button from "../../../../../components/Button";

export default function StepThree ({ previousStep }: any) {
    return (
      <StepContainer>
        <h3>Étape 3: Confirmation</h3>
        <div className="text_container">
          <p>
            <strong>Entreprise:</strong> Acme Corp
          </p>
          <p>
            <strong>Poste:</strong> Software Developer
          </p>
          <p>
            <strong>Titre du poste:</strong> Lead Software Engineer
          </p>
        </div>
        <div className="button_container">
          <Button onClick={previousStep} text="Précédent" />
          <Button text="Confirmer" />
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

  .text_container {
    margin-bottom: 20px;
    
    p {
      margin-bottom: 10px;
      strong {
        font-weight: bold;
      }
    }
  }

  .Container_formulaire {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;