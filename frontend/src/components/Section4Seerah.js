import React from "react";
import RatingScale from "./RatingScale";
import { SEERAH_STAGES } from "../data/formOptions";

export default function Section4Seerah({ stages, onStageChange, reflections, onReflectionChange }) {
  return (
    <section className="form-section">
      <h2>Section 4: Makki Seerah — Operational Roadmap</h2>
      <p className="section-intro">
        Makki Seerah was taught as an operational roadmap, not a historical checklist. Each stage answers: What
        work? At what stage? Why? By what method? What result? What foundation for the next stage?
      </p>

      {SEERAH_STAGES.map((s) => (
        <div className="text-question-block" key={s.key}>
          <h4>{s.title}</h4>
          <p className="section-intro"><strong>Work &amp; method:</strong> {s.method}</p>
          <p className="section-intro"><strong>Result / next foundation:</strong> {s.result}</p>
          <span className="field-label">Your status</span>
          <RatingScale name={s.key} value={stages[s.key].status} onChange={(v) => onStageChange(s.key, "status", v)} />
          <label className="field">
            <span>Evidence</span>
            <textarea rows={2} value={stages[s.key].evidence} onChange={(e) => onStageChange(s.key, "evidence", e.target.value)} />
          </label>
          <label className="field">
            <span>Gaps</span>
            <textarea rows={2} value={stages[s.key].gaps} onChange={(e) => onStageChange(s.key, "gaps", e.target.value)} />
          </label>
        </div>
      ))}

      <div className="text-question-block">
        <h3>Reflection Questions</h3>
        <label className="field">
          <span>Which Meccan stage does current youth work most need, and why?</span>
          <textarea rows={2} value={reflections.q1} onChange={(e) => onReflectionChange("q1", e.target.value)} />
        </label>
        <label className="field">
          <span>In the last three months, which capable person did you meet, befriend, and engage in ongoing training?</span>
          <textarea rows={2} value={reflections.q2} onChange={(e) => onReflectionChange("q2", e.target.value)} />
        </label>
        <label className="field">
          <span>What foundation for the next stage is not yet ready: people, training, community, intellectual challenge, protection, new land, or planning?</span>
          <textarea rows={2} value={reflections.q3} onChange={(e) => onReflectionChange("q3", e.target.value)} />
        </label>
      </div>
    </section>
  );
}
