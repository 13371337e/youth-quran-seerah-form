import React from "react";

export default function Section1BasicInfo({ data, onChange }) {
  const field = (key, label, type = "text", required = false) => (
    <label className="field">
      <span>{label}{required && <span className="required">*</span>}</span>
      <input
        type={type}
        value={data[key]}
        required={required}
        onChange={(e) => onChange(key, e.target.value)}
      />
    </label>
  );

  return (
    <section className="form-section">
      <h2>Section 1: Basic Information</h2>
      <p className="section-intro">Provide foundational participant details.</p>
      <div className="field-grid">
        {field("name", "Name", "text", true)}
        {field("age", "Age", "number")}
        {field("degree", "Degree and Major/Specialization")}
        {field("yearSemester", "Year or Semester")}
        {field("college", "College or Organization")}
        {field("groupLeader", "Group Leader and Circle")}
        {field("religiousWork", "Current Religious Work/Role")}
        {field("date", "Date", "date", true)}
      </div>
    </section>
  );
}
