import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export default class Author {
    @PrimaryGeneratedColumn()
    author_id: number;

    @Column()
    name: string;

    @Column("text")
    bio: string;

    @Column("date")
    birth_date: Date;
}
