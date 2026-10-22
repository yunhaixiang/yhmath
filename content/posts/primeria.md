+++
date = '2026-10-21T07:16:16-04:00'
title = 'Primeria: A Board Game about Prime Numbers'
slug = 'c219c1f'
aliases = ['/posts/primeria/']
+++


Hi, I want to share with you a board game I invented yesterday. 
It is a two person board game which combines clever strategies with quick mental arithmetic skills. 
I have here an [interactive UI](https://yunhaixiang.github.io/primeria/) which you can try out. 

{{< figure
  src="/img/primeria.jpeg"
  alt="Primeria game board, player clocks, and tile piles in the interactive UI"
  caption="A game of Primeria in the interactive UI."
  width="100%">}}

## Set-up

The game is played on a square board with 9 x 9, 11 x 11, 13 x 13, or 15 x 15 squares. 
Each player start with a pile of 36 tiles labelled with digits 0 ~ 9.
For each player, they get 2 copies of 0 and 5 each, 3 copies of 2, 4, 6, and 8 each, and 5 copies of 1, 3, 7, 9 each. 
Two players take turns to place tiles on the square.
Flip a coin to decide which player plays first. 

## Moves

At each turn, the player chooses from one of three kinds of moves. 

**Single Drop**: the player places one of their tiles on any empty square.

**Double Down**: the player places one of their tiles on an empty square adjacent to an existing tile on the board, and then places another one of their tiles on an empty square adjacent to an existing tile on the board (which could be the one just placed). 

**Challenge**: the player points to a connected row or column of digits, and declares to _challenge_ the number formed by this row or column (viewed left to right and top to bottom, from the player/challenger's perspective). An attempt of a challenge is to write down a factor of the number, other than 1 or itself, and then verifying it with a calculator. The longer of the number, the more attempts the challenger gets: 1 ~ 3 digits gets 1 attempt, 4 ~ 6 digits gets 2 attempts, 7 ~ 9 digits get 3 attempts, and so on. 
- If an attempt succeeds: the number is removed from the board, and all but its ones digit is put into the opponent's pile. The ones digit is put away, in neither player's pile. 
- If all attempt fail: the number remains on the board, no tile is placed this turn, and the game moves on to the next turn. 

The zero tile works slightly differently than others. 

**Special Rule for Zero**: After each turn, no 0-tile can be placed in the first or last square in a connected row or column, nor a square without any adjacent tiles. If, as a result of removing tiles from a challenge, a 0-tile becomes the first or last square in a connected row or column or an isolated tile without any adjacent tiles, then that 0-tile is immediately removed from the board and put away in neither player's pile. 

## Winning

There are three ways to win a game (and one optional way)

1. Clear-out: a player wins by playing all their tiles in their pile,
2. Time: a player wins by its opponent running out of time,
3. Resignation: a player wins by its opponent resigning the game,
4. (Optional Rule) Tie-breaker: if the game extends for a long time, for example 1 hour, then the first player to have less tiles for 10 consecutive turns wins. 

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

Your clock runs while you choose a placement or find a factor. To challenge, identify both the number and the proposed factor before stopping the clock. The clock continues inbetween attempts. The clock can remain stopped when transferring the tiles after a successful attempt. 

## Tips


A good strategy is to make use of the following facts:

1. a number is a multiple of 2 if and only if it ends in 0, 2, 4, 6, or 8,
2. a number is a multiple of 5 if and only if it ends in 0 or 5,
3. a number is a multiple of 3 if and only if the sum of its digits is a multiple of 3,
4. a number is a multiple of 7 if and only if subtracting 3 times its last two digits from the number formed by the remaining digits gives a multiple of 7,
5. a number is a multiple of 11 if and only if the alternating sum of its digits is a multiple of 11,
6. A number is a multiple of 7, 11, or 13 if and only if the alternating sum of its three-digit blocks is a multiple of 7, 11, or 13, respectively.

