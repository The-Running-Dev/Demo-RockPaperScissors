export enum Outcome {
    Win,
    Loose,
    Tie
}

export const OutcomeLabel = new Map<number, string>([
    [Outcome.Win, 'You Win!'],
    [Outcome.Loose, 'You Loose!'],
    [Outcome.Tie, 'It\'s a Tie!']
]);
