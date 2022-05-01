# Number Line Jumping

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

* The first kangaroo starts at location *x*1 and moves at a rate of *v*1 meters per jump.
* The second kangaroo starts at location *x*2 and moves at a rate of *v*2 meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

## Example

*x*1 = 2
*v*1 = 1
*x*2 = 2
*v*2 =2

After one jump, they are both at *x* = 3, (*x*1 + *v*1 = 2 + 1, *x*2 + *v*2 = 1 + 2), so the answer is YES.

## Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

* int x1, int v1: starting position and jump distance for kangaroo 1
* int x2, int v2: starting position and jump distance for kangaroo 2

## Returns

* string: either YES or NO

## Input Format

A single line of four space-separated integers denoting the respective values of *x*1, *x*2, *v*1, and *v*2.

## Constraints

* 0 ≤ *x*1 < *x*2 ≤ 10,000
* 1 ≤ *v*1 ≤ 10,000
* 1 ≤ *v*2 ≤ 10,000
