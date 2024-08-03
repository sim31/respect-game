import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core';
import { UsersPgTable } from '@/lib/postgres_drizzle/users.orm';
import { ConsensusGroupsPgTable } from '@/lib/postgres_drizzle/consensus_groups.orm';
import { sql } from 'drizzle-orm';

// CREATE TABLE consensus_group_members (groupid INT REFERENCES consensus_groups (groupid), userid INT REFERENCES users (id), created TIMESTAMP, updated TIMESTAMP);

export const ConsensusGroupsMembersPgTable = pgTable('consensus_groups', {
  groupid: integer('groupid').references(() => ConsensusGroupsPgTable.groupid),
  userid: integer('userid').references(() => UsersPgTable.id),
  created: timestamp('created', { mode: 'string'}),
  updated: timestamp('updated', { mode: 'string' }).notNull().default(sql`now()`),
});
