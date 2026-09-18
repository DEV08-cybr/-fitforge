import React from 'react';

interface StatCardProps {
    title: string;
    value: number | string;
    description?: string;
    icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            {icon && <div className="mr-4">{icon}</div>}
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
                {description && <p className="text-sm text-gray-500">{description}</p>}
            </div>
        </div>
    );
};

export default StatCard;