import React, { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import Section1BasicInfo from "./components/Section1BasicInfo";
import Section2ARatings from "./components/Section2ARatings";
import Section2BQuestions from "./components/Section2BQuestions";
import Section3AQuranRatings from "./components/Section3AQuranRatings";
import Section4Seerah from "./components/Section4Seerah";
import Section5Transformation from "./components/Section5Transformation";
import Section6SelfAssessment from "./components/Section6SelfAssessment";
import Section7FinalReflection from "./components/Section7FinalReflection";
import {
  FOUNDATIONAL_QUESTIONS,
  FIVE_QUESTIONS,
  QURAN_RATINGS,
  SIX_STAGES,
  SEERAH_STAGES,
  TRANSFORMATION_DIMENSIONS,
} from "./data/formOptions";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function emptyRatingMap(items) {
  const map = {};
  items.forEach((item) => { map[item.key] = null; });
  return map;
}

function emptyTextMap(items, fields) {
  const map = {};
  items.forEach((item) => {
    map[item.key] = {};
    fields.forEach((f) => { map[item.key][f] = ""; });
  });
  return map;
}

const initialState = {
  studentInfo: {
    name: "", age: "", degree: "", yearSemester: "", college: "",
    groupLeader: "", religiousWork: "", date: "",
  },
  ratings8: emptyRatingMap(FOUNDATIONAL_QUESTIONS),
  fiveQuestions: emptyTextMap(FIVE_QUESTIONS, ["answer", "evidence", "gaps"]),
  specialSkill: "",
  ratings12: emptyRatingMap(QURAN_RATINGS),
  sixStages: emptyTextMap(SIX_STAGES, ["evidence", "gaps"]),
  quranReflection: "",
  seerahStages: (() => {
    const map = emptyTextMap(SEERAH_STAGES, ["evidence", "gaps"]);
    SEERAH_STAGES.forEach((s) => { map[s.key].status = null; });
    return map;
  })(),
  seerahReflections: { q1: "", q2: "", q3: "" },
  transformation: emptyTextMap(TRANSFORMATION_DIMENSIONS, ["evidence", "gap"]),
  currentState: "",
  biggestObstacle: [],
  finalReflection: { strongest: "", incomplete: "", support: "" },
  signature: "",
};
TRANSFORMATION_DIMENSIONS.forEach((d) => { initialState.transformation[d.key].level = null; });

const STEP_TITLES = [
  "Basic Information",
  "Foundational Understanding",
  "Five Foundational Questions",
  "Quranic Development",
  "Makki Seerah Roadmap",
  "Transformation Summary",
  "Self-Assessment",
  "Final Reflection",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const totalSteps = STEP_TITLES.length;

  const updateStudentInfo = (key, value) =>
    setForm((f) => ({ ...f, studentInfo: { ...f.studentInfo, [key]: value } }));

  const updateRating8 = (key, value) =>
    setForm((f) => ({ ...f, ratings8: { ...f.ratings8, [key]: value } }));

  const updateFiveQuestions = (key, field, value) =>
    setForm((f) => ({
      ...f,
      fiveQuestions: { ...f.fiveQuestions, [key]: { ...f.fiveQuestions[key], [field]: value } },
    }));

  const updateRating12 = (key, value) =>
    setForm((f) => ({ ...f, ratings12: { ...f.ratings12, [key]: value } }));

  const updateSixStages = (key, field, value) =>
    setForm((f) => ({
      ...f,
      sixStages: { ...f.sixStages, [key]: { ...f.sixStages[key], [field]: value } },
    }));

  const updateSeerahStages = (key, field, value) =>
    setForm((f) => ({
      ...f,
      seerahStages: { ...f.seerahStages, [key]: { ...f.seerahStages[key], [field]: value } },
    }));

  const updateSeerahReflections = (field, value) =>
    setForm((f) => ({ ...f, seerahReflections: { ...f.seerahReflections, [field]: value } }));

  const updateTransformation = (key, field, value) =>
    setForm((f) => ({
      ...f,
      transformation: { ...f.transformation, [key]: { ...f.transformation[key], [field]: value } },
    }));

  const toggleObstacle = (opt) =>
    setForm((f) => {
      const has = f.biggestObstacle.includes(opt);
      return {
        ...f,
        biggestObstacle: has
          ? f.biggestObstacle.filter((o) => o !== opt)
          : [...f.biggestObstacle, opt],
      };
    });

  const updateFinalReflection = (field, value) =>
    setForm((f) => ({ ...f, finalReflection: { ...f.finalReflection, [field]: value } }));

  const goNext = () => {
    if (step === 1 && !form.studentInfo.name.trim()) {
      window.alert("Please enter your name before continuing.");
      return;
    }
    setStep((s) => Math.min(s + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitForm = async () => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch(`${BACKEND_URL}/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }
      setStatus("success");
      setForm(initialState);
      setStep(1);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Could not reach the server. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="app-shell">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h1>Response saved!</h1>
          <p>Thank you. Your evaluation has been recorded.</p>
          <button className="btn-primary" onClick={() => setStatus("idle")}>
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Youth Quran Seerah Deep Evaluation Form</h1>
        <p className="app-subtitle">From Information to Transformation: A One-Year Intellectual and Practical Assessment</p>
      </header>

      <ProgressBar step={step} total={totalSteps} title={STEP_TITLES[step - 1]} />

      <main className="form-card">
        {step === 1 && <Section1BasicInfo data={form.studentInfo} onChange={updateStudentInfo} />}
        {step === 2 && <Section2ARatings data={form.ratings8} onChange={updateRating8} />}
        {step === 3 && (
          <Section2BQuestions
            data={form.fiveQuestions}
            specialSkill={form.specialSkill}
            onChange={updateFiveQuestions}
            onSpecialSkillChange={(v) => setForm((f) => ({ ...f, specialSkill: v }))}
          />
        )}
        {step === 4 && (
          <Section3AQuranRatings
            ratings={form.ratings12}
            onRatingChange={updateRating12}
            stages={form.sixStages}
            onStageChange={updateSixStages}
            reflection={form.quranReflection}
            onReflectionChange={(v) => setForm((f) => ({ ...f, quranReflection: v }))}
          />
        )}
        {step === 5 && (
          <Section4Seerah
            stages={form.seerahStages}
            onStageChange={updateSeerahStages}
            reflections={form.seerahReflections}
            onReflectionChange={updateSeerahReflections}
          />
        )}
        {step === 6 && <Section5Transformation data={form.transformation} onChange={updateTransformation} />}
        {step === 7 && (
          <Section6SelfAssessment
            currentState={form.currentState}
            obstacles={form.biggestObstacle}
            onCurrentStateChange={(v) => setForm((f) => ({ ...f, currentState: v }))}
            onObstacleToggle={toggleObstacle}
          />
        )}
        {step === 8 && (
          <Section7FinalReflection
            data={form.finalReflection}
            signature={form.signature}
            onChange={updateFinalReflection}
            onSignatureChange={(v) => setForm((f) => ({ ...f, signature: v }))}
          />
        )}

        {status === "error" && <div className="error-banner">{errorMsg}</div>}

        <div className="nav-buttons">
          <button type="button" className="btn-secondary" onClick={goBack} disabled={step === 1}>
            Back
          </button>
          {step < totalSteps ? (
            <button type="button" className="btn-primary" onClick={goNext}>
              Next
            </button>
          ) : (
            <button type="button" className="btn-primary" onClick={submitForm} disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
