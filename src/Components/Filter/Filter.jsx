import { useState, useEffect } from "react";
import { BsCalendarDate } from "react-icons/bs";

import "./Filter.css";

const Filter = () => {
  const [formData, setFormData] = useState({
    date: "",
    gender: "",
    urology: false,
    neurology: false,
    dentist: false,
    orthopedic: false,
    cardiologist: false,
  });

  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();

  useEffect(() => {
    let date = new Date();

    setMinDate(date.toISOString().split("T")[0]);
    date.setDate(date.getDate() + 7);

    setMaxDate(date.toISOString().slice(0, 10));
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  return (
    <div className="filter--container box-shadow">
      <div className="filter--heading">
        <h1 className="main-gradient">Filter Your Results</h1>
      </div>
      <div className="filter--box">
        <h2 className="filter--subheading blue-gradient">Search Filter</h2>
        <div className="calendar--container">
          <input
            type="date"
            id="date"
            name="date"
            placeholder={minDate}
            min={minDate}
            max={maxDate}
            className="date--input"
          />
          <BsCalendarDate className="calendar--icon" />
        </div>
      </div>
      <div className="filter--box">
        <h2 className="filter--subheading blue-gradient">Gender</h2>
        <label className="label">
          <input
            type="radio"
            name="gender"
            value=""
            onChange={handleChange}
            checked={formData.gender === ""}
          />{" "}
          All
        </label>
        <label className="label">
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label className="label">
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />{" "}
          Female
        </label>
      </div>
      <div className="filter--box">
        <h2 className="filter--subheading blue-gradient">Select Specialist</h2>
        <label className="label">
          <input
            type="checkbox"
            name="urology"
            checked={formData.urology}
            onChange={handleChange}
          />{" "}
          Urology
        </label>
        <label className="label">
          <input
            type="checkbox"
            name="neurology"
            checked={formData.neurology}
            onChange={handleChange}
          />{" "}
          Neurology
        </label>
        <label className="label">
          <input
            type="checkbox"
            name="dentist"
            checked={formData.dentist}
            onChange={handleChange}
          />{" "}
          Dentist
        </label>
        <label className="label">
          <input
            type="checkbox"
            name="orthopedic"
            checked={formData.orthopedic}
            onChange={handleChange}
          />{" "}
          Orthopedic
        </label>
        <label className="label">
          <input
            type="checkbox"
            name="cardiologist"
            checked={formData.cardiologist}
            onChange={handleChange}
          />{" "}
          Cardiologist
        </label>
      </div>
      <div className="filter--button">
        <button className="main-bg">Search</button>
      </div>
    </div>
  );
};

export default Filter;
