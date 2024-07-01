import { client } from "../client/client.js";
import bcrypt from "bcrypt";

class MainManager {
  static async hashing(password) {
    const hashedPassword = await bcrypt.hash(password, 1);
    return hashedPassword;
  }

  static async compare(password, passwordHash) {
    const res = await bcrypt.compare(password, passwordHash);
    return res;
  }

  static async login(email, password) {
    try {
      const [rows] = await client.query(`select * from user where email = ?`, [
        email,
      ]);
      if (rows[0]) {
        const success = await this.compare(password, rows[0].password);
        if (success) {
          delete rows[0].password;
          return rows[0];
        }
      }
      return null;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
  static async add(email, password, pseudo) {
    try {
      console.log("called manger");
      const hashedPassword = await MainManager.hashing(password);
      const [result] = await client.query(
        `insert into user (email, password, pseudo) values (? , ? , ?)`,
        [email, hashedPassword, pseudo]
      );
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async browse() {
    try {
      const [rows] = await client.query(`select * from user`);
      return rows;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
}
export default MainManager;
