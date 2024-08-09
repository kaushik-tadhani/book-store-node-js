import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Publisher {
    @PrimaryGeneratedColumn()
    publisher_id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    contact_email: string;
}
