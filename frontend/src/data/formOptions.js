// Static content for the Youth Quran Seerah Deep Evaluation Form.
// Keeping labels/options here keeps the section components declarative.

export const RATING_LEVELS = [
  { value: 0, desc: "Issue is not clear" },
  { value: 1, desc: "Information only (facts known)" },
  { value: 2, desc: "Thought or preference changed" },
  { value: 3, desc: "Action/behavior has begun" },
  { value: 4, desc: "Established character and clear evidence" },
];

export const FOUNDATIONAL_QUESTIONS = [
  { key: "q1", text: "I can clearly explain that my degree is not only job preparation, but also fulfills a human need and is a trust (amanat) from Allah." },
  { key: "q2", text: "I have clear answers to five key questions: Who am I? Why do I live? What is success? What is my ability for? To whom am I accountable?" },
  { key: "q3", text: "I don't measure success only by grades, salary, position, or social status—also by halal livelihood, integrity, benefit to others, and Allah's pleasure." },
  { key: "q4", text: "I can identify at least one ethical issue in my field and explain the Quranic basis for the right decision." },
  { key: "q5", text: "My religious life and professional life are not separate; I feel accountable to Allah in class, internship, work, business, and research." },
  { key: "q6", text: "I can explain how what I learned progressed from information → thought → insight → practice → character." },
  { key: "q7", text: "In the last 30 days, my education benefited a real person, organization, or issue in a way I can demonstrate." },
  { key: "q8", text: "When I make mistakes, face failure, or feel pressure, I accept responsibility and seek improvement instead of making excuses." },
];

export const FIVE_QUESTIONS = [
  { key: "whoAmI", label: "Who am I?" },
  { key: "whyLive", label: "Why do I live?" },
  { key: "whatSuccess", label: "What is success?" },
  { key: "abilityFor", label: "What is my ability for?" },
  { key: "accountability", label: "To whom am I accountable?" },
];

export const QURAN_RATINGS = [
  { key: "qr1", label: "Knowledge of God (Ma'rifat-e-Rabb)", text: "I understand my ability, provision, success, and protection not as my effort alone, but as Allah's gift and trust." },
  { key: "qr2", label: "Connection with Allah", text: "Prayer, Quran, remembrance, supplication, gratitude, and trust are practical support in my pressure, fear, and decisions." },
  { key: "qr3", label: "Afterlife orientation (Aakhirat)", text: "When immediate benefit competes with final outcome, I weigh the afterlife as the decisive factor." },
  { key: "qr4", label: "Correcting false standards", text: "Money, relationships, power, outward success, people's praise, and comfort no longer measure my worth or success." },
  { key: "qr5", label: "Self-purification (Tazkiya)", text: "I recognize my dominant desire, weakness, or wrong thinking and deliberately practice against it." },
  { key: "qr6", label: "Character (Kirdar)", text: "I have seen one-year progress in honesty, trust, modesty, patience, respecting rights, and self-control." },
  { key: "qr7", label: "Surah Ta Ha (Ch. 20) lesson", text: "Before calling to God, I understand the need for connection with Allah, prayer, remembrance, afterlife weight, and protection from worldly distraction." },
  { key: "qr8", label: "Surah Ash-Shu'ara (Ch. 26) lesson", text: "Instead of general advice, I identify specific corruption in my environment and understand reform with sincerity and trust." },
  { key: "qr9", label: "Surah An-Naml (Ch. 27) lesson", text: "I link knowledge, strength, platform, or leadership to gratitude, fact-checking, hearing the weak's voice, and guidance toward Allah." },
  { key: "qr10", label: "Surah Al-Qasas (Ch. 28) lesson", text: "Despite weakness and delay, I keep trusting Allah's management while maintaining my effort and responsibility." },
  { key: "qr11", label: "Calling/da'i responsibility", text: "I don't just attend religious programs; I take ongoing responsibility for one person, circle, or cause." },
  { key: "qr12", label: "Community consciousness (Ummah)", text: "I link my degree, time, and relationships not just to personal progress but to family, community, and humanity's welfare." },
];

