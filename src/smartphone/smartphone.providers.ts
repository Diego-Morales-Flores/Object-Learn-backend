import { DataSource } from 'typeorm';
import { Smartphone } from "./entities/smartphone.entity";

export const smartphoneProviders = [
    {
        provide: 'SMARTPHONE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Smartphone),
        inject: ['DATA_SOURCE'],
    },
];