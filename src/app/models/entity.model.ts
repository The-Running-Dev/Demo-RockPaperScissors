import { Defeats } from './defeats.model';

export abstract class Entity {
    public Defeats: Defeats[];

    public Name: string;

    public Icon: string;

    protected constructor(name: string, defeats: Defeats[], icon: string) {
        this.Name = name;
        this.Defeats = defeats;
        this.Icon = icon;
    }
}
