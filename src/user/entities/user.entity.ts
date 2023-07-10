import {
  BeforeInsert, BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { hash } from 'bcryptjs';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  idUser: number;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false, select: false })
  password: string;

  @Column({ type: 'varchar', nullable: false, default: null })
  name: string;

  @Column({ type: 'simple-array', default: 'STAFF' })
  roles: string[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
