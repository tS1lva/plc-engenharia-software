import database from "infra/database.js"

async function status (request, response) {
  const updatedAt = new Date().toISOString();
  console.log();

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: "nonee"
  });
}

export default status;