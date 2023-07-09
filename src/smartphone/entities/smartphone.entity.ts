import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('smartphones')
export class Smartphone {
    @PrimaryGeneratedColumn({ name: 'id_smartphone' })
    idSmartphone: number;

    @Column()
    name: string;

    @Column()
    model: string;

    @Column({ name: 'price_referential' })
    priceReferential: number;

    @Column({ name: 'sale_price' })
    salePrice: number

    @Column({name: 'model_year' })
    modelYear: number

    @Column({name: 'audit_data' })
    auditData: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    CreatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt?: Date;
}