+++
date = '2026-10-21T07:16:16-04:00'
title = 'Primeria: A Board Game about Prime Numbers'
slug = 'c219c1f'
aliases = ['/posts/primeria/']
+++


Hi, I want to share with you a board game I invented yesterday, inspired by scrabble. 
It is a fun two person turn based perfect information abstract strategy game with very simple rules, where one applies clever strategy as well as quick mental arithmetic skills. I have coded up an [interactive UI](https://yunhaixiang.github.io/primeria/) you can use to play it. Try it out! 

{{< figure
  src="/img/primeria.jpeg"
  alt="Primeria game board, player clocks, and tile piles in the interactive UI"
  caption="A game of Primeria in the interactive UI."
  width="100%">}}

## Rules

The game is played on a square board with 9 by 9, 11 by 11, or 13 by 13 squares. Each player has a starting pile of 36 square tiles labelled as follows.

| Tile labels | Number of each tile |
| :---: | :---: |
| 0, 5 | 2 |
| 2, 4, 5, 6, 8 | 3 |
| 1, 3, 7, 9 | 5 |
{.table-centered}

To win the game, a player must play all their tiles before their opponent does. Other than winning by playing all tiles, one can win by opponent resigning or running out of time in a time controlled game. As an optional time out rule: if the game extends beyond a certain time, say 1 hour, then the winner is decided as the first player to have less tiles than the opponent for 10 consecutive turns. 


The two players flip a coin or do rock paper scissors to decide who moves first. On each move, a player has three options

1. **Single Drop**: Place a single tile on any vacant space on the board. 
1. **Double Down**: Place a tile on a vacant square on the board such that it is adjacent to an existing tile, then place another tile on a vacant square on the board such that it is adjacent to any existing tile (where it could be the tile just placed). 
1. **Challenge**: Point out that a number (horizontal left to right or vertical top to down, from the opponent's perspective) on the board, other than the single digit $1$, is not a prime number, by proposing a nontrivial factor of it, and then verifying the claim with a calculator. If the player is correct and hence the number is not a prime, then this number is picked up from the board, and all but the last digit is put into the opponent's pile, where the last digit called the *tax* is put away as neither player's pile. If the player is incorrect, and the number proposed is not a factor of the number, then no tile is placed this turn, and the opponent begins their turn. For longer numbers, the challenger gets more attempts, numbers 1-3 digits long gets 1 attempt, 4-6 digits long gets 2 attempts, 7-9 digits long gets 3 attempts, and so on. 

In particular, these rules imply that when there are no tiles on the board, the only option is single drop. 

There is also a special rule for 0 and 5: the 0 and 5 tiles cannot be placed in any position without any adjacent tiles. Additionally, 0 cannot be placed at the beginning or end of a number, after a turn is finished. 


## Time Controls

Players can choose one of the following time controls. 

| Mode | Time per player | Increment per turn |
| :---: | :---: | :---: |
| Blitz | 10 minutes | 10 seconds |
| Rapid | 20 minutes | 20 seconds |
| Standard | 30 minutes | 30 seconds |
| Classical | 45 minutes | 60 seconds |
| Casual | Unlimited | — |
{.table-centered}

Your clock runs while you choose a placement or find a factor. To challenge, identify both the number and the proposed factor before stopping your clock. Pause both clocks while verifying the challenge and transferring tiles, then start the opponent's clock. 


## Strategy

One straightforward trick is to use small prime factor tests.

1. a number is divisible by $3$ (resp. $9$) iff its sum of digits is divisible by $3$ (resp. $9$)
2. a number is divisible by $11$ iff its alternating sum of digits is divisible by $11$
3. a number is divisible by $7$ iff subtracting twice its last digit from the number formed by the remaining digits gives a multiple of $7$. 
4. a number is divisible by $13$ iff adding four times its last digit to the number formed by the remaining digits gives a multiple of $13$.
5. split the number into three-digit blocks from the right and take their alternating sum. The original number is divisible by $7$, $11$, or $13$ iff that sum is divisible by the corresponding divisor, since $1001=7\cdot11\cdot13$.


There is also a trade off between single drop and double down. Double down is more efficient in playing tiles, but single drop allows more freedom. One could use single drops to avoid forming long numbers which are more likely to be composite. Challenging also has a trade off. If succeeds, picking up a number could change existing numbers on the board, and if they are composite, this opens up opportunities for the opponent to challenge these numbers. There are likely more strategies to be discovered. 
