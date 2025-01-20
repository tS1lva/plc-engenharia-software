import database from "infra/database.js"

test("GET to /api/v1/migrations should return 200", async () => {
    const response = await fetch ("http://localhost:3000/api/v1/migrations");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody)
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);



    async function query(queryObject) {
        const clientData = {
          host: process.env.POSTGRES_HOST,
          port: process.env.POSTGRES_PORT,
          user: process.env.POSTGRES_USER,
          database: process.env.POSTGRES_DB,
          password: process.env.POSTGRES_PASSWORD
        }
    
        console.log(clientData);
    }

    const databaseVersionResult = await query('SHOW server_version;')

});

