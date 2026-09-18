type UserProfile = {
    id: string;
    email: string;
    name: string;
    bio?: string;
};

const profiles = new Map<string, UserProfile>();

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
    return profiles.get(userId) || null;
};

export const updateUserProfile = async (userId: string, profileData: Partial<UserProfile>): Promise<UserProfile> => {
    const current = profiles.get(userId) || { id: userId, email: '', name: 'User' };
    const nextProfile = { ...current, ...profileData, id: userId };
    profiles.set(userId, nextProfile);
    return nextProfile;
};

export const deleteUserProfile = async (userId: string): Promise<void> => {
    profiles.delete(userId);
};