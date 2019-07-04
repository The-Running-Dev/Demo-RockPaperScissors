import { Entity } from './entity.model';
import { Defeats } from './defeats.model';

export class Rock extends Entity {
    constructor() {
        super(
            'Rock',
            [
                new Defeats('Crushes', 'Lizard'),
                new Defeats('Crushes', 'Scissors')
            ],
            'fa-hand-rock-o'
        );
    }
}
