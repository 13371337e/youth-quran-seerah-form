import React from "react";

export default function Section7FinalReflection({ data, signature, onChange, onSignatureChange }) {
  return (
    <section className="form-section">
      <h2>Final Personal Diagnosis (continued)</h2>

      <h3 className="subheading">3. My strongest change during this one year:</h3>
      <label className="field">
        <textarea rows={2} value={data.strongest} onChange={(e) => onChange("strongest", e.target.value)} />
      </label>

      <h3 className="subheading">4. My biggest incomplete change:</h3>
      <label className="field">
        <textarea rows={2} value={data.incomplete} onChange={(e) => onChange("incomplete", e.target.value)} />
      </label>

      <h3 className="subheading">5. What specific help do I need from the Naqeeb during the next four months?</h3>
      <label className="field">
        <textarea rows={2} value={data.support} onChange={(e) => onChange("support", e.target.value)} />
      </label>

      <label className="field">
        <span>Student Signature:</span>
        <input type="text" value={signature} onChange={(e) => onSignatureChange(e.target.value)} />
      </label>

      <label className="field">
        <span>Date:</span>
        <input type="date" />
      </label>
    </section>
  );
}
