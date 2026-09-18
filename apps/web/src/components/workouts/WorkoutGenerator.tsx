import React, { useState } from 'react';
import { useWorkoutApi } from '../../features/workouts/workoutApi';
import { Workout } from '../../../shared/src/types/workout';

const WorkoutGenerator: React.FC = () => {
    const [experienceLevel, setExperienceLevel] = useState('');
    const [workoutType, setWorkoutType] = useState('');
    const [duration, setDuration] = useState('');
    const [targetMuscle, setTargetMuscle] = useState('');
    const [generatedWorkout, setGeneratedWorkout] = useState<Workout | null>(null);
    const workoutApi = useWorkoutApi();

    const handleGenerateWorkout = async () => {
        const workout = await workoutApi.generateWorkout({
            experienceLevel,
            workoutType,
            duration,
            targetMuscle,
        });
        setGeneratedWorkout(workout);
    };

    return (
        <div className="workout-generator">
            <h2>Generate Your Workout</h2>
            <div>
                <label>
                    Experience Level:
                    <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)}>
                        <option value="">Select</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Workout Type:
                    <select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="home">Home</option>
                        <option value="gym">Gym</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Duration (minutes):
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Target Muscle:
                    <input
                        type="text"
                        value={targetMuscle}
                        onChange={(e) => setTargetMuscle(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleGenerateWorkout}>Generate Workout</button>
            {generatedWorkout && (
                <div>
                    <h3>Generated Workout:</h3>
                    <pre>{JSON.stringify(generatedWorkout, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default WorkoutGenerator;