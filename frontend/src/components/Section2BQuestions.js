import React from "react";
import { FIVE_QUESTIONS } from "../data/formOptions";

export default function Section2BQuestions({ data, specialSkill, onChange, onSpecialSkillChange }) {
  return (
    <section className="form-section">
      <h2>Section 2B: Five Foundational Questions</h2>
      <p className="section-intro">Write clear answers to these questions after one year.</p>
      {FIVE_QUESTIONS.map((q) => (
        <div className="text-question-block" key={q.key}>
          <h3>{q.label}</h3>
          <label className="field">
            <span>One-year answer</span>
            <textarea
              rows={2}
              value={data[q.key].answer}
              onChange={(e) => onChange(q.key, "answer", e.target.value)}
            />
          </label>
          <label className="field">
            <span>Practical evidence (last 30 days)</span>
            <textarea
              rows={2}
              value={data[q.key].evidence}
              onChange={(e) => onChange(q.key, "evidence", e.target.value)}
            />
          </label>
          <label className="field">
            <span>Remaining gaps</span>
            <textarea
              rows={2}
              value={data[q.key].gaps}
              onChange={(e) => onChange(q.key, "gaps", e.target.value)}
            />
          </label>
        </div>
      ))}

      <div className="text-question-block">
        <h3>Special Question</h3>
        <label className="field">
          <span>One skill or competency in my field that can be aligned with benefit (khair), justice (adl), or service in the next four months:</span>
          <textarea rows={2} value={specialSkill} onChange={(e) => onSpecialSkillChange(e.target.value)} />
        </label>
      </div>
    </section>
  );
}
