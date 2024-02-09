import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FiCalendar } from "react-icons/fi"

const fakeEvents = [
  {
    id: 1,
    date: "2021-10-10",
    title: "Mariage 💍",
    start: "10:00",
    end: "12:00",
    amount: 453,
  },
  {
    id: 1,
    date: "2021-10-13",
    title: "Anniversaire 🎂",
    start: "10:00",
    end: "12:00",
    amount: 2600,
  },
  {
    id: 2,
    date: "2021-10-18",
    title: "Celebration 🎉",
    start: "10:00",
    end: "12:00",
    amount: 3250,
  },
  {
    id: 3,
    date: "2021-10-10",
    title: "Mariage 💍",
    start: "10:00",
    end: "12:00",
    amount: 530,
  },
  {
    id: 2,
    date: "2021-10-10",
    title: "Anniversaire 🎂",
    start: "10:00",
    end: "12:00",
    amount: 1000,
  },

]

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
]

export default function EventsUpcomming() {
  const [events] = useState(fakeEvents)
  const [showAllevents] = useState(false)

  const splitDate = (date: string) => {
    const [year, month, day] = date.split("-")
    return {
      year,
      month: months[parseInt(month) - 1],
      day,
    }
  }


  return (
    <EventsUpcommingStyled className="collectif_grid">
      <div className="container_title">
        <h4>Events à venir</h4>
      </div>

      

      <div className="container_events">
        {events
          .slice(0, showAllevents ? events.length : 4)
          .map((event) => (
            <div key={event.id} className="event">
              <div className="data_name_container">
                <div className="date_affiche">
                  <span className="month">
                    {splitDate(event.date).month}
                  </span>
                  <h4 className="day">{splitDate(event.date).day}</h4>
                </div>
                <div>
                  <p className="title">{event.title}</p>
                  <span className="description">
                    {event.start} - {event.end} 
                  </span>
                </div>
              </div>
                <div className="icon_container">
                  <FiCalendar />
                </div>
            </div>
          ))}
        {events.length > 4 && !showAllevents && (
          <Link className="see-more" to="#">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Voir plus
          </Link>
        )}
      </div>
    </EventsUpcommingStyled>
  )
}

const EventsUpcommingStyled = styled.div`
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

  .title{
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.57;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
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

  svg{
    font-size: 1.2rem;
  }

  .container_events {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .event {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* cursor: pointer; */
    padding: 10px;

  }

  .data_name_container {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`
