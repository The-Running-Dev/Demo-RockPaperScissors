import { Entity } from './entity.model';
import { Defeats } from './defeats.model';

export class Paper extends Entity {
    constructor() {
        super(
            'Paper',
            [
                new Defeats('Covers', 'Rock'),
                new Defeats('Disproves', 'Spock')
            ],
            'fa-hand-paper-o'
        );
    }
}
