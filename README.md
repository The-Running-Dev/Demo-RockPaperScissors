# Rock Paper Scissors Lizard Spock

Demo: https://the-running-dev.github.io/Demo-RockPaperScissors/

## Implementation

We start with the base `Entity` which has a name, an icon
and an array of entities that the the entity can defeat.

Each entity, for example `Rock`, extends the base `Entity` and
sets its name, the array of entities it can defeat, and its icon.

The `Defeats` class is used to define the entities which the current
entity can defeat, and the action it performs when it defeats that enemy.
For example the `Rock` `Crushes` the `Lizard`.

The `RockPaperScissors` service has a list of possible choices available
to the player and the computer. It also has the method `MakeRandomChoice`
used to make a random choice for the computer opponent. The `Battle` method
takes two entities, if they are the same, it's a tie; if the first entity
contains the second entity in the array of entities it can defeat, you win,
and otherwise, you loose.

## Unit Tests
Unit tests cover the service with its various choices, and the app component.

`npm run test`

## End to End Tests
End to end tests cover the application. There are only 2 basic tests to show
functionality.

`npm run e2e`

## Publishing
The Angular GitHub pages package is used to publish the application to GitHub.

`npm run publish`
