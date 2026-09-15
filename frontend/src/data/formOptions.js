// Static content for the Youth Quran Seerah Deep Evaluation Form.
// Keeping labels/options here keeps the section components declarative.

export const RATING_LEVELS = [
  { value: 0, desc: "The matter is not clear" },
  { value: 1, desc: "Information — I know the concept" },
  { value: 2, desc: "Insight — My thinking, judgement, or priorities have changed" },
  { value: 3, desc: "Practice — I have begun applying it in real life" },
  { value: 4, desc: "Character — It has become consistent and there is clear evidence" },
];

export const FOUNDATIONAL_QUESTIONS = [
  { key: "q1", text: "My degree is not only preparation for a job; I see my ability as a means of meeting human needs and as an amanah from Allah." },
  { key: "q2", text: "I have clear answers to these five questions: Who am I? Why am I living? What is my success? For whom should I use my abilities? Before whom am I accountable?" },
  { key: "q3", text: "I do not measure success only through marks, salary/package, status, or outward achievement. I also consider halal means, integrity, benefit to others, and the pleasure of Allah." },
  { key: "q4", text: "I can identify at least one ethical issue in my own field and explain the Qur'anic basis for making the correct decision." },
  { key: "q5", text: "My religious and professional life are not separate. I feel accountability before Allah in my class, internship, workplace, business, research, and professional decisions." },
  { key: "q6", text: "I can explain how something I learned moved from information to thought, insight, practice, and character." },
  { key: "q7", text: "During the past 30 days, my education/knowledge has benefited a person, institution, or problem, and I can give a clear example." },
  { key: "q8", text: "When I make a mistake or face failure or pressure, instead of making excuses, I accept my shortcoming, correct it, and start again." },
];

export const FIVE_QUESTIONS = [
  { key: "whoAmI", label: "Who am I?" },
  { key: "whyLive", label: "Why do I live?" },
  { key: "whatSuccess", label: "What is success?" },
  { key: "abilityFor", label: "What is my ability for?" },
  { key: "accountability", label: "To whom am I accountable?" },
];

export const QURAN_RATINGS = [
  { key: "qr1", label: "Ma'rifat-e-Rabb", text: "I see my ability, provision, success, and protection as gifts and amanah from Allah, rather than seeing them only as the result of my own effort." },
  { key: "qr2", label: "Relationship with Allah", text: "Salah, Qur'an, Dhikr, Dua, Shukr, and Tawakkul provide me with practical support during pressure, fear, and decision-making." },
  { key: "qr3", label: "Hereafter Priority", text: "When immediate benefit conflicts with the final outcome, I give decisive weight to the Hereafter." },
  { key: "qr4", label: "Correction of False Standards", text: "Wealth, relationships, power, outward success, praise, and comfort are no longer my final standards of worth and success." },
  { key: "qr5", label: "Tazkiyah", text: "I can identify my dominant desire, weakness, or wrong thought and I consciously practice going against it." },
  { key: "qr6", label: "Character", text: "I can show sustained change during the past year in areas such as truthfulness, amanah, haya, sabr, fulfilling rights, and self-control." },
  { key: "qr7", label: "Surah Ta-Ha", text: "I understand that before undertaking Da'wah, there is a need for a strong relationship with Allah, prayer and Dhikr, weight of the Hereafter, and protection from the attraction of worldly life." },
  { key: "qr8", label: "Surah Ash-Shu'ara", text: "I can diagnose specific forms of corruption in my environment instead of giving only general advice, and I approach reform with sincerity and amanah." },
  { key: "qr9", label: "Surah An-Naml", text: "I can connect knowledge, power, platform, and leadership with gratitude to Allah, verification of information, giving a voice to the weak, and guiding people toward Allah." },
  { key: "qr10", label: "Surah Al-Qasas", text: "Even in situations of weakness and delay, I trust Allah's plan while continuing my preparation and fulfilling my responsibility." },
  { key: "qr11", label: "Da'wah Responsibility", text: "I do not merely attend programmes. I take sustained responsibility for at least one person, group, or beneficial work." },
  { key: "qr12", label: "Ummah Consciousness", text: "I connect my degree, time, and relationships not only with my personal growth but also with the good of my family, the Ummah, and humanity." },
];

