import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const mesDatas = [
  {
    id: 1,
    date: "2021-10-10",
    name: "Jean",
    amount: 453,
    status: "valider",
  },
  {
    id: 1,
    date: "2021-10-13",
    name: "Thom",
    amount: 2600,
    status: "annuler",
  },
  {
    id: 2,
    date: "2021-10-18",
    name: "Jean",
    amount: 3250,
    status: "valider",
  },
  {
    id: 3,
    date: "2021-10-10",
    name: "Jean",
    amount: 530,
    status: "valider",
  },
  {
    id: 2,
    date: "2021-10-10",
    name: "miché",
    amount: 1000,
    status: "annuler",
  },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function JobTransactions() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [transactions, setTransactions] = useState([...mesDatas]);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  const handleCategoryChange = (category: any) => {
    setActiveCategory(category);
    switch (category) {
      case "Valider":
        setTransactions(mesDatas);
        break;
      case "Annuler":
        setTransactions(mesDatas);
        break;
      default:
        setTransactions([...mesDatas]);
    }
    setShowAllTransactions(false);
  };

  const splitDate = (date: any) => {
    const dateObj = new Date(date);
    return {
      day: dateObj.getDate(),
      month: months[dateObj.getMonth()],
      year: dateObj.getFullYear(),
    };
  };

  return (
    <JobTransactionsStyled className="collectif_grid">
      <div className="container_title">
        <h4>Latest Transactions</h4>
        <span>
          {transactions.length} transactions -{" "}
          {transactions.reduce(
            (acc, transaction) => acc + transaction.amount,
            0
          )}
          €
        </span>
      </div>

      <div className="container_navigation">
        {["Tout", "Valider", "Annuler"].map((category) => (
          <span
            key={category}
            className={
              activeCategory === category ? "classic active" : "classic"
            }
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="container_transactions">
        {transactions
          .slice(0, showAllTransactions ? transactions.length : 4)
          .map((transaction) => (
            <div key={transaction.id} className="transaction">
              <div className="data_name_container">
                <div className="date_affiche">
                  <span className="month">
                    {splitDate(transaction.date).month}
                  </span>
                  <h4 className="day">{splitDate(transaction.date).day}</h4>
                </div>
                <div>
                  <p>{transaction.name}</p>
                  <span className="description">Hello world</span>
                </div>
              </div>
              <div className="status">
                <span
                  className={
                    transaction.status === "valider" ? "valider" : "annuler"
                  }
                >
                  {transaction.status}
                </span>
              </div>
              <p
                className={
                  transaction.status === "valider" ? "p_valider" : "p_annuler"
                }
              >
                {transaction.status === "valider" ? "+" : "-"}{" "}
                {transaction.amount}€
              </p>
            </div>
          ))}
        {transactions.length > 4 && !showAllTransactions && (
          <Link className="see-more" to="#">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Voir plus
          </Link>
        )}
      </div>
    </JobTransactionsStyled>
  );
}

const JobTransactionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .container_title {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: rgb(108, 115, 127);
    }
  }

  .date_affiche {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    padding: 8px;
    background-color: rgb(243, 244, 246);
    border-radius: 16px;

    .month {
      font-size: 12px;
      font-weight: 600;
      color: rgb(17, 25, 39);
    }
  }

  .description {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.57;
    color: rgb(108, 115, 127);
  }

  .container_navigation {
    display: flex;
    gap: 20px;

    .classic {
      cursor: pointer;
      font-size: 14px;
      padding-bottom: 10px;
    }

    .active {
      color: rgb(99, 102, 241);
      border-bottom: 1.7px solid rgb(99, 102, 241);
    }
  }

  .container_transactions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .transaction {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 10px;

    &:hover {
      background-color: rgba(17, 25, 39, 0.04);
    }
  }

  .data_name_container {
    display: flex;
    gap: 50px;
    align-items: center;
  }

  .status {
    span {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 16px;
      text-transform: uppercase;
    }

    .valider {
      color: rgb(11, 129, 90);
      background-color: rgba(11, 129, 90, 0.12);
    }

    .annuler {
      color: rgb(180, 35, 24);
      background-color: rgba(240, 68, 56, 0.12);
    }
  }

  .p_valider {
    color: rgb(16, 185, 129);
  }

  .p_annuler {
    color: rgb(240, 68, 56);
  }
`;
