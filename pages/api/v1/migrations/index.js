import migrationRunner from 'node-pg-migrate';
import {join} from 'node:path'

export default async function migrations (request, response) {
  const defaultMigrationsOptions = {
    databaseUrl: "postgres://local_user:local_password@localhost:5432/local_db",
    dryRun: true,
    dir: join ("infra", "migrations"),
    direction: "up", 
    verbose: "true",
    migrationsTable: "pgmigrations"
  }


  if (request.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrationsOptions);
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrationRunner({
      // ... SPREAD
      ...defaultMigrationsOptions,
      dryRun : false
    });

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }
    //console.log(migratedMigrations)
    return response.status(200).json(migratedMigrations);
  }

  // method not allowed
  response.status(405).end();
}
