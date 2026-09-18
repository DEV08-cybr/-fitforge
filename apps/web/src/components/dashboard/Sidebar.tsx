import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">FitForge Dashboard</h2>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/exercises">Exercises</Link>
                </li>
                <li>
                    <Link to="/workouts">Workouts</Link>
                </li>
                <li>
                    <Link to="/ai-coach">AI Coach</Link>
                </li>
                <li>
                    <Link to="/recovery">Recovery</Link>
                </li>
                <li>
                    <Link to="/mobility">Mobility</Link>
                </li>
                <li>
                    <Link to="/planner">Workout Planner</Link>
                </li>
                <li>
                    <Link to="/progress">Progress</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;