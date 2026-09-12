import React from "react";
import RatingScale from "./RatingScale";
import { QURAN_RATINGS, SIX_STAGES } from "../data/formOptions";

export default function Section3AQuranRatings({ ratings, onRatingChange, stages, onStageChange, reflection, onReflectionChange }) {
  return (
    <section className="form-section">
      <h2>Section 3: Quranic Intellectual Development (77 Meccan Chapters)</h2>
      <p className="section-intro">
        The Quran built first: certainty in God (Ma'rifat-e-Rabb) and belief in the afterlife (Aakhirat), then
        corrected worldly values, built character and purification, shaped the caller's personality, and gave
        responsibility for the community and humanity.
      </p>

      {QURAN_RATINGS.map((q, i) => (
        <div className="rating-row" key={q.key}>
          <p className="rating-text">
            {i + 1}. <strong>{q.label}</strong> — {q.text}
          </p>
          <RatingScale name={q.key} value={ratings[q.key]} onChange={(v) => onRatingChange(q.key, v)} />
        </div>
      ))}

      <h3 className="subheading">Six Stages of Quranic Development — Practical Evidence</h3>
      {SIX_STAGES.map((s) => (
        <div className="text-question-block" key={s.key}>
          <h4>{s.title}</h4>
          <p className="section-intro">What changed: {s.whatChanged}</p>
          <label className="field">
            <span>Observable evidence</span>
            <textarea rows={2} value={stages[s.key].evidence} onChange={(e) => onStageChange(s.key, "evidence", e.target.value)} />
          </label>
          <label className="field">
            <span>Remaining work</span>
            <textarea rows={2} value={stages[s.key].gaps} onChange={(e) => onStageChange(s.key, "gaps", e.target.value)} />
          </label>
        </div>
      ))}

      <div className="text-question-block">
        <h3>Reflection Question</h3>
        <label className="field">
          <span>Which Meccan chapter or theme changed your life's measure most, and what's the evidence?</span>
          <textarea rows={3} value={reflection} onChange={(e) => onReflectionChange(e.target.value)} />
        </label>
      </div>
    </section>
  );
}
