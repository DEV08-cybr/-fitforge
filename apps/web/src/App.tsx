import React, { useState } from 'react';
import AIAssistant from './components/ai/AIAssistant';

type Exercise = {
  name: string;
  type: 'Home' | 'Gym' | 'Mobility';
  focus: string;
  difficulty: string;
  description: string;
  equipment: string;
  duration: string;
  steps: string[];
  cues: string[];
};

type RecoveryItem = {
  issue: string;
  signs: string;
  management: string;
  note: string;
};

const homeExercises: Exercise[] = [
  {
    name: 'Bodyweight Squats',
    type: 'Home',
    focus: 'Legs & glutes',
    difficulty: 'Beginner',
    description: 'Build lower-body strength with controlled reps and deep range of motion.',
    equipment: 'Bodyweight',
    duration: '3 sets x 12 reps',
    steps: [
      'Stand with feet shoulder-width apart and toes slightly turned out.',
      'Brace your core and drive your hips back as if sitting into a chair.',
      'Keep your chest tall and knees tracking over your toes as you lower.',
      'Pause briefly at the bottom and push through your whole foot to stand back up.',
      'Repeat with slow, controlled movement and a full range of motion.'
    ],
    cues: [
      'Keep your chest lifted and spine tall throughout the rep.',
      'Do not let your knees cave inward or collapse inward.',
      'Move with control; quality reps matter more than speed.'
    ]
  },
  {
    name: 'Push-ups',
    type: 'Home',
    focus: 'Chest, shoulders, triceps',
    difficulty: 'Beginner',
    description: 'A classic compound movement for upper-body power and core stability.',
    equipment: 'Bodyweight',
    duration: '3 sets x 8–12 reps',
    steps: [
      'Place your hands slightly wider than shoulder width on the floor.',
      'Extend your legs behind you and form a straight line from head to heel.',
      'Lower your chest toward the floor by bending your elbows.',
      'Pause just above the floor and press back up through your palms.',
      'Keep your core tight so your hips do not sag.'
    ],
    cues: [
      'Think about pulling your ribs down and tightening your abs.',
      'Keep elbows at around a 45-degree angle from the body.',
      'Modify by using a wall, bench, or incline if full push-ups are too hard.'
    ]
  },
  {
    name: 'Reverse Lunges',
    type: 'Home',
    focus: 'Balance + quads',
    difficulty: 'Intermediate',
    description: 'Targets legs, glutes, and hips while improving coordination.',
    equipment: 'Bodyweight',
    duration: '3 sets x 10 each side',
    steps: [
      'Stand tall with feet under your hips and hands on your hips or by your sides.',
      'Step one foot back into a long reverse lunge.',
      'Lower until both knees are bent at about 90 degrees.',
      'Press through the front foot and return to standing.',
      'Alternate legs and keep your torso upright through the rep.'
    ],
    cues: [
      'Keep the front knee aligned over the foot and the chest tall.',
      'Move slowly through the lowering phase to improve control.',
      'Stop if you feel significant knee or hip discomfort.'
    ]
  },
  {
    name: 'Plank',
    type: 'Home',
    focus: 'Core and posture',
    difficulty: 'Beginner',
    description: 'Strengthens the torso and supports back stability.',
    equipment: 'Bodyweight',
    duration: '3 rounds x 30–45 sec',
    steps: [
      'Get into a forearm plank position with elbows directly under shoulders.',
      'Lift your body so it forms a straight line from head to heels.',
      'Engage your glutes and tighten your abs to prevent sagging.',
      'Hold the line without letting the hips dip or lift too high.',
      'Relax and reset between rounds.'
    ],
    cues: [
      'Imagine your body is a straight board from head to heels.',
      'Keep your neck neutral by looking slightly ahead.',
      'Breathe steadily and do not hold your breath.'
    ]
  },
  {
    name: 'Mountain Climbers',
    type: 'Home',
    focus: 'Cardio + core',
    difficulty: 'Intermediate',
    description: 'Combines cardio and core training with a quick interval style.',
    equipment: 'Bodyweight',
    duration: '3 rounds x 20 seconds',
    steps: [
      'Start in a high plank position with shoulders over wrists.',
      'Drive one knee toward the chest while keeping your core braced.',
      'Quickly switch legs as if marching in place.',
      'Keep your hips low and your back flat through the movement.',
      'Stay controlled even as the pace increases.'
    ],
    cues: [
      'Move the knees quickly but keep the torso stable and strong.',
      'Avoid letting the hips pike up or the lower back arch.',
      'Use a slower pace if your form breaks down.'
    ]
  },
  {
    name: 'Glute Bridges',
    type: 'Home',
    focus: 'Glutes and hamstrings',
    difficulty: 'Beginner',
    description: 'Great for posterior chain strength and low-back support.',
    equipment: 'Bodyweight',
    duration: '3 sets x 12–15 reps',
    steps: [
      'Lie on your back with knees bent and feet flat on the floor.',
      'Keep your arms by your sides and tighten your core.',
      'Drive through the heels and lift your hips until your body forms a straight line.',
      'Pause at the top with glutes tight and ribs down.',
      'Lower slowly and repeat without dropping the hips.'
    ],
    cues: [
      'Think about squeezing the glutes at the top of each rep.',
      'Do not overextend the lower back; keep the pelvis neutral.',
      'Keep the movement deliberate instead of rushing.'
    ]
  }
];

const gymExercises: Exercise[] = [
  {
    name: 'Barbell Bench Press',
    type: 'Gym',
    focus: 'Chest and triceps',
    difficulty: 'Intermediate',
    description: 'A compound pushing movement for upper-body strength and muscle mass.',
    equipment: 'Barbell + bench',
    duration: '4 sets x 6–8 reps',
    steps: [
      'Lie flat on the bench and plant your feet firmly on the floor.',
      'Grip the bar slightly wider than shoulder width and unrack it.',
      'Lower the bar slowly toward the mid-chest while keeping your shoulder blades back.',
      'Press the bar upward until your arms are fully extended.',
      'Keep your back slightly arched and glutes on the bench throughout.'
    ],
    cues: [
      'Keep the bar in line with your mid-chest as you lower it.',
      'Do not bounce the bar off your chest.',
      'Control the lowering phase to keep the movement safe and effective.'
    ]
  },
  {
    name: 'Deadlift',
    type: 'Gym',
    focus: 'Posterior chain',
    difficulty: 'Advanced',
    description: 'Builds full-body power and strengthens the back, glutes, and hamstrings.',
    equipment: 'Barbell',
    duration: '5 sets x 3–5 reps',
    steps: [
      'Stand with the bar close to your shins and feet hip-width apart.',
      'Brace your core, hinge at the hips, and grip the bar firmly.',
      'Drive through the floor and extend your knees and hips together.',
      'Stand tall with glutes engaged and bar close to the body.',
      'Lower the bar with control back to the floor.'
    ],
    cues: [
      'Keep your back flat and chest up while lifting.',
      'Avoid rounding the lower back at any point in the rep.',
      'Use a slow, controlled lift before going heavy.'
    ]
  },
  {
    name: 'Lat Pulldown',
    type: 'Gym',
    focus: 'Back and biceps',
    difficulty: 'Beginner',
    description: 'Improves upper-back strength and shoulder control.',
    equipment: 'Cable machine',
    duration: '4 sets x 10–12 reps',
    steps: [
      'Adjust the seat and grab the bar with a grip slightly wider than shoulder-width.',
      'Sit tall with your chest lifted and shoulders down.',
      'Pull the bar down toward your upper chest while squeezing your shoulder blades.',
      'Pause briefly and control the return to the starting position.',
      'Repeat with smooth movement and no swinging.'
    ],
    cues: [
      'Pull the bar with your elbows rather than with your hands alone.',
      'Keep your chest proud and avoid leaning too far back.',
      'Build tension through the whole movement instead of jerking.'
    ]
  },
  {
    name: 'Leg Press',
    type: 'Gym',
    focus: 'Quads and glutes',
    difficulty: 'Beginner',
    description: 'A controlled lower-body strength movement for large muscle groups.',
    equipment: 'Leg press machine',
    duration: '4 sets x 8–12 reps',
    steps: [
      'Sit in the machine with your back supported and feet hip-width apart.',
      'Lower the platform by bending the knees and keeping your hips tucked.',
      'Stop when your knees are at a safe range and your heels stay planted.',
      'Drive through the whole foot to extend the legs and return to start.',
      'Repeat with a controlled tempo.'
    ],
    cues: [
      'Keep your knees tracking in line with your toes.',
      'Avoid the platform dropping too deep if you feel knee discomfort.',
      'Pause at the top to avoid locking out aggressively.'
    ]
  },
  {
    name: 'Dumbbell Shoulder Press',
    type: 'Gym',
    focus: 'Shoulders and triceps',
    difficulty: 'Intermediate',
    description: 'Develops shoulder stability and overhead pressing strength.',
    equipment: 'Dumbbells',
    duration: '4 sets x 8–10 reps',
    steps: [
      'Stand tall with a dumbbell in each hand at shoulder height.',
      'Brace your core and keep your ribs down as you press overhead.',
      'Extend the arms until they are nearly straight but not locked out.',
      'Lower the dumbbells back to shoulder height with control.',
      'Keep your torso steady the whole time.'
    ],
    cues: [
      'Keep your glutes and abs tight to support the lift.',
      'Do not arch your lower back to complete the rep.',
      'Move the dumbbells in a controlled arc rather than a jerky path.'
    ]
  },
  {
    name: 'Cable Rows',
    type: 'Gym',
    focus: 'Back and traps',
    difficulty: 'Beginner',
    description: 'Supports posture and rear-delt development.',
    equipment: 'Cable row machine',
    duration: '4 sets x 10–12 reps',
    steps: [
      'Sit at the row machine with your chest up and knees slightly bent.',
      'Grab the handle with a neutral or overhand grip.',
      'Pull the handle toward your lower ribs while squeezing the shoulder blades together.',
      'Pause and return the weight slowly to the start.',
      'Keep your torso stable and avoid leaning too far back.'
    ],
    cues: [
      'Lead the movement with your elbows rather than your wrists.',
      'Keep your shoulders down and away from your ears.',
      'Do not jerk the weight or use momentum.'
    ]
  }
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

const highlightCards = [
  {
    title: 'Home Workouts',
    text: 'Bodyweight, mobility, cardio, and circuit training you can do anywhere.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Gym Training',
    text: 'Barbell, dumbbell, and cable work for strength, hypertrophy, and power.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Recovery Care',
    text: 'Cramps, soreness treatment, and injury prevention routines.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'General Wellness',
    text: 'Hydration, rest, and smart medication guidance for active lifestyles.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80',
  },
];

const programPillars = [
  { label: 'Strength', value: 'Build power', text: 'Compound lifts, leg drives, and upper-body progression.' },
  { label: 'Mobility', value: 'Recover faster', text: 'Stretching and movement work to reduce tightness and strain.' },
  { label: 'Consistency', value: 'Stay sharp', text: 'Simple routines that fit your week and your schedule.' },
];

const trainingModes = [
  { name: 'Home Body Flow', detail: '45-minute circuit: squats, push-ups, mobility, and core work.' },
  { name: 'Gym Power Lift', detail: 'Strength-first block with bench, row, squat, and deadlift support.' },
  { name: 'Recovery Reset', detail: 'Light movement, stretch work, and gentle exercises for sore joints.' },
];

const testimonials = [
  { quote: 'The plan feels realistic and motivating. I can train at home or at the gym without overthinking it.', name: 'Aisha', role: 'Fitness beginner' },
  { quote: 'It keeps recovery in the loop, which is what made the difference in my training consistency.', name: 'Rohan', role: 'Gym regular' },
  { quote: 'The injury notes are practical and honest, especially for common issues like cramps and shoulder strain.', name: 'Mila', role: 'Athletic coach' },
];

const App: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise>(homeExercises[0]);

  return (
    <main className="fitforge-shell">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .fitforge-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(96, 165, 250, 0.22), transparent 30%),
            radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.28), transparent 30%),
            linear-gradient(180deg, #060d18 0%, #0d1f33 38%, #f3f7fb 100%);
          color: #e2e8f0;
          font-family: 'Segoe UI', Arial, sans-serif;
          padding: 28px 20px 72px;
        }
        .fitforge-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 28px;
          align-items: center;
          margin-bottom: 36px;
          padding: 14px 0 10px;
        }
        .eyebrow {
          display: inline-block;
          letter-spacing: 0.28rem;
          text-transform: uppercase;
          margin: 0;
          color: #7dd3fc;
          font-weight: 800;
          font-size: 0.78rem;
          background: rgba(125, 211, 252, 0.12);
          border: 1px solid rgba(125, 211, 252, 0.28);
          border-radius: 999px;
          padding: 10px 14px;
        }
        .hero h1 {
          font-size: clamp(2.7rem, 6vw, 4.3rem);
          line-height: 0.96;
          margin: 18px 0 12px;
          color: #f8fafc;
          letter-spacing: -0.04em;
        }
        .hero p {
          max-width: 720px;
          font-size: 1.08rem;
          line-height: 1.8;
          color: #d9e6f6;
          margin: 0;
        }
        .cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 22px;
        }
        .primary-btn,
        .secondary-btn {
          border: none;
          border-radius: 999px;
          padding: 12px 18px;
          font-size: 0.96rem;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }
        .primary-btn {
          background: linear-gradient(135deg, #38bdf8, #a78bfa);
          color: #04141d;
          box-shadow: 0 10px 22px rgba(96, 165, 250, 0.3);
        }
        .secondary-btn {
          background: rgba(15, 23, 42, 0.5);
          color: #e2e8f0;
          border: 1px solid rgba(125, 211, 252, 0.25);
        }
        .primary-btn:hover,
        .secondary-btn:hover {
          transform: translateY(-2px);
        }
        .stat-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(120px, 1fr));
          gap: 12px;
          margin-top: 28px;
          max-width: 520px;
        }
        .stat-box {
          background: rgba(15, 23, 42, 0.48);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          padding: 12px 14px;
        }
        .stat-box strong {
          display: block;
          font-size: 1.4rem;
          color: #f8fafc;
        }
        .stat-box span {
          color: #cbd5e1;
          font-size: 0.76rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
        }
        .hero-visual {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .visual-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(18px);
          opacity: 0.45;
          animation: float 8s ease-in-out infinite;
        }
        .visual-orb.one { width: 260px; height: 260px; background: rgba(59,130,246,0.42); top: 6%; left: 8%; }
        .visual-orb.two { width: 220px; height: 220px; background: rgba(168,85,247,0.36); bottom: 12%; right: 12%; animation-delay: 1.5s; }
        .hero-card {
          position: relative;
          width: min(100%, 520px);
          min-height: 420px;
          background: linear-gradient(160deg, rgba(131, 92, 255, 0.88) 0%, rgba(79, 70, 229, 0.82) 100%);
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 28px 60px rgba(20, 27, 60, 0.45);
          overflow: hidden;
          animation: liftIn 0.7s ease both;
        }
        .hero-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
        }
        .hero-photo {
          position: absolute;
          inset: 18px 18px 90px 18px;
          background-size: cover;
          background-position: center;
          border-radius: 22px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14);
        }
        .floating-chip {
          position: absolute;
          right: 24px;
          bottom: 24px;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 16px;
          padding: 12px 14px;
          color: #f8fafc;
          backdrop-filter: blur(8px);
          animation: float 8s ease-in-out infinite;
        }
        .floating-chip strong { display: block; font-size: 0.9rem; }
        .floating-chip span { color: #dbeafe; font-size: 0.75rem; }
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 10px 16px 18px;
          margin-bottom: 14px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: 0.08rem;
          text-transform: uppercase;
        }
        .brand-mark {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: linear-gradient(135deg, #38bdf8, #8b5cf6);
          display: grid;
          place-items: center;
          font-size: 1rem;
          box-shadow: 0 10px 18px rgba(96, 165, 250, 0.25);
        }
        .topnav {
          display: flex;
          gap: 24px;
          font-size: 0.9rem;
          color: #dbeafe;
          flex-wrap: wrap;
        }
        .topnav a {
          color: #dbeafe;
          text-decoration: none;
          opacity: 0.82;
        }
        .nav-btn {
          border: 1px solid rgba(125, 211, 252, 0.24);
          background: rgba(15, 23, 42, 0.55);
          color: #f8fafc;
          border-radius: 999px;
          padding: 10px 16px;
          font-weight: 700;
        }
        .usp-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(180px, 1fr));
          gap: 16px;
          margin-bottom: 26px;
        }
        .usp-item {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 18px;
          padding: 18px 16px;
          backdrop-filter: blur(8px);
        }
        .usp-item .label {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.12rem;
          text-transform: uppercase;
          color: #7dd3fc;
          margin-bottom: 8px;
        }
        .usp-item strong {
          display: block;
          font-size: 1.2rem;
          color: #f8fafc;
          margin-bottom: 6px;
        }
        .usp-item span { color: #dbeafe; line-height: 1.6; }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-bottom: 42px;
        }
        .feature-card {
          position: relative;
          overflow: hidden;
          min-height: 240px;
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(148, 163, 184, 0.22);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: fadeUp 0.7s ease both;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px rgba(15, 23, 42, 0.24);
        }
        .feature-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.72) saturate(1.1);
          transform: scale(1.05);
        }
        .feature-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(2, 6, 23, 0.18), rgba(2, 6, 23, 0.78));
        }
        .feature-copy {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          z-index: 1;
        }
        .feature-copy h3 {
          margin: 0 0 8px;
          color: #f8fafc;
          font-size: 1.2rem;
        }
        .feature-copy p {
          margin: 0;
          color: #d9e6f6;
          line-height: 1.6;
          font-size: 0.92rem;
        }
        section > h2 {
          color: #f8fafc;
          margin: 0 0 18px;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
        }
        .showcase-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 20px;
          margin: 10px 0 38px;
        }
        .showcase-main,
        .showcase-side {
          background: rgba(15, 23, 42, 0.76);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 26px;
          padding: 22px;
          box-shadow: 0 18px 40px rgba(15,23,42,0.12);
        }
        .showcase-main {
          position: relative;
          overflow: hidden;
        }
        .showcase-main::after {
          content: '';
          position: absolute;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(96,165,250,0.35), transparent 70%);
          right: -40px;
          top: -30px;
        }
        .showcase-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .tag {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 8px 12px;
          background: rgba(56, 189, 248, 0.12);
          color: #7dd3fc;
          border: 1px solid rgba(125, 211, 252, 0.2);
          font-size: 0.75rem;
          letter-spacing: 0.08rem;
          text-transform: uppercase;
          font-weight: 700;
        }
        .mini-score {
          font-size: 0.8rem;
          color: #dbeafe;
          opacity: 0.9;
        }
        .mode-list {
          display: grid;
          gap: 12px;
        }
        .mode-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: rgba(15,23,42,0.42);
          border: 1px solid rgba(148,163,184,0.15);
          border-radius: 18px;
          padding: 16px 18px;
        }
        .mode-text strong {
          display: block;
          color: #f8fafc;
          margin-bottom: 4px;
        }
        .mode-text span {
          color: #d9e6f6;
          line-height: 1.6;
          font-size: 0.9rem;
        }
        .mode-badge {
          min-width: 92px;
          text-align: center;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(56,189,248,0.2), rgba(168,85,247,0.2));
          color: #dbeafe;
          border: 1px solid rgba(125,211,252,0.2);
          padding: 8px 10px;
          font-weight: 700;
        }
        .metric-list {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }
        .metric-item {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(148,163,184,0.15);
        }
        .metric-item:last-child { border-bottom: none; }
        .metric-item span { color: #dbeafe; }
        .metric-item strong { color: #f8fafc; }
        .showcase-side {
          display: grid;
          align-content: center;
          gap: 12px;
        }
        .small-panel {
          background: linear-gradient(180deg, rgba(18, 35, 54, 0.9), rgba(16,24,40,0.82));
          border: 1px solid rgba(125, 211, 252, 0.2);
          border-radius: 20px;
          padding: 18px;
        }
        .small-panel strong {
          display: block;
          color: #f8fafc;
          font-size: 1.5rem;
          margin-top: 8px;
        }
        .small-panel span {
          color: #dbeafe;
          line-height: 1.7;
        }
        .exercise-grid, .recovery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 18px;
        }
        .exercise-card, .recovery-card {
          border-radius: 22px;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.76);
          border: 1px solid rgba(148, 163, 184, 0.18);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
          transition: transform 0.2s ease, border-color 0.2s ease;
          cursor: pointer;
        }
        .exercise-card:hover,
        .exercise-card.active {
          transform: translateY(-4px);
          border-color: rgba(125, 211, 252, 0.55);
        }
        .exercise-card.active {
          box-shadow: 0 22px 42px rgba(56, 189, 248, 0.12);
        }
        .exercise-body {
          padding: 18px;
        }
        .exercise-topline {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }
        .exercise-name { color: #a5f3fc; font-weight: 700; }
        .exercise-type {
          color: #fbbf24;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.06rem;
          text-transform: uppercase;
        }
        .exercise-card p {
          margin: 8px 0;
          color: #dfeaf9;
          line-height: 1.7;
        }
        .exercise-detail-panel {
          margin-top: 18px;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.76), rgba(9, 14, 25, 0.84));
          border: 1px solid rgba(125, 211, 252, 0.2);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 18px 40px rgba(15,23,42,0.12);
        }
        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 18px;
        }
        .detail-header h3 {
          margin: 0;
          color: #f8fafc;
          font-size: clamp(1.5rem, 2vw, 2.1rem);
        }
        .detail-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .detail-pill {
          font-size: 0.72rem;
          border-radius: 999px;
          padding: 6px 10px;
          background: rgba(125, 211, 252, 0.1);
          color: #dbeafe;
          border: 1px solid rgba(125, 211, 252, 0.2);
          letter-spacing: 0.06rem;
          text-transform: uppercase;
        }
        .detail-body {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 20px;
        }
        .detail-steps,
        .detail-tips {
          background: rgba(15,23,42,0.4);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 18px;
          padding: 18px;
        }
        .detail-steps h4,
        .detail-tips h4 {
          margin: 0 0 12px;
          color: #f8fafc;
          font-size: 1.1rem;
        }
        .detail-steps ol {
          margin: 0;
          padding-left: 18px;
          color: #dbeafe;
          line-height: 1.9;
        }
        .detail-tips ul {
          margin: 0;
          padding-left: 18px;
          color: #dbeafe;
          line-height: 1.8;
        }
        .review-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin: 16px 0 40px;
        }
        .review-card {
          background: rgba(255,255,255,0.96);
          color: #0f172a;
          border-radius: 22px;
          padding: 20px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          box-shadow: 0 18px 40px rgba(15,23,42,0.12);
        }
        .review-card p {
          margin: 0 0 16px;
          line-height: 1.8;
          color: #334155;
        }
        .review-author {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .review-author strong { color: #0f172a; }
        .review-author span { color: #475569; font-size: 0.85rem; }
        .recovery-card {
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          padding: 20px;
        }
        .recovery-card h3 { margin: 0 0 12px; }
        .recovery-card p { color: #1f2937; line-height: 1.7; }
        .med-card {
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 22px;
          padding: 24px;
          margin-top: 37px;
        }
        .med-card ul {
          margin: 0;
          padding-left: 18px;
          color: #dbeafe;
          line-height: 2;
        }
        .ai-panel {
          margin-top: 42px;
          background: rgba(15, 23, 42, 0.74);
          border-radius: 24px;
          padding: 24px;
          border: 1px solid rgba(125, 211, 252, 0.25);
          box-shadow: 0 22px 48px rgba(15, 23, 42, 0.12);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes liftIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; }
          .hero-visual { min-height: 340px; }
          .showcase-grid, .detail-body { grid-template-columns: 1fr; }
          .usp-strip { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="fitforge-container">
        <div className="topbar">
          <div className="brand">
            <span className="brand-mark">F</span>
            <span>FitForge</span>
          </div>
          <nav className="topnav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#exercises">Exercises</a>
            <a href="#recovery">Recovery</a>
            <a href="#coach">AI Coach</a>
          </nav>
          <button className="nav-btn">Free for everyone</button>
        </div>

        <header className="hero" id="home">
          <div>
            <span className="eyebrow">Virtual Gym Coach</span>
            <h1>Train smarter, recover stronger, and move better</h1>
            <p>
              FitForge is a free personal training guide for everyone. Learn home workouts, gym routines, exercise form cues, and recovery support without paying for a subscription.
            </p>
            <div className="cta-row">
              <button className="primary-btn">Start free</button>
              <button className="secondary-btn">Ask AI coach</button>
            </div>
            <div className="stat-row">
              <div className="stat-box"><strong>100%</strong><span>Free access</span></div>
              <div className="stat-box"><strong>12+</strong><span>Guided moves</span></div>
              <div className="stat-box"><strong>24/7</strong><span>Coach support</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orb one" />
            <div className="visual-orb two" />
            <div className="hero-card">
              <div
                className="hero-photo"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div className="floating-chip">
                <strong>Free coach</strong>
                <span>Home + gym guidance</span>
              </div>
            </div>
          </div>
        </header>

        <section className="usp-strip" aria-label="Key benefits">
          {programPillars.map((pillar) => (
            <div key={pillar.label} className="usp-item">
              <span className="label">{pillar.label}</span>
              <strong>{pillar.value}</strong>
              <span>{pillar.text}</span>
            </div>
          ))}
        </section>

        <section className="feature-grid">
          {highlightCards.map((card) => (
            <article key={card.title} className="feature-card">
              <div
                className="feature-image"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <div className="feature-overlay" />
              <div className="feature-copy">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="showcase-grid">
          <div className="showcase-main">
            <div className="showcase-header">
              <span className="tag">Smart training</span>
              <span className="mini-score">Built for real consistency</span>
            </div>
            <div className="mode-list">
              {trainingModes.map((mode) => (
                <div key={mode.name} className="mode-item">
                  <div className="mode-text">
                    <strong>{mode.name}</strong>
                    <span>{mode.detail}</span>
                  </div>
                  <span className="mode-badge">Plan</span>
                </div>
              ))}
            </div>
            <div className="metric-list">
              <div className="metric-item"><span>Recovery focus</span><strong>Weekly reset</strong></div>
              <div className="metric-item"><span>Exercise balance</span><strong>Home + gym</strong></div>
              <div className="metric-item"><span>Coach support</span><strong>AI guidance</strong></div>
            </div>
          </div>

          <div className="showcase-side">
            <div className="small-panel">
              <span className="tag">Progress</span>
              <strong>8/10</strong>
              <span>Performance consistency score for a realistic training rhythm.</span>
            </div>
            <div className="small-panel">
              <span className="tag">Recovery</span>
              <strong>4x</strong>
              <span>Focused routines for cramps, strains, and everyday gym discomfort.</span>
            </div>
          </div>
        </section>

        <section id="exercises">
          <h2>Virtual trainer exercise library</h2>
          <div className="exercise-grid">
            {[...homeExercises, ...gymExercises].map((exercise) => (
              <article
                key={exercise.name}
                className={`exercise-card ${selectedExercise.name === exercise.name ? 'active' : ''}`}
                onClick={() => setSelectedExercise(exercise)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedExercise(exercise);
                  }
                }}
              >
                <div className="exercise-body">
                  <div className="exercise-topline">
                    <span className="exercise-name">{exercise.name}</span>
                    <span className="exercise-type">{exercise.type}</span>
                  </div>
                  <p><strong>Focus:</strong> {exercise.focus}</p>
                  <p><strong>Level:</strong> {exercise.difficulty}</p>
                  <p>{exercise.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="exercise-detail-panel">
            <div className="detail-header">
              <div>
                <h3>{selectedExercise.name}</h3>
                <div className="detail-badges">
                  <span className="detail-pill">{selectedExercise.type}</span>
                  <span className="detail-pill">{selectedExercise.difficulty}</span>
                  <span className="detail-pill">{selectedExercise.duration}</span>
                </div>
              </div>
              <span className="detail-pill">{selectedExercise.equipment}</span>
            </div>

            <div className="detail-body">
              <div className="detail-steps">
                <h4>How to do it</h4>
                <ol>
                  {selectedExercise.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="detail-tips">
                <h4>Coach cues</h4>
                <ul>
                  {selectedExercise.cues.map((cue) => (
                    <li key={cue}>{cue}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="review-grid">
          {testimonials.map((review) => (
            <article key={review.name} className="review-card">
              <p>“{review.quote}”</p>
              <div className="review-author">
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </div>
            </article>
          ))}
        </section>

        <section id="recovery" style={{ marginTop: '38px' }}>
          <h2>Common gym injuries and recovery guidance</h2>
          <div className="recovery-grid">
            {recoveryGuide.map((item) => (
              <article key={item.issue} className="recovery-card">
                <h3>{item.issue}</h3>
                <p><strong>Signs:</strong> {item.signs}</p>
                <p><strong>Management:</strong> {item.management}</p>
                <p><strong>Important:</strong> {item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="med-card">
          <h2 style={{ marginTop: 0, color: '#f8fafc' }}>Medication and care notes</h2>
          <ul>
            {medicationNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <section className="ai-panel" id="coach">
          <h2 style={{ marginTop: 0, marginBottom: '16px' }}>FitForge AI Coach</h2>
          <AIAssistant />
        </section>
      </div>
    </main>
  );
};

export default App;
