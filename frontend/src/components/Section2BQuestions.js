import React from "react";
import { FIVE_QUESTIONS } from "../data/formOptions";

export default function Section2BQuestions({ data, specialSkill, onChange, onSpecialSkillChange }) {
  return (
    <section className="form-section">
      <h2>Part 1-B: Five Fundamental Questions</h2>
      <p className="section-intro">Provide clear answers after one year of study.</p>
      {FIVE_QUESTIONS.map((q) => (
        <div className="text-question-block" key={q.key}>
          <h3>{q.label}</h3>
          <label className="field">
            <span>My clear answer after one year</span>
            <textarea
              rows={2}
              value={data[q.key].answer}
              onChange={(e) => onChange(q.key, "answer", e.target.value)}
            />
          </label>
          <label className="field">
            <span>Practical evidence from the past 30 days</span>
            <textarea
              rows={2}
              value={data[q.key].evidence}
              onChange={(e) => onChange(q.key, "evidence", e.target.value)}
            />
          </label>
          <label className="field">
            <span>Remaining gap</span>
            <textarea
              rows={2}
              value={data[q.key].gaps}
              onChange={(e) => onChange(q.key, "gaps", e.target.value)}
            />
          </label>
        </div>
      ))}

      <div className="text-question-block">
        <h3>One capability from my degree/field that can be linked to Khair, justice, or service during the next four months:</h3>
        <label className="field">
          <textarea rows={2} value={specialSkill} onChange={(e) => onSpecialSkillChange(e.target.value)} />
        </label>
      </div>
    </section>
  );
}
