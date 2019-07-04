import { Entity } from './entity.model';
import { Defeats } from './defeats.model';

export class Scissors extends Entity {
    constructor() {
        super(
            'Scissors',
            [
                new Defeats('Cut', 'Paper'),
                new Defeats('Decapitates', 'Lizard')
            ],
            'fa-hand-scissors-o'
        );
    }
}
