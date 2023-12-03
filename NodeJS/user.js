const db = require('./db'); 

class User {
  static async createUser(username, password) {
    const newUser = await db.one(
      'INSERT INTO users(username, password) VALUES($1, $2) RETURNING id, username',
      [username, password]
    );

    return newUser;
  }

  static async getUserByUsername(username) {
    const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);

    return user;
  }

  static async getUserById(id) {
    const user = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [id]);

    return user;
  }

  static async updateUserToken(id, token) {
    await db.none('UPDATE users SET token = $1 WHERE id = $2', [token, id]);
  }
}

module.exports = User;
