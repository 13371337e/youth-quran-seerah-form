import React from "react";

export default function Section7FinalReflection({ data, signature, onChange, onSignatureChange }) {
  return (
    <section className="form-section">
      <h2>Section 7: Final Reflection</h2>

      <label className="field">
        <span>Strongest transformation this year</span>
        <textarea rows={2} value={data.strongest} onChange={(e) => onChange("strongest", e.target.value)} />
      </label>
      <label className="field">
        <span>Biggest incomplete transformation</span>
        <textarea rows={2} value={data.incomplete} onChange={(e) => onChange("incomplete", e.target.value)} />
      </label>
      <label className="field">
        <span>Support needed from group leader (next 4 months)</span>
        <textarea rows={2} value={data.support} onChange={(e) => onChange("support", e.target.value)} />
      </label>
      <label className="field">
        <span>Participant signature (type full name)</span>
        <input type="text" value={signature} onChange={(e) => onSignatureChange(e.target.value)} />
      </label>
    </section>
  );
}
