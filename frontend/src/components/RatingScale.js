import React from "react";
import { RATING_LEVELS } from "../data/formOptions";

export default function RatingScale({ name, value, onChange }) {
  return (
    <div className="rating-scale" role="radiogroup" aria-label={name}>
      {RATING_LEVELS.map((level) => (
        <button
          type="button"
          key={level.value}
          className={`rating-btn ${value === level.value ? "selected" : ""}`}
          title={level.desc}
          aria-pressed={value === level.value}
          onClick={() => onChange(level.value)}
        >
          {level.value}
        </button>
      ))}
    </div>
  );
}
