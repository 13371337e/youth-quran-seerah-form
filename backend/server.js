const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const ADMIN_KEY = process.env.ADMIN_KEY || "admin123";
const CSV_PATH = path.join(__dirname, "responses.csv");

app.use(cors());
app.use(express.json({ limit: "2mb" }));

const SIX_STAGE_KEYS = ["stage1", "stage2", "stage3", "stage4", "stage5", "stage6"];
const SEERAH_KEYS = ["seerah1", "seerah2", "seerah3", "seerah4", "seerah5", "seerah6", "seerah7", "seerah8", "seerah9"];
const TRANS_KEYS = ["trans1", "trans2", "trans3", "trans4", "trans5", "trans6"];
const FIVE_Q_KEYS = ["whoAmI", "whyLive", "whatSuccess", "abilityFor", "accountability"];

const HEADER = [
  "Timestamp",
  "Name", "Age", "Degree", "YearSemester", "College", "GroupLeader", "ReligiousWork", "FormDate",
  "Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8",
  ...FIVE_Q_KEYS.flatMap((k) => [`${k}_Answer`, `${k}_Evidence`, `${k}_Gaps`]),
  "SpecialSkill",
  "QR1", "QR2", "QR3", "QR4", "QR5", "QR6", "QR7", "QR8", "QR9", "QR10", "QR11", "QR12",
  ...SIX_STAGE_KEYS.flatMap((k) => [`${k}_Evidence`, `${k}_Gaps`]),
  "QuranReflection",
  ...SEERAH_KEYS.flatMap((k) => [`${k}_Status`, `${k}_Evidence`, `${k}_Gaps`]),
  "SeerahReflection1", "SeerahReflection2", "SeerahReflection3",
  ...TRANS_KEYS.flatMap((k) => [`${k}_Level`, `${k}_Evidence`, `${k}_Gap`]),
  "CurrentState",
  "BiggestObstacle",
  "Strongest", "Incomplete", "SupportNeeded",
  "Signature",
];

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function ensureCsvFile() {
  if (!fs.existsSync(CSV_PATH)) {
    fs.writeFileSync(CSV_PATH, HEADER.map(csvEscape).join(",") + "\n");
  }
}

function safe(obj, ...path) {
  return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ""), obj);
}

function flattenSubmission(body) {
  const row = [];
  row.push(new Date().toISOString());

  const info = body.studentInfo || {};
  row.push(info.name, info.age, info.degree, info.yearSemester, info.college, info.groupLeader, info.religiousWork, info.date);

  const ratings8 = body.ratings8 || {};
  for (let i = 1; i <= 8; i++) row.push(safe(ratings8, `q${i}`));

  const fiveQ = body.fiveQuestions || {};
  FIVE_Q_KEYS.forEach((k) => {
    row.push(safe(fiveQ, k, "answer"), safe(fiveQ, k, "evidence"), safe(fiveQ, k, "gaps"));
  });

  row.push(body.specialSkill);

  const ratings12 = body.ratings12 || {};
  for (let i = 1; i <= 12; i++) row.push(safe(ratings12, `qr${i}`));

  const sixStages = body.sixStages || {};
  SIX_STAGE_KEYS.forEach((k) => {
    row.push(safe(sixStages, k, "evidence"), safe(sixStages, k, "gaps"));
  });

  row.push(body.quranReflection);

  const seerahStages = body.seerahStages || {};
  SEERAH_KEYS.forEach((k) => {
    row.push(safe(seerahStages, k, "status"), safe(seerahStages, k, "evidence"), safe(seerahStages, k, "gaps"));
  });

  const seerahReflections = body.seerahReflections || {};
  row.push(seerahReflections.q1, seerahReflections.q2, seerahReflections.q3);

  const transformation = body.transformation || {};
  TRANS_KEYS.forEach((k) => {
    row.push(safe(transformation, k, "level"), safe(transformation, k, "evidence"), safe(transformation, k, "gap"));
  });

  row.push(body.currentState);
  row.push(Array.isArray(body.biggestObstacle) ? body.biggestObstacle.join("; ") : body.biggestObstacle);

  const finalReflection = body.finalReflection || {};
  row.push(finalReflection.strongest, finalReflection.incomplete, finalReflection.support);

  row.push(body.signature);

  return row;
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/submit", (req, res) => {
  try {
    const body = req.body || {};
    if (!body.studentInfo || !body.studentInfo.name || !body.studentInfo.name.trim()) {
      return res.status(400).json({ success: false, error: "Name is required." });
    }

    ensureCsvFile();
    const row = flattenSubmission(body).map(csvEscape).join(",") + "\n";
    fs.appendFileSync(CSV_PATH, row);

    res.json({ success: true });
  } catch (err) {
    console.error("Submission error:", err);
    res.status(500).json({ success: false, error: "Server error while saving response." });
  }
});

app.get("/api/download", (req, res) => {
  if (req.query.key !== ADMIN_KEY) {
    return res.status(401).json({ success: false, error: "Unauthorized." });
  }
  ensureCsvFile();
  res.download(CSV_PATH, "responses.csv");
});

app.listen(PORT, () => {
  ensureCsvFile();
  console.log(`Server running on port ${PORT}`);
});