export const SIX_STAGES = [
  { key: "stage1", title: "Knowledge of God & Connection", whatChanged: "Heart's focus, worship, gratitude, trust" },
  { key: "stage2", title: "Afterlife Priority", whatChanged: "Immediate benefit vs. final outcome awareness" },
  { key: "stage3", title: "Correcting False Standards", whatChanged: "Money, status, power, comfort placed correctly" },
  { key: "stage4", title: "Purification & Character", whatChanged: "Desire cultivation and consistent ethics" },
  { key: "stage5", title: "Caller's Personality", whatChanged: "Connection to God, sincerity, patience, wisdom" },
  { key: "stage6", title: "Community & Humanity", whatChanged: "Ability, time, relationships for collective welfare" },
];

export const SEERAH_STAGES = [
  { key: "seerah1", title: "1. Divine Revelation & Initial Preparation", method: "Iqra (read) = knowledge source; Muzzammil (night vigil) = worship & preparation; Muddassir (clothed one) = rising and warning responsibility", result: "Strong personality & clear mission" },
  { key: "seerah2", title: "2. Trustworthy Individuals Phase", method: "Personal reliability, tested character, individual recognition, one-to-one relationships", result: "Small but responsible initial group" },
  { key: "seerah3", title: "3. Organized Training at Dar-e-Arqam", method: "Quran, companionship, worship, safe space, mutual bonds, ongoing responsibility", result: "Individuals become a trained community" },
  { key: "seerah4", title: "4. Public Preaching & Intellectual Challenge", method: "Tawheed (monotheism), afterlife, equality, rights through evidence and ethics; challenging Mecca's wrong worldview", result: "Truth vs. falsehood become clear; calling becomes public" },
  { key: "seerah5", title: "5. Protecting Faith During Persecution", method: "Patience with changing circumstances, strategic migration (Habasha), practical wisdom", result: "Believers safe; message spreads beyond Mecca" },
  { key: "seerah6", title: "6. Boycott & Internal Unity", method: "Sacrifice, internal cohesion, mutual help, benefiting from fair-minded dissidents", result: "Community holds firm; boycott fails" },
  { key: "seerah7", title: "7. Taif & New Direction Search", method: "After outward failure: mercy, hope, travel, new paths", result: "Mission expands beyond Mecca's boundaries" },
  { key: "seerah8", title: "8. Yasrib Tribes & New Foundation", method: "Sustained contact, Baiat-e-Aqaba (oath of allegiance), Musab's training & migration, local individuals & families ready", result: "Social acceptance and foundation built" },
  { key: "seerah9", title: "9. Migration & Medina-Phase Preparation", method: "Individuals, environment, leadership, time, confidentiality, division of responsibilities, complete planning", result: "Meccan preparation enters the Medina community-building phase" },
];

export const TRANSFORMATION_DIMENSIONS = [
  { key: "trans1", title: "Knowledge & Learning", need: "Convey correct knowledge into thought, insight, and character" },
  { key: "trans2", title: "Quranic Thinking", need: "Decide from God, afterlife, and right standards" },
  { key: "trans3", title: "Personal Character", need: "Stand by principles amid desire, time pressure, and stress" },
  { key: "trans4", title: "Professional Trust", need: "Link ability to halal, justice, and service" },
  { key: "trans5", title: "Seerah Operational Understanding", need: "Understand stages, methods, results, and next foundation" },
  { key: "trans6", title: "Calling Responsibility", need: "Recognize people, provide training, take ongoing work" },
];

export const CURRENT_STATE_OPTIONS = [
  "Information only (facts known)",
  "Thought (understanding developed)",
  "Insight (deeper perception)",
  "Practicing (action taken)",
  "Character (consistent behavior)",
];

export const OBSTACLE_OPTIONS = [
  "Concepts not clear",
  "Quranic thinking hasn't penetrated the heart",
  "Religious and career life feel separate",
  "Time management lacking",
  "Practical method unclear",
  "Consistent practice missing",
  "Environment is overwhelming",
  "Responsibility not defined",
  "Follow-up support lacking",
];
