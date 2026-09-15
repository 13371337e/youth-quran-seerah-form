import React from "react";
import RatingScale from "./RatingScale";
import { QURAN_RATINGS, SIX_STAGES } from "../data/formOptions";

export default function Section3AQuranRatings({ ratings, onRatingChange, stages, onStageChange, reflection, onReflectionChange }) {
  return (
    <section className="form-section">
      <h2>Section 3: Qur'anic Intellectual Development</h2>
      <p className="section-intro">
        The 77 Surahs were not meant to produce 77 isolated summaries. Through the chronological/nuzooli journey, the Qur'an first built: Ma'rifat of the Rabb; Certainty of the Hereafter; Correction of false worldly standards; Character and Tazkiyah; The personality of the Da'i; Responsibility toward the Ummah and humanity.
      </p>

      {QURAN_RATINGS.map((q, i) => (
        <div className="rating-row" key={q.key}>
          <p className="rating-text">
            {i + 1}. <strong>{q.label}</strong> — {q.text}
          </p>
          <RatingScale name={q.key} value={ratings[q.key]} onChange={(v) => onRatingChange(q.key, v)} />
        </div>
      ))}

      <h3 className="subheading">Part 2-B — Six Stages — Observable evidence</h3>
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
        <h3>Part 2-B — Reflection</h3>
        <label className="field">
          <span>One Makki Surah/theme that most changed my standard of life:</span>
          <textarea rows={2} value={reflection} onChange={(e) => onReflectionChange(e.target.value)} />
        </label>
      </div>
    </section>
  );
}
