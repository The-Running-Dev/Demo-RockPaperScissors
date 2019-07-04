import { Injectable } from '@angular/core';

import { Entity, Lizard, Paper, Rock, Scissors, Spock } from '../models';
import { Outcome, Result } from '../models';

@Injectable({
    providedIn: 'root'
})
export class RockPaperScissorsService {
    public Choices: Entity[];

    constructor() {
        this.Choices = [
            new Rock(),
            new Paper(),
            new Scissors(),
            new Lizard(),
            new Spock()
        ];
    }

    public MakeRandomChoice(): Entity {
        const index = Math.floor(Math.random() * this.Choices.length);

        return this.Choices[index];
    }

    public Battle(entity: Entity, opponent: Entity): Result {
        if (entity === opponent) {
            return new Result(Outcome.Tie,'');
        }

        // Can the current entity defeat the enemy
        const winResult = entity.Defeats.find(
            x => x.Enemy.toLowerCase() === opponent.Name.toLowerCase()
        );

        if (winResult) {
            // Return the win result and action taken
            return new Result(
                Outcome.Win,
                `${entity.Name} ${winResult.Action} ${opponent.Name}`            );
        } else {
            // Find the entity we lost to
            const lostResult = opponent.Defeats.find(
                x => x.Enemy.toLowerCase() === entity.Name.toLowerCase()
            );

            // Return the lost result and action taken
            return new Result(
                Outcome.Loose,
                `${opponent.Name} ${lostResult.Action} ${entity.Name}`
            );
        }
    }
}
