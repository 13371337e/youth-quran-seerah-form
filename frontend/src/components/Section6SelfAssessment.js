import React from "react";
import { CURRENT_STATE_OPTIONS, OBSTACLE_OPTIONS } from "../data/formOptions";

export default function Section6SelfAssessment({ currentState, obstacles, onCurrentStateChange, onObstacleToggle }) {
  return (
    <section className="form-section">
      <h2>Final Personal Diagnosis</h2>

      <h3 className="subheading">1. My current level is:</h3>
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

      <h3 className="subheading">2. My biggest obstacle is:</h3>
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
