import React from 'react';
import AIAssistant from './components/ai/AIAssistant';

type Exercise = {
  name: string;
  type: 'Home' | 'Gym' | 'Mobility';
  focus: string;
  difficulty: string;
  description: string;
};

type RecoveryItem = {
  issue: string;
  signs: string;
  management: string;
  note: string;
};

const homeExercises: Exercise[] = [
  { name: 'Bodyweight Squats', type: 'Home', focus: 'Legs & glutes', difficulty: 'Beginner', description: 'Build lower-body strength with controlled reps and deep range of motion.' },
  { name: 'Push-ups', type: 'Home', focus: 'Chest, shoulders, triceps', difficulty: 'Beginner', description: 'A classic compound movement for upper-body power and core stability.' },
  { name: 'Reverse Lunges', type: 'Home', focus: 'Balance + quads', difficulty: 'Intermediate', description: 'Targets legs, glutes, and hips while improving coordination.' },
  { name: 'Plank', type: 'Home', focus: 'Core and posture', difficulty: 'Beginner', description: 'Strengthens the torso and supports back stability.' },
  { name: 'Mountain Climbers', type: 'Home', focus: 'Cardio + core', difficulty: 'Intermediate', description: 'Combines cardio and core training with a quick interval style.' },
  { name: 'Glute Bridges', type: 'Home', focus: 'Glutes and hamstrings', difficulty: 'Beginner', description: 'Great for posterior chain strength and low-back support.' },
];

const gymExercises: Exercise[] = [
  { name: 'Barbell Bench Press', type: 'Gym', focus: 'Chest and triceps', difficulty: 'Intermediate', description: 'A compound pushing movement for upper-body strength and muscle mass.' },
  { name: 'Deadlift', type: 'Gym', focus: 'Posterior chain', difficulty: 'Advanced', description: 'Builds full-body power and strengthens the back, glutes, and hamstrings.' },
  { name: 'Lat Pulldown', type: 'Gym', focus: 'Back and biceps', difficulty: 'Beginner', description: 'Improves upper-back strength and shoulder control.' },
  { name: 'Leg Press', type: 'Gym', focus: 'Quads and glutes', difficulty: 'Beginner', description: 'A controlled lower-body strength movement for large muscle groups.' },
  { name: 'Dumbbell Shoulder Press', type: 'Gym', focus: 'Shoulders and triceps', difficulty: 'Intermediate', description: 'Develops shoulder stability and overhead pressing strength.' },
  { name: 'Cable Rows', type: 'Gym', focus: 'Back and traps', difficulty: 'Beginner', description: 'Supports posture and rear-delt development.' },
];

const recoveryGuide: RecoveryItem[] = [
  {
    issue: 'Muscle Cramps',
    signs: 'Sudden tightness, burning feeling, or involuntary contraction in the calf, hamstring, or foot.',
    management: 'Hydrate, replace electrolytes, stretch gently, and rest the muscle. Massage and warm compresses can help.',
    note: 'For frequent cramps, review hydration, sodium intake, and exercise intensity with a clinician or trainer.'
  },
  {
    issue: 'Common Gym Strain',
    signs: 'Sharp pain during lifting, localized tenderness, or stiffness after training.',
    management: 'Stop the provoking exercise, apply ice or heat as appropriate, and use light movement to recover before returning.',
    note: 'Avoid “pushing through” pain. Persistent pain needs a medical review.'
  },
  {
    issue: 'Shoulder Irritation',
    signs: 'Pain at the front or side of the shoulder, especially with pressing or overhead lifts.',
    management: 'Reduce overhead volume, focus on mobility and scapular control, and avoid painful ranges.',
    note: 'Rotator cuff irritation should be assessed if pain persists or affects daily movement.'
  },
  {
    issue: 'Knee Pain',
    signs: 'Pain around the kneecap or instability while squatting or lunging.',
    management: 'Use controlled range-of-motion, strengthen glutes and quads, and avoid deep painful positions.',
    note: 'Persistent knee pain, locking, or swelling warrants a clinician evaluation.'
  },
];

const medicationNotes = [
  'General pain relief products may help with short-term soreness when used as directed, but do not treat the underlying cause.',
  'For cramps, hydration and electrolyte support are usually more helpful than heavy medication.',
  'For joint or muscle injury, focus on rest, compression, elevation, and medical review if the pain is severe or ongoing.',
  'If you have a condition like high blood pressure, kidney issues, or take blood thinners, ask a healthcare professional before using pain medication.',
];

