import { Component } from '@angular/core';

import { Entity, Outcome, Result } from './models';
import { RockPaperScissorsService } from './services/rock-paper-scissors.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    scores = [0, 0];

    weapons: Entity[];

    playerSelected: Entity;

    enemySelected: Entity;

    theResult: Result;

    loading = false;

    isResultShow = false;

    public constructor(private service: RockPaperScissorsService) {
        this.weapons = this.service.Choices;
    }

    pick(weapon: Entity): void {
        // if (this.loading) return;
        this.loading = true;
        this.playerSelected = weapon;

        setTimeout(() => {
            this.enemySelected = this.service.MakeRandomChoice();
            this.theResult = this.service.Battle(this.playerSelected, this.enemySelected);

            if (this.theResult.Outcome === Outcome.Win) {
                this.scores[0] += 1;
            } else if (this.theResult.Outcome === Outcome.Loose) {
                this.scores[1] += 1;
            }

            this.isResultShow = true;
            this.loading = false;
        }, Math.floor(Math.random() * 500) + 200);
    }

    reset(): void {
        this.scores = [0, 0];
    }
}
