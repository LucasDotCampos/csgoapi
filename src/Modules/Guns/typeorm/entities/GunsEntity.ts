import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn,
} from "typeorm";

@Entity("guns")
class GunsEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    ammo: string;

    @Column()
    killAward: string;

    @Column()
    damage: number;

    @Column()
    firerate: number;

    @Column()
    recoilControl: number;

    @Column()
    accurateRange: string;

    @Column()
    armorPenetration: number;

    @Column()
    type: string;

    @Column()
    side: string;

    @Column()
    price: string;

    @Column()
    picture?: string;

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;
}

export default GunsEntity;
