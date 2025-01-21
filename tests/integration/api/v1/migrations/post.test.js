import database from "infra/database.js";

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

beforeAll(cleanDatabase);

test("POST to /api/v1/migrations should return 200", async () => {
    const response = await fetch ("http://localhost:3000/api/v1/migrations", {
        method: 'POST'
    });
    expect(response.status).toBe(200);

    const responseBody = await response.json();

    // Apenas para visualização das migrations
    //console.log(responseBody)
    expect(Array.isArray(responseBody)).toBe(true);

});