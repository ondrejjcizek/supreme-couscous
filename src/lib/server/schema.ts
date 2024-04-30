import { text, int, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: int('id').primaryKey(),
	username: text('username'),
	admin: int('admin', { mode: 'boolean' })
});
