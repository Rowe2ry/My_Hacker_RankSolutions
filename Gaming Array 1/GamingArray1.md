# Gaming Array 1

Andy wants to play a game with his little brother, Bob. The game starts with an array of distinct integers and the rules are as follows:

* Bob always plays first.  
* In a single move, a player chooses the maximum element in the array. He removes it and all elements to its right. For example, if the starting array *arr* = [ 2, 3, 5, 4, 1 ], then it becomes *arr'* = [ 2, 3 ] after removing [ 5, 4, 1 ].
* The two players alternate turns.
* The last player who can make a move wins.  

Andy and Bob play *g* games. Given the initial array for each game, find and print the name of the winner on a new line. If Andy wins, print ANDY; if Bob wins, print BOB.

To continue the example above, in the next move Andy will remove **3**. Bob will then remove **2** and win because there are no more integers to remove.

## Function Description

Complete the gamingArray function in the editor below.

gamingArray has the following parameter(s):

* int arr[ n ]: an array of integers

## Returns
- string: either ANDY or BOB

## Input Format

The first line contains a single integer *g*, the number of games.

Each of the next *g* pairs of lines is as follows:

The first line contains a single integer, *n*, the number of elements in *arr*.
The second line contains *n* distinct space-separated integers *arr*[ *i* ] where 0 ≤ *i* < *n*.

## Constraints

* Array  contains  distinct integers.

For **35%** of the maximum score:
* 1 ≤ *g* ≤ 10
* 1 ≤ *n* ≤ 1000
* 1 ≤ *arr*[ *i* ] ≤ 10<sup>5</sup>
* The sum of *n* over all games does not exceed 1000.

For **100%** of the maximum score:

* 1 ≤ *g* ≤ 100
* 1 ≤ *n* ≤ 10<sup>5</sup>
* 1 ≤ *a*<sub>*i*</sub> ≤ 10<sup>9</sup> 
* The sum of *n* over all games does not exceed 10<sup>5</sup>.