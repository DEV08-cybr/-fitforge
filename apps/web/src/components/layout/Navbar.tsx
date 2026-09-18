import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    FitForge
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/exercises" className="text-gray-300 hover:text-white">Exercises</Link>
                    <Link to="/workouts" className="text-gray-300 hover:text-white">Workouts</Link>
                    <Link to="/ai-coach" className="text-gray-300 hover:text-white">AI Coach</Link>
                    <Link to="/recovery" className="text-gray-300 hover:text-white">Recovery</Link>
                    <Link to="/mobility" className="text-gray-300 hover:text-white">Mobility</Link>
                    <Link to="/planner" className="text-gray-300 hover:text-white">Planner</Link>
                    <Link to="/progress" className="text-gray-300 hover:text-white">Progress</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;