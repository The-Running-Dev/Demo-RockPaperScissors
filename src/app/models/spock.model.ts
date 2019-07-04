import { Entity } from './entity.model';
import { Defeats } from './defeats.model';

export class Spock extends Entity {
    constructor() {
        super(
            'Spock',
            [
                new Defeats('Smashes', 'Scissors'),
                new Defeats('Vaporizes', 'Rock')
            ],
            'fa-hand-spock-o'
        );
    }
}
