import { Migration } from "@mikro-orm/migrations";

export class Migration20220913202829 extends Migration {
  async up(): Promise<void> {
    this.addSql('create table `book` (`id` integer not null primary key autoincrement, `title` text not null);');
  }
}
