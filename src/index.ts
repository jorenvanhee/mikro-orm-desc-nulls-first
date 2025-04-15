import { Migrator } from "@mikro-orm/migrations";
import { MikroORM, QueryOrder } from "@mikro-orm/sqlite";
import { Book } from "./book.entity.js";

async function setup() {
  const orm = await MikroORM.init({
    dbName: 'sqlite.db',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    extensions: [Migrator],
    debug: ['query'],
  });

  await orm.migrator.up();

  // This fails
  const books = await orm.em.fork().find(Book, {}, { orderBy: { title: "DESC_NULLS_FIRST" } });

  // This works
  // const books = await orm.em.fork().find(Book, {}, { orderBy: { title: QueryOrder.DESC_NULLS_FIRST } });

  console.log(books);
}

await setup();
