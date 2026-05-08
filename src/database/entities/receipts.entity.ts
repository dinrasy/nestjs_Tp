import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column()
  issuedAt: Date;
}
