import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  id: string; // Change 'receiptId' to 'id' to match GraphQL

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column()
  issuedAt: Date;
}
