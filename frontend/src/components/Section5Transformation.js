import React from "react";
import RatingScale from "./RatingScale";
import { TRANSFORMATION_DIMENSIONS } from "../data/formOptions";

export default function Section5Transformation({ data, onChange }) {
  return (
    <section className="form-section">
      <h2>Section 5: One-Year Transformation Summary</h2>
      <p className="section-intro">
        For each dimension, choose your current level. Only mark a high level if clear evidence from the last 30
        days exists.
      </p>

      {TRANSFORMATION_DIMENSIONS.map((d) => (
        <div className="text-question-block" key={d.key}>
          <h4>{d.title}</h4>
          <p className="section-intro">What I needed to become: {d.need}</p>
          <span className="field-label">Current level</span>
          <RatingScale name={d.key} value={data[d.key].level} onChange={(v) => onChange(d.key, "level", v)} />
          <label className="field">
            <span>Evidence (last 30 days)</span>
            <textarea rows={2} value={data[d.key].evidence} onChange={(e) => onChange(d.key, "evidence", e.target.value)} />
          </label>
          <label className="field">
            <span>Main gap</span>
            <textarea rows={2} value={data[d.key].gap} onChange={(e) => onChange(d.key, "gap", e.target.value)} />
          </label>
        </div>
      ))}
    </section>
  );
}
