import { useState } from "react";
import StepWizard from "react-step-wizard";
import styled from "styled-components";
import StepThree from "./step3/Step3";
import StepTwo from "./step2/Step2";
import StepOne from "./step1/Step1";
// Composant principal
export default function AddContrat() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Container>
      <div className="image_container">
        <img
          src="https://www.lebenerestaurant.fr/wp-content/uploads/2023/05/Shooting_L_EBENE_14_03_23-4.jpg"
          alt="Image"
        />
      </div>
      <div className="WizardContainer">
        <StepWizard
          initialStep={currentStep}
          onStepChange={(stepChange: {
            previousStep: number;
            activeStep: number;
          }) => setCurrentStep(stepChange.activeStep)}
          //   baisser la durée de l'animation
          // transitions={{
          //     enterRight: "animated faster fadeInRight",
          //     enterLeft: "animated faster fadeInLeft",
          //     exitRight: "animated faster fadeOutRight",
          //     exitLeft: "animated faster fadeOutLeft",
          //     }}
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </StepWizard>
      </div>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  border-top: 1px solid #dcdfe4;
  overflow-x: hidden;

  h3 {
    margin-bottom: 20px;
    align-self: flex-start;
  }

  .container_steps {
    display: flex;
    gap: 20px;
    width: 100px;
    background-attachment: red;
  }

  .WizardContainer {
    width: 50%;
    background: #fff;
    padding: 20px;
    margin: 0 20px;
    border-radius: 8px;
  }

  .image_container {
    z-index: 3;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .button_container {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;

    button {
      padding: 10px 20px;
      font-size: 16px;
    }
  }
`;
