import React from 'react';

const ExerciseFilters: React.FC = () => {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold">Filter Exercises</h2>
            <div className="flex flex-wrap gap-4">
                <select className="border rounded p-2">
                    <option value="">Select Category</option>
                    {/* Add categories dynamically here */}
                </select>
                <select className="border rounded p-2">
                    <option value="">Select Equipment</option>
                    {/* Add equipment options dynamically here */}
                </select>
                <select className="border rounded p-2">
                    <option value="">Select Difficulty</option>
                    {/* Add difficulty levels dynamically here */}
                </select>
            </div>
            <button className="bg-blue-500 text-white rounded p-2">Apply Filters</button>
        </div>
    );
};

export default ExerciseFilters;