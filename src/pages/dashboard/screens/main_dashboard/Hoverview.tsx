import { useState } from "react";
import styled from "styled-components";
import IconDone from "../../../../assets/icons/done.svg";
import IconInProgress from "../../../../assets/icons/in_progress.svg";
import IconAnnuler from "../../../../assets/icons/annule.svg";
import { ContratStatusContainer } from "./ContratStatusContainer";
import UpdateSettings from "./cards_grid/UpdateSettings_1";
import EventsUpcomming from "./cards_grid/EventsUpcomming_3";
import JobTransactions from "./cards_grid/JobTransactions_2";
import TitlePage from "../../../../components/TitlePage";
import ManageContrat from "./nav_right/ManageContrat";
import { fakeContrats } from "../../../../data/contrat";

export default function Hoverview() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContrat, setSelectedContrat] = useState("");
  const [contrats, setContrats] = useState(fakeContrats);

  const handleOpenManageContrat = (taskLabel: string) => {
    setSelectedContrat(taskLabel);
    setIsOpen(true);
  };

  const handleCloseManageContrat = () => {
    setSelectedContrat("");
    setIsOpen(false);
  };

  return (
    <HoverviewStyled>
      <TitlePage
        text="Overview"
        button_text="+ Ajouter un contrat"
        onClick={() => {}}
      />

      <ManageContrat isOpen={isOpen} handleCloseManageContrat={handleCloseManageContrat} contrats={contrats} selectedContrat={selectedContrat} handleOpenManageContrat={handleOpenManageContrat} setContrats={setContrats} />

      <div className="contrats_container">
        <ContratStatusContainer
          label="Validé"
          image={IconDone}
          number_of_contrat={
            contrats.filter((contrat) => contrat.status === "Validé").length
          }
          openManageContrats={() => handleOpenManageContrat("Validé")}
        />
        <ContratStatusContainer
          label="En cours"
          image={IconInProgress}
          number_of_contrat={
            contrats.filter((contrat) => contrat.status === "En cours").length
          }
          openManageContrats={() => handleOpenManageContrat("En cours")}
        />
        <ContratStatusContainer
          label="Annulé"
          image={IconAnnuler}
          number_of_contrat={
            contrats.filter((contrat) => contrat.status === "Annulé").length
          }
          openManageContrats={() => handleOpenManageContrat("Annulé")}
        />
      </div>

      <div className="section_flex">
        <div className="container_flex_1">
          <UpdateSettings />
          <JobTransactions />
        </div>
        <div className="container_flex_2">
          <EventsUpcomming />
        </div>
        <div className="grid_4"></div>
      </div>
    </HoverviewStyled>
  );
}

const HoverviewStyled = styled.div`
  background-color: #fdfdfd;
  height: 100%;
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 0 30px 50px 30px;

  .contrats_container {
    display: flex;
    gap: 40px;
  }

  .section_flex {
    display: flex;

    .container_flex_1 {
      display: flex;
      flex-direction: column;
      flex: 1.5;
      gap: 30px;
      margin-right: 30px;
    }

    .container_flex_2 {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 30px;
    }

    .collectif_grid {
      border-radius: 20px;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 5px 22px,
        rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;
      padding: 20px;
    }
  }
`;


