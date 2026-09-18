import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Exercises from '../components/exercises/ExerciseLibrary';
import Workouts from '../components/workouts/WorkoutPlanner';
import AI from '../components/ai/AIAssistant';
import Recovery from '../components/RecoveryCenter';
import Mobility from '../components/MobilityCenter';
import Progress from '../components/dashboard/ProgressChart';
import ProtectedRoute from './ProtectedRoute';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <ProtectedRoute path="/exercises" component={Exercises} />
                <ProtectedRoute path="/workouts" component={Workouts} />
                <ProtectedRoute path="/ai" component={AI} />
                <ProtectedRoute path="/recovery" component={Recovery} />
                <ProtectedRoute path="/mobility" component={Mobility} />
                <ProtectedRoute path="/progress" component={Progress} />
            </Switch>
        </Router>
    );
};

export default AppRouter;