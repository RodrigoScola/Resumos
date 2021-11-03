declare function require(name: string);
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1234454",
  host: "localhost",
  port: 4000,
  database: "databasename",
});
export default pool;
