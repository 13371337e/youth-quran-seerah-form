import React from "react";
import { CURRENT_STATE_OPTIONS, OBSTACLE_OPTIONS } from "../data/formOptions";

export default function Section6SelfAssessment({ currentState, obstacles, onCurrentStateChange, onObstacleToggle }) {
  return (
    <section className="form-section">
      <h2>Section 6: Self-Assessment &amp; Support Needs</h2>

      <h3 className="subheading">Where is my learning currently?</h3>
      <div className="choice-list">
        {CURRENT_STATE_OPTIONS.map((opt) => (
          <label className="radio-option" key={opt}>
            <input
              type="radio"
              name="currentState"
              checked={currentState === opt}
              onChange={() => onCurrentStateChange(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>

      <h3 className="subheading">What prevents me most from progressing? (select all that apply)</h3>
      <div className="choice-list">
        {OBSTACLE_OPTIONS.map((opt) => (
          <label className="checkbox-option" key={opt}>
            <input
              type="checkbox"
              checked={obstacles.includes(opt)}
              onChange={() => onObstacleToggle(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
