import React from 'react';

interface ExerciseCardProps {
    name: string;
    description: string;
    targetMuscle: string;
    equipment: string;
    difficulty: string;
    onClick: () => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
    name,
    description,
    targetMuscle,
    equipment,
    difficulty,
    onClick,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={onClick}>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-2">
                <span className="text-sm text-gray-500">Target Muscle: {targetMuscle}</span>
                <span className="text-sm text-gray-500 ml-2">Equipment: {equipment}</span>
                <span className="text-sm text-gray-500 ml-2">Difficulty: {difficulty}</span>
            </div>
        </div>
    );
};

export default ExerciseCard;