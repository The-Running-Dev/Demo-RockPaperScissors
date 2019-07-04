import { Entity } from './entity.model';
import { Defeats } from './defeats.model';

export class Lizard extends Entity {
    constructor() {
        super(
            'Lizard',
            [
                new Defeats('Poisons', 'Spock'),
                new Defeats('Eats', 'Paper')
            ],
            'fa-hand-lizard-o'
        );
    }
}
