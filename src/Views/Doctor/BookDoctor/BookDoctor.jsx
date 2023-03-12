import { useState } from "react";

import { DetailDoctorProfile } from "../../../Components";
import {
  getDayString,
  getFormattedDate,
  getDateArray,
} from "../../../utils/dayName";
import "./BookDoctor.css";

export default function BookDoctor() {
  const date = new Date();
  const tempDate = new Date();
  const arr = getDateArray(date, tempDate.setDate(tempDate.getDate() + 30));

  arr.map((date) => console.log(date.getMonth()));

  return (
    <main className="book-doctor-main">
      <DetailDoctorProfile />
      <section className="book-doctor-section">
        <div className="book-doctor-heading">
          <h1 className="main-gradient">{getFormattedDate(date)}</h1>
          <h2 className="main-gradient">{getDayString(date.getDay())}</h2>
        </div>
        <div className="book-doctor-body">
          <h2 className="available-dates-heading">Available Dates</h2>
          <div className="book-doctor-available-dates">
            {arr.map((date) => (
              <div className="dates-container">
                <div className="booking-dates">{getFormattedDate(date)}</div>
                <div className="booking-day">{getDayString(date.getDay())}</div>
              </div>
            ))}
          </div>
          <h2 className="available-time-heading">Available Time</h2>
          <div className="book-doctor-available-time">
            <div className="booking-time">09: 00 AM</div>
            <div className="booking-time">09: 30 AM</div>
            <div className="booking-time">10: 00 AM</div>
            <div className="booking-time">10: 30 AM</div>
            <div className="booking-time">11: 00 AM</div>
            <div className="booking-time">11: 30 AM</div>
          </div>

          <div className="proceed-to-pay-btn main-bg">Proceed To Pay</div>
        </div>
      </section>
    </main>
  );
}
