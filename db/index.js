import mysql from "mysql2";
import config from "../config/config.js";
const connection = mysql.createPool(config.mysql);
export default connection;