import React from 'react';

interface WorkoutCardProps {
    title: string;
    description: string;
    duration: number; // duration in minutes
    onStart: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ title, description, duration, onStart }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-gray-500">Duration: {duration} minutes</p>
            <button 
                onClick={onStart} 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Start Workout
            </button>
        </div>
    );
};

export default WorkoutCard;