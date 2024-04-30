import type { Config } from 'drizzle-kit';
import 'dotenv/config';

/** @type { import("drizzle-kit").Config } */
export default {
	schema: './src/lib/server/schema.ts',
	out: './src/lib/server/migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_DATABASE_URL!,
		authToken: process.env.TURSO_AUTH_TOKEN
	}
} satisfies Config;
