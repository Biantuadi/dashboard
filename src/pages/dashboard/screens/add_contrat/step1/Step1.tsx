import styled from "styled-components";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";

export default function StepOne({ nextStep }: any) {
    return (
      <StepContainer>
        <h3>Étape 1: Informations</h3>
        <div className="Container_formulaire">
          <Input placeholder="Prénom" onChange={() => {}} />
          <Input placeholder="Nom" onChange={() => {}} />
          <Input placeholder="Prénom marié(e)" onChange={() => {}} />
          <Input placeholder="Nom marié(e)" onChange={() => {}} />
          <Input placeholder="Adress mail" onChange={() => {}} />
          <Input placeholder="Numéro de téléphone" onChange={() => {}} />
        <div className="button_container">
          <Button onClick={nextStep} text="Suivant" />
        </div>
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

    .Container_formulaire {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 80%;
    }

    input{
    }

  
`;
