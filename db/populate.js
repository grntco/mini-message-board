require("dotenv").config();
const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR(500),
        "user" VARCHAR(255),
        time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


    INSERT INTO messages (text, "user") 
    VALUES
        ('Hello there!', 'ckent'),
        ('What''s up!', 'bwayne'),
        ('Hey!', 'dprince');
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?sslmode=require`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
