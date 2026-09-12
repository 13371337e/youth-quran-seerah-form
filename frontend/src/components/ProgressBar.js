import React from "react";

export default function ProgressBar({ step, total, title }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="progress-wrap">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-label">
        Step {step} of {total} — {title}
      </div>
    </div>
  );
}
