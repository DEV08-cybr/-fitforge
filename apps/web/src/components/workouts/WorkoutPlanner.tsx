import React, { useState } from 'react';

const WorkoutPlanner: React.FC = () => {
    const [workouts, setWorkouts] = useState<string[]>([]);
    const [newWorkout, setNewWorkout] = useState<string>('');

    const handleAddWorkout = () => {
        if (newWorkout.trim()) {
            setWorkouts([...workouts, newWorkout]);
            setNewWorkout('');
        }
    };

    const handleRemoveWorkout = (index: number) => {
        const updatedWorkouts = workouts.filter((_, i) => i !== index);
        setWorkouts(updatedWorkouts);
    };

    return (
        <div className="workout-planner">
            <h2 className="text-2xl font-bold">Workout Planner</h2>
            <div className="flex items-center mt-4">
                <input
                    type="text"
                    value={newWorkout}
                    onChange={(e) => setNewWorkout(e.target.value)}
                    placeholder="Add a new workout"
                    className="border p-2 rounded"
                />
                <button onClick={handleAddWorkout} className="ml-2 bg-blue-500 text-white p-2 rounded">
                    Add
                </button>
            </div>
            <ul className="mt-4">
                {workouts.map((workout, index) => (
                    <li key={index} className="flex justify-between items-center border-b py-2">
                        <span>{workout}</span>
                        <button onClick={() => handleRemoveWorkout(index)} className="text-red-500">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutPlanner;