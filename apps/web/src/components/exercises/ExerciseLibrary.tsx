import React, { useEffect, useState } from 'react';
import { fetchExercises } from '../../features/exercises/exerciseApi';
import ExerciseCard from './ExerciseCard';
import ExerciseFilters from './ExerciseFilters';

const ExerciseLibrary = () => {
    const [exercises, setExercises] = useState([]);
    const [filteredExercises, setFilteredExercises] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadExercises = async () => {
            const data = await fetchExercises();
            setExercises(data);
            setFilteredExercises(data);
            setLoading(false);
        };

        loadExercises();
    }, []);

    const handleFilterChange = (filters) => {
        const filtered = exercises.filter(exercise => {
            // Apply filtering logic based on filters
            return true; // Replace with actual filtering logic
        });
        setFilteredExercises(filtered);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="exercise-library">
            <h1 className="text-2xl font-bold mb-4">Exercise Library</h1>
            <ExerciseFilters onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredExercises.map(exercise => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </div>
    );
};

export default ExerciseLibrary;