import { TestBed } from '@angular/core/testing';
import { Lizard, Paper, Rock, Scissors, Spock, Entity, Outcome } from '../models';

import { RockPaperScissorsService } from './rock-paper-scissors.service';

describe('RockPaperScissorsService', () => {
    let service: RockPaperScissorsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(RockPaperScissorsService);
    });

    it('Should Create an Instance of the RockPaperScissors Service', () => {
        expect(service).toBeTruthy();
    });

    it('Should Make a Random Choice', () => {
        const result = service.MakeRandomChoice();

        expect(result).toBeDefined();
        expect(result).toEqual(jasmine.any(Entity));
    });

    it('Scissors Cut Paper', () => {
        const result = service.Battle(new Scissors(), new Paper());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Paper Gets Cut by Scissors', () => {
        const result = service.Battle(new Paper(), new Scissors());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Paper Covers Rock', () => {
        const result = service.Battle(new Paper(), new Rock());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Rock Gets Covered by Paper', () => {
        const result = service.Battle(new Rock(), new Paper());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Rock Crushes Lizard', () => {
        const result = service.Battle(new Rock(), new Lizard());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Lizard Gets Crushed by Rock', () => {
        const result = service.Battle(new Lizard(), new Rock());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Lizard Poisons Spock', () => {
        const result = service.Battle(new Lizard(), new Spock());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Spock Gets Poisoned by Lizard', () => {
        const result = service.Battle(new Spock(), new Lizard());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Spock Smashes Scissors', () => {
        const result = service.Battle(new Spock(), new Scissors());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Scissors Get Smashed by Spock', () => {
        const result = service.Battle(new Scissors(), new Spock());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Scissors Decapitates Lizard', () => {
        const result = service.Battle(new Scissors(), new Lizard());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Lizard Gets Decapitated by Scissors', () => {
        const result = service.Battle(new Lizard(), new Scissors());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Lizard Eats Paper', () => {
        const result = service.Battle(new Lizard(), new Paper());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Paper Gets Eaten by Lizard', () => {
        const result = service.Battle(new Paper(), new Lizard());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Paper Disproves Spock', () => {
        const result = service.Battle(new Paper(), new Spock());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Spock Gets Disproved by Paper', () => {
        const result = service.Battle(new Spock(), new Paper());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Spock Vaporizes Rock', () => {
        const result = service.Battle(new Spock(), new Rock());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Rock Gets Vaporized by Spock', () => {
        const result = service.Battle(new Rock(), new Spock());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });

    it('Rock Crushes Scissors', () => {
        const result = service.Battle(new Rock(), new Scissors());

        expect(result.Outcome).toEqual(Outcome.Win);
    });

    it('Scissors Get Crushed by Rock', () => {
        const result = service.Battle(new Scissors(), new Rock());

        expect(result.Outcome).toEqual(Outcome.Loose);
    });
});
