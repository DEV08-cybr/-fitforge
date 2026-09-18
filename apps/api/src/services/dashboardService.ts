type ProgressMetric = {
    userId: string;
    date: string;
    value: number;
};

const progressByUser = new Map<string, ProgressMetric[]>();

export const getDashboardData = async (userId: string) => {
    const metrics = progressByUser.get(userId) || [];
    return {
        workoutsCompleted: metrics.length,
        progressMetrics: metrics,
    };
};

export const updateUserProgress = async (userId: string, progressData: Partial<ProgressMetric>) => {
    const current = progressByUser.get(userId) || [];
    const entry: ProgressMetric = {
        userId,
        date: progressData.date || new Date().toISOString(),
        value: progressData.value || 0,
    };
    current.push(entry);
    progressByUser.set(userId, current);
    return entry;
};

export const getWorkoutHistory = async (userId: string) => {
    return progressByUser.get(userId) || [];
};

export const getFavorites = async (userId: string) => {
    return progressByUser.get(userId) || [];
};