export const SIX_STAGES = [
  { key: "stage1", title: "Ma'rifat-e-Rabb and Relationship with Allah", whatChanged: "The heart becomes centred on Allah, worship, gratitude, and Tawakkul" },
  { key: "stage2", title: "Hereafter Priority", whatChanged: "Awareness of the final outcome becomes stronger than immediate benefit" },
  { key: "stage3", title: "Correction of False Standards", whatChanged: "Wealth, status, relationships, power, and comfort are placed in their correct position" },
  { key: "stage4", title: "Tazkiyah and Character", whatChanged: "Desires are trained and ethical behaviour becomes consistent" },
  { key: "stage5", title: "Da'i Personality", whatChanged: "Connection with Allah, sincerity, patience, and wisdom develop" },
  { key: "stage6", title: "Ummah and Humanity", whatChanged: "Responsibility for good is carried through ability, time, and relationships" },
];

export const SEERAH_STAGES = [
  { key: "seerah1", title: "Stage 1 — Revelation, Mission and Initial Preparation", method: "Iqra — Source of knowledge; Muzzammil — Worship and preparation; Muddaththir — Rise, warn, and take responsibility", result: "A strong personality with a clear mission" },
  { key: "seerah2", title: "Stage 2 — Da'wah to Trustworthy Individuals", method: "Personal trust; Previous character; Knowing the individual; One-to-one connection", result: "A small group of responsible initial individuals" },
  { key: "seerah3", title: "Stage 3 — Structured Tarbiyah at Dar al-Arqam", method: "Qur'an; Companionship; Worship; Safe space; Mutual relationships; Sustained responsibility", result: "A trained community" },
  { key: "seerah4", title: "Stage 4 — Public Da'wah and Intellectual Confrontation", method: "Tawheed; Hereafter; Equality; Rights. The wrong mindset of Makkah was challenged through evidence and character", result: "Truth and falsehood became clear, and Da'wah became a public issue" },
  { key: "seerah5", title: "Stage 5 — Protecting Faith and Da'wah under Oppression", method: "Sabr; Protection according to circumstances; Migration to Habasha; Strategy", result: "People were protected and Da'wah moved beyond Makkah" },
  { key: "seerah6", title: "Stage 6 — Boycott and Collective Steadfastness", method: "Sacrifice; Internal unity; Mutual support; Using the conscience of fair-minded people", result: "The group remained intact and the boycott failed" },
  { key: "seerah7", title: "Stage 7 — Ta'if and Search for a New Direction", method: "No revenge after apparent failure; Mercy; Hope; Travel; Searching for new avenues", result: "The mission expanded beyond Makkah" },
  { key: "seerah8", title: "Stage 8 — Tribes of Yathrib and a New Foundation", method: "Sustained contact; Bay'at al-'Aqabah; Training and sending Mus'ab RA; Preparing the local people and families", result: "A social base was established" },
  { key: "seerah9", title: "Stage 9 — Hijrah and Preparation for Madinan Construction", method: "People; Environment; Leadership; Timing; Secrecy; Division of responsibility; Planning", result: "Makki preparation entered the stage of collective construction" },
];

export const TRANSFORMATION_DIMENSIONS = [
  { key: "trans1", title: "Knowledge & Education", need: "I am becoming someone who takes sound knowledge beyond information and moves it toward thought, insight, and character" },
  { key: "trans2", title: "Qur'anic Thought", need: "I make decisions according to my Rabb, the Hereafter, and correct standards of success" },
  { key: "trans3", title: "Personal Character", need: "I remain principled even under desire, time pressure, relationships, and stress" },
  { key: "trans4", title: "Professional Amanah", need: "I connect my skills with halal, justice, and service" },
  { key: "trans5", title: "Practical Understanding of Seerah", need: "I understand the Seerah according to its stages, methods, results, and the foundations required for the next stage" },
  { key: "trans6", title: "Da'wah Responsibility", need: "I identify people, nurture them, and carry sustained responsibility for beneficial work" },
];

export const CURRENT_STATE_OPTIONS = [
  "Information",
  "Thought",
  "Insight",
  "Occasional Practice",
  "Consistent Character",
];

export const OBSTACLE_OPTIONS = [
  "The concept is unclear",
  "Qur'anic thought has not entered my heart",
  "Religion and career remain separate",
  "My time system is lacking",
  "The practical method is unclear",
  "My practice is inconsistent",
  "My environment dominates me",
  "My responsibility is not defined",
  "Follow-up is weak",
];
