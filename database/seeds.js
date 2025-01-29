import { initDatabase } from "./database";

const createInitialUser = async () => {
    const db = await initDatabase();
    const email = 'tharuka@gmail.com';
    const password = '123456';
    const username = 'tharuka';
    try {
        const result = await db.getFirstAsync(
            'SELECT id FROM users WHERE email = ?;',
            [email]
        );
        if (result) {
            console.log("❌ User already exists:", email);
            return false; // User exists, don't insert
        }
        await db.runAsync(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?);',
            [username, email, password]
        );
        console.log('User created successfully');
    } catch (error) {
        console.error('Error adding user:', error);
    }
};

export { createInitialUser };