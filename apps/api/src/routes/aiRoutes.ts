import { Router } from 'express';
import env from '../config/env';

const aiRoutes = Router();
const HUGGINGFACE_API_TOKEN = env.HUGGINGFACE_API_TOKEN || process.env.HUGGINGFACE_API_TOKEN || process.env.HF_TOKEN || '';
const HUGGINGFACE_MODEL = env.HUGGINGFACE_MODEL || process.env.HUGGINGFACE_MODEL || process.env.HF_MODEL || 'aion-labs/aion-2.0';

const generalAnswer = (message: string) => {
  const text = message.toLowerCase();
  const goals = {
    weightloss: text.includes('lose weight') || text.includes('fat loss') || text.includes('weight loss'),
    muscle: text.includes('build muscle') || text.includes('gain muscle') || text.includes('hypertrophy'),
    strength: text.includes('get stronger') || text.includes('strength') || text.includes('power'),
    endurance: text.includes('endurance') || text.includes('cardio') || text.includes('stamina'),
    beginner: text.includes('beginner') || text.includes('new to gym') || text.includes('first time')
  };

  const goal = Object.entries(goals).find(([, v]) => v)?.[0] ?? 'general fitness';

  const goalAdvice: Record<string, string> = {
    weightloss: 'Use a mix of strength training and moderate cardio, aim for 3–5 sessions/week, and keep recovery and sleep consistent.',
    muscle: 'Prioritize progressive overload, 6–10 reps for most compound lifts, and enough protein and sleep to recover and grow.',
    strength: 'Focus on compound lifts, slowly increase weight, and keep your form strict before adding intensity.',
    endurance: 'Use interval cardio, steady-state zones, and full-body workouts that keep your heart rate elevated without overtraining.',
    'general fitness': 'Use a balanced plan with strength work, mobility, and cardio, then progress gradually to avoid burnout or injury.'
  };

  const nextStep = text.includes('pain') || text.includes('injury') || text.includes('hurt')
    ? 'Reduce volume, avoid the painful range, and rest the affected area; if pain persists, get a clinician check.'
    : text.includes('cramp')
      ? 'Hydrate, replace electrolytes, stretch gently, and keep movement light until the muscle relaxes.'
      : 'Keep form clean, stay consistent, and increase intensity gradually rather than all at once.';

  return `For that goal, ${goalAdvice[goal] || goalAdvice['general fitness']} ${nextStep}`;
};

const buildFallbackAiResponse = (message: string) => {
  const text = message.toLowerCase();

  if (text.includes('who are you') || text.includes('who r u') || text.includes('who are u') || text.includes('what are you') || text.includes('your name')) {
    return {
      answer: 'I am FitForge AI, your fitness coach for home workouts, gym training, recovery, cramps, and common injuries. I can help with safe training advice and prevention guidance.',
      suggestions: ['Give me a home workout plan', 'What should I do for cramps?', 'Best gym routine for strength'],
    };
  }

  if (text.includes('which model') || text.includes('what model') || text.includes('model are you using') || text.includes('hf model') || text.includes('ai model')) {
    const modelName = HUGGINGFACE_MODEL || 'local fitness coaching engine';
    return {
      answer: `I am using the FitForge coaching layer. If a Hugging Face token is configured, the app can use the model ${modelName}; otherwise it runs the built-in fitness guidance engine locally for safe home and gym advice.`,
      suggestions: ['Who are you?', 'Give me a home workout plan', 'How do I avoid injuries?'],
    };
  }

  if (text.includes('cramp') || text.includes('cramps')) {
    return {
      answer: 'For cramps, hydrate well, replace electrolytes, and gently stretch the tight muscle. Use a warm compress and avoid intense activity until the cramp eases. If cramps keep happening, review your hydration, sodium, and exercise intensity.',
      suggestions: ['How do I prevent cramps?', 'What should I do after a gym strain?', 'Give me a home workout routine'],
    };
  }

  if (text.includes('shoulder') || text.includes('rotator') || text.includes('arm pain')) {
    return {
      answer: 'Shoulder irritation usually improves with reducing pressing volume, focusing on scapular control, and avoiding painful overhead motion. Rest, ice, and mobility work can help. If pain persists or affects daily movement, get a medical assessment.',
      suggestions: ['Show me shoulder-safe exercises', 'What helps with gym strain?', 'What is a good warm-up?'],
    };
  }

  if (text.includes('knee') || text.includes('ankle')) {
    return {
      answer: 'Knee or ankle discomfort often improves with controlling range of motion, strengthening the glutes and calves, and avoiding painful angles. Use steady movement and reduce impact until the pain settles. Swelling or locking needs medical review.',
      suggestions: ['What home exercises help knees?', 'How can I recover from a gym injury?', 'What mobility work helps joints?'],
    };
  }

  if (text.includes('back pain') || text.includes('lower back')) {
    return {
      answer: 'For back pain, stay away from painful ranges, improve core control, and use hip hinge mechanics carefully. Gentle walking, mobility work, and posture corrections often help. If pain is severe, persistent, or causes numbness, get medical evaluation.',
      suggestions: ['How do I strengthen my core?', 'What stretches help lower back pain?', 'How can I prevent gym injuries?'],
    };
  }

  if (text.includes('gym') || text.includes('strength') || text.includes('lifting') || text.includes('workout routine')) {
    return {
      answer: 'For a solid gym routine, combine compound lifts like squats, deadlifts, bench press, and rows with controlled recovery. Prioritize form, progressive overload, and sleep. If you feel pain, stop the exercise and reassess.',
      suggestions: ['Give me a 3-day gym plan', 'What home workouts improve strength?', 'How do I avoid injuries?'],
    };
  }

  if (text.includes('home') || text.includes('bodyweight') || text.includes('no gym') || text.includes('at home')) {
    return {
      answer: 'A good home workout should include a squat pattern, push movement, hinge or glute work, core work, and a short conditioning block. Try bodyweight squats, push-ups, lunges, glute bridges, and planks.',
      suggestions: ['Create a 20-minute home workout', 'What are the best beginner exercises?', 'How do I build strength at home?'],
    };
  }

  if (text.includes('injury') || text.includes('strain') || text.includes('pain')) {
    return {
      answer: 'For a common gym strain, stop the aggravating exercise, rest the area, and use ice or heat as appropriate. Keep movement gentle, avoid pushing through pain, and evaluate with a medical professional if symptoms continue.',
      suggestions: ['How can I prevent gym injuries?', 'What should I do for cramps?', 'How do I warm up before lifting?'],
    };
  }

  if (text.includes('diet') || text.includes('nutrition') || text.includes('protein') || text.includes('meal')) {
    return {
      answer: 'Aim for a diet with enough protein, vegetables, complex carbs, and healthy fats. For most active people, protein intake is useful around training, and total calories should match your goal: maintenance, deficit, or surplus.',
      suggestions: ['What should I eat before gym?', 'How much protein do I need?', 'How can I lose fat and keep muscle?'],
    };
  }

  if (text.includes('warm up') || text.includes('warmup') || text.includes('stretch')) {
    return {
      answer: 'Warm up with 5–10 minutes of light cardio and dynamic movement that matches the workout. Then do a few easy sets before your main lift. Stretch after training or during mobility work rather than forcing tight ranges.',
      suggestions: ['What is a good warm-up for legs?', 'How can I improve mobility?', 'How do I avoid injuries?'],
    };
  }

  if (text.includes('sleep') || text.includes('recovery') || text.includes('rest')) {
    return {
      answer: 'Recovery is a major part of performance. Aim for consistent sleep, take deload weeks when needed, and plan rest days around hard training. Recovery helps prevent injury and supports muscle growth.',
      suggestions: ['How many rest days do I need?', 'What helps with soreness?', 'How do I recover from gym fatigue?'],
    };
  }

  return {
    answer: generalAnswer(message),
    suggestions: ['Give me a beginner plan', 'Show me a home workout plan', 'How do I recover from pain?', 'How can I avoid gym injuries?'],
  };
};

const callHuggingFace = async (userMessage: string) => {
  if (!HUGGINGFACE_API_TOKEN) {
    return null;
  }

  try {
    const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
      },
      body: JSON.stringify({
        model: HUGGINGFACE_MODEL,
        messages: [
          {
            role: 'system',
            content: 'You are FitForge AI, a helpful fitness coach. Give practical exercise, recovery, and injury guidance. Keep facts general and safe. If a concern may require medical evaluation, say so clearly.',
          },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      throw new Error(`HF request failed: ${response.status}`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    return typeof content === 'string' && content.trim() ? content.trim() : null;
  } catch (error) {
    return null;
  }
};

aiRoutes.post('/ai', async (req, res) => {
  const { message, prompt } = req.body || {};
  const userMessage = typeof message === 'string' ? message : typeof prompt === 'string' ? prompt : '';

  if (!userMessage || !userMessage.trim()) {
    return res.status(400).json({ message: 'Message is required.' });
  }

  const hfAnswer = await callHuggingFace(userMessage);
  const aiReply = hfAnswer ? { answer: hfAnswer, suggestions: ['Give me a home workout plan', 'How do I avoid injuries?', 'What should I do for cramps?'] } : buildFallbackAiResponse(userMessage);

  return res.json({
    message: aiReply.answer,
    answer: aiReply.answer,
    suggestions: aiReply.suggestions,
  });
});

export default aiRoutes