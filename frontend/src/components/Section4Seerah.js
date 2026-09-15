import React from "react";
import RatingScale from "./RatingScale";
import { SEERAH_STAGES } from "../data/formOptions";

export default function Section4Seerah({ stages, onStageChange, reflections, onReflectionChange }) {
  return (
    <section className="form-section">
      <h2>Part 3: Makki Seerah as an Operational Roadmap</h2>
      <p className="section-intro">
        Makki Seerah should not be studied merely as a list of events. It should be understood as an Operational Roadmap: What was done? At what stage? Why was it done? How was it done? What was the result? What foundation was built for the next stage?
      </p>

      {SEERAH_STAGES.map((s) => (
        <div className="text-question-block" key={s.key}>
          <h4>{s.title}</h4>
          <p className="section-intro"><strong>Method/principles:</strong> {s.method}</p>
          <p className="section-intro"><strong>Result:</strong> {s.result}</p>
        </div>
      ))}

      <div className="text-question-block">
        <h3>Reflection Questions</h3>
        <label className="field">
          <span>1. Which stage of the Makki Seerah does our current youth work most need, and why?</span>
          <textarea rows={2} value={reflections.q1} onChange={(e) => onReflectionChange("q1", e.target.value)} />
        </label>
        <label className="field">
          <span>2. During the past 3 months, which capable person did I identify, build a personal relationship with, and connect to sustained Tarbiyah?</span>
          <textarea rows={2} value={reflections.q2} onChange={(e) => onReflectionChange("q2", e.target.value)} />
        </label>
        <label className="field">
          <span>3. Which foundation for the next stage is still missing?</span>
          <textarea rows={2} value={reflections.q3} onChange={(e) => onReflectionChange("q3", e.target.value)} />
        </label>
      </div>
    </section>
  );
}