const App: React.FC = () => {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #06131f 0%, #102544 45%, #f5f7fb 100%)',
      color: '#e2e8f0',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      padding: '32px 20px 72px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '32px' }}>
          <p style={{ letterSpacing: '0.28rem', textTransform: 'uppercase', margin: 0, color: '#7dd3fc', fontWeight: 700 }}>FitForge</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '12px 0 8px', color: '#f8fafc' }}>Strength, recovery, and home-ready training</h1>
          <p style={{ maxWidth: '760px', fontSize: '1.08rem', lineHeight: 1.7, color: '#cbd5e1' }}>
            A complete local fitness guide featuring home workouts, gym routines, and common recovery care for cramps, strains, shoulder irritation, and everyday gym injuries.
          </p>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '36px' }}>
          {[
            ['Home Workouts', 'Bodyweight, mobility, cardio, and circuit training you can do anywhere'],
            ['Gym Training', 'Barbell, dumbbell, and cable work for strength, hypertrophy, and power'],
            ['Recovery Care', 'Cramps, soreness treatment, and injury prevention routines'],
            ['General Wellness', 'Hydration, rest, and smart medication guidance for active lifestyles'],
          ].map(([title, text]) => (
            <div key={title} style={{ background: 'rgba(15, 23, 42, 0.62)', border: '1px solid rgba(148, 163, 184, 0.22)', borderRadius: '18px', padding: '20px' }}>
              <h3 style={{ margin: '0 0 10px', color: '#f8fafc' }}>{title}</h3>
              <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#f8fafc', marginBottom: '18px' }}>Home exercise list</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {homeExercises.map((exercise) => (
              <article key={exercise.name} style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '18px', padding: '18px', border: '1px solid rgba(125, 211, 252, 0.25)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                  <strong style={{ color: '#7dd3fc' }}>{exercise.name}</strong>
                  <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700 }}>{exercise.type}</span>
                </div>
                <p style={{ margin: '6px 0', color: '#cbd5e1' }}><strong>Focus:</strong> {exercise.focus}</p>
                <p style={{ margin: '6px 0', color: '#cbd5e1' }}><strong>Level:</strong> {exercise.difficulty}</p>
                <p style={{ margin: 0, color: '#e2e8f0', lineHeight: 1.6 }}>{exercise.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#f8fafc', marginBottom: '18px' }}>Gym exercise list</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {gymExercises.map((exercise) => (
              <article key={exercise.name} style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '18px', padding: '18px', border: '1px solid rgba(96, 165, 250, 0.25)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                  <strong style={{ color: '#93c5fd' }}>{exercise.name}</strong>
                  <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700 }}>{exercise.type}</span>
                </div>
                <p style={{ margin: '6px 0', color: '#cbd5e1' }}><strong>Focus:</strong> {exercise.focus}</p>
                <p style={{ margin: '6px 0', color: '#cbd5e1' }}><strong>Level:</strong> {exercise.difficulty}</p>
                <p style={{ margin: 0, color: '#e2e8f0', lineHeight: 1.6 }}>{exercise.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#f8fafc', marginBottom: '18px' }}>Common gym injuries and recovery guidance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {recoveryGuide.map((item) => (
              <article key={item.issue} style={{ background: '#f8fafc', color: '#0f172a', borderRadius: '18px', padding: '20px', boxShadow: '0 14px 32px rgba(15,23,42,0.12)' }}>
                <h3 style={{ marginTop: 0, marginBottom: '10px', color: '#0f172a' }}>{item.issue}</h3>
                <p style={{ margin: '8px 0', lineHeight: 1.7 }}><strong>Signs:</strong> {item.signs}</p>
                <p style={{ margin: '8px 0', lineHeight: 1.7 }}><strong>Management:</strong> {item.management}</p>
                <p style={{ margin: '8px 0 0', lineHeight: 1.7, color: '#475569' }}><strong>Important:</strong> {item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ background: 'rgba(15, 23, 42, 0.72)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(148,163,184,0.24)' }}>
          <h2 style={{ color: '#f8fafc', marginTop: 0 }}>Medication and care notes</h2>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#dbeafe', lineHeight: 2 }}>
            {medicationNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: '42px', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '22px', padding: '24px', border: '1px solid rgba(125, 211, 252, 0.25)' }}>
          <h2 style={{ color: '#f8fafc', marginTop: 0, marginBottom: '16px' }}>FitForge AI Coach</h2>
          <AIAssistant />
        </section>
      </div>
    </main>
  );
};

export default App;