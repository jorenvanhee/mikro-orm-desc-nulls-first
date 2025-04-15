import {
  Entity,
  PrimaryKey,
  Property,
} from '@mikro-orm/sqlite';

@Entity()
export class Book {
  @PrimaryKey({ type: "uuid" })
  id!: number;

  @Property({ type: String })
  title!: string;
}
