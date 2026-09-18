import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex justify-around p-4">
                <Link to="/" className="text-gray-600 hover:text-blue-500">
                    Home
                </Link>
                <Link to="/exercises" className="text-gray-600 hover:text-blue-500">
                    Exercises
                </Link>
                <Link to="/workouts" className="text-gray-600 hover:text-blue-500">
                    Workouts
                </Link>
                <Link to="/ai" className="text-gray-600 hover:text-blue-500">
                    AI Coach
                </Link>
                <Link to="/progress" className="text-gray-600 hover:text-blue-500">
                    Progress
                </Link>
            </div>
        </nav>
    );
};

export default MobileNav;