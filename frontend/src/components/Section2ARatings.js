import React from "react";
import RatingScale from "./RatingScale";
import { FOUNDATIONAL_QUESTIONS, RATING_LEVELS } from "../data/formOptions";

export default function Section2ARatings({ data, onChange }) {
  return (
    <section className="form-section">
      <h2>Section 2A: Professional Education + Qur'anic Curriculum</h2>
      <p className="section-intro">Rate yourself from 0–4.</p>
      <div className="scale-legend">
        {RATING_LEVELS.map((l) => (
          <span key={l.value}>{l.value} = {l.desc}</span>
        ))}
      </div>
      {FOUNDATIONAL_QUESTIONS.map((q, i) => (
        <div className="rating-row" key={q.key}>
          <p className="rating-text">{i + 1}. {q.text}</p>
          <RatingScale
            name={q.key}
            value={data[q.key]}
            onChange={(v) => onChange(q.key, v)}
          />
        </div>
      ))}
    </section>
  );
}
