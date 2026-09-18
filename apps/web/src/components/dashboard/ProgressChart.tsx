import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ProgressChart: React.FC = () => {
    const progressData = useSelector((state: RootState) => state.dashboard.progress);

    const data = {
        labels: progressData.map((entry) => entry.date),
        datasets: [
            {
                label: 'Progress',
                data: progressData.map((entry) => entry.value),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="chart-container">
            <h2>Your Progress Over Time</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default ProgressChart;