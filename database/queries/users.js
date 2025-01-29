import db from "../database";

// ✅ Create User
export const createUser = async (username, email, password) => {
  try {
    await db.transactionAsync(async tx => {
      await tx.executeSql(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?);',
        [username, email, password]
      );
    });
    console.log("User created successfully");
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

// ✅ Get All Users
export const getUsers = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users;',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// ✅ Update User
export const updateUser = async (id, username, email) => {
  try {
    await db.transactionAsync(async tx => {
      await tx.executeSql(
        'UPDATE users SET username = ?, email = ? WHERE id = ?;',
        [username, email, id]
      );
    });
    console.log("User updated successfully");
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

// ✅ Delete User
export const deleteUser = async (id) => {
  try {
    await db.transactionAsync(async tx => {
      await tx.executeSql('DELETE FROM users WHERE id = ?;', [id]);
    });
    console.log("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};