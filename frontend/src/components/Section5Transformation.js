import React from "react";
import RatingScale from "./RatingScale";
import { TRANSFORMATION_DIMENSIONS } from "../data/formOptions";

export default function Section5Transformation({ data, onChange }) {
  return (
    <section className="form-section">
      <h2>Part 4: One Year Later: What Did I Study and What Did I Become?</h2>
      <p className="section-intro">
        For each dimension, rate your level with clear evidence from the last 30 days.
      </p>

      {TRANSFORMATION_DIMENSIONS.map((d) => (
        <div className="text-question-block" key={d.key}>
          <h4>{d.title}</h4>
          <p className="section-intro">{d.need}</p>
          <span className="field-label">Score</span>
          <RatingScale name={d.key} value={data[d.key].level} onChange={(v) => onChange(d.key, "level", v)} />
          <label className="field">
            <span>Clear evidence from the last 30 days</span>
            <textarea rows={2} value={data[d.key].evidence} onChange={(e) => onChange(d.key, "evidence", e.target.value)} />
          </label>
          <label className="field">
            <span>Actual gap</span>
            <textarea rows={2} value={data[d.key].gap} onChange={(e) => onChange(d.key, "gap", e.target.value)} />
          </label>
        </div>
      ))}
    </section>
  );
}
