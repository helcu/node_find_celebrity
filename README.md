# Find Celebrity

## Description

In a team of n people, a celebrity is known by everyone but he/she doesn't know anybody.

The most important of this project is the algorithm used to solve the problem. There are two approach an imperative
and other functional method to resolve this problem.
## Prerequisites

Only it is necessary to have installed node

## Run

The project can be executed using the next command:

`npm run start`

## Example

### Celebrity Graph

![classdiagram](https://raw.githubusercontent.com/migvz/node_find_celebrity/main/images/graph.png)

The algorithm should find the person with id `4` 

### End point to get People Data

You can get the people data from https://60085fa0309f8b0017ee5e8a.mockapi.io/api/v1/people

### Check the celebrity

Check the result through of the next url

`http://localhost:3000/searchCelebrity`

### Expected response (Example)
`
{
    "id": 4,
    "knownPeople": [2, 5, 6]
}
`
## Others

The technologies used in this project were the next:

* Node
* Express