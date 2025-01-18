import migrationRunner from 'node-pg-migrate';
import {join} from 'node:path'

export default async function migrations (request, response) {



  if (request.method === "GET") {
    const migrations = await migrationRunner({
      databaseUrl: "postgres://local_user:local_password@localhost:5432/local_db",
      dryRun: true,
      dir: join ("infra", "migrations"),
      direction: "up", 
      verbose: "true",
      migrationsTable: "pgmigrations"
    });
    return response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    const migrations = await migrationRunner({
      databaseUrl: "postgres://local_user:local_password@localhost:5432/local_db",
      dryRun: false,
      dir: join ("infra", "migrations"),
      direction: "up", 
      verbose: "true",
      migrationsTable: "pgmigrations"
    });
    return response.status(200).json(migrations);
  }

  // method not allowed
  response.status(405).end();
}
