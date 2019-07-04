import { Outcome, OutcomeLabel } from './outcome.model';

export class Result {
    public Outcome: Outcome;

    public Action: string;

    public constructor(outcome: Outcome, action: string) {
        this.Outcome = outcome;
        this.Action = `${action}...${OutcomeLabel.get(outcome)}`;
    }
}
