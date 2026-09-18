import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed users
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            password: 'password123',
            profile: {
                create: {
                    name: 'User One',
                    fitnessExperience: 'Beginner',
                    preferredWorkoutLocation: 'Home',
                    availableEquipment: 'None',
                    preferredWorkoutDuration: 30,
                    fitnessPreferences: {
                        create: {
                            goal: 'General Fitness',
                        },
                    },
                },
            },
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            password: 'password123',
            profile: {
                create: {
                    name: 'User Two',
                    fitnessExperience: 'Intermediate',
                    preferredWorkoutLocation: 'Gym',
                    availableEquipment: 'Dumbbells, Barbell',
                    preferredWorkoutDuration: 60,
                    fitnessPreferences: {
                        create: {
                            goal: 'Strength',
                        },
                    },
                },
            },
        },
    });

    // Seed exercises
    const exercises = [
        {
            name: 'Push Up',
            description: 'A basic upper body exercise.',
            targetMuscle: 'Chest',
            secondaryMuscles: ['Triceps', 'Shoulders'],
            equipment: 'None',
            difficulty: 'Beginner',
            category: 'Upper Body',
            instructions: 'Lower your body until your chest nearly touches the floor, then push back up.',
            sets: 3,
            repetitions: 10,
            rest: 60,
            commonMistakes: 'Not going low enough.',
            safetyConsiderations: 'Keep your back straight.',
            beginnerVariation: 'Knee Push Up',
            advancedVariation: 'Weighted Push Up',
            alternativeExercises: ['Bench Press', 'Incline Push Up'],
        },
        {
            name: 'Squat',
            description: 'A lower body exercise that targets the legs and glutes.',
            targetMuscle: 'Quadriceps',
            secondaryMuscles: ['Hamstrings', 'Glutes'],
            equipment: 'None',
            difficulty: 'Beginner',
            category: 'Lower Body',
            instructions: 'Stand with feet shoulder-width apart, lower your body as if sitting back into a chair.',
            sets: 3,
            repetitions: 15,
            rest: 60,
            commonMistakes: 'Letting knees go past toes.',
            safetyConsiderations: 'Keep your chest up.',
            beginnerVariation: 'Box Squat',
            advancedVariation: 'Weighted Squat',
            alternativeExercises: ['Leg Press', 'Lunges'],
        },
    ];

    for (const exercise of exercises) {
        await prisma.exercise.create({
            data: exercise,
        });
    }

    console.log({ user1, user2 });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });