/**
 * @description       : 
 * @author            : hcutipaa
 * @group             : 
 * @last modified on  : 07-15-2021
 * @last modified by  : hcutipaa@everis.com
 * Modifications Log 
 * Ver   Date         Author                Modification
 * 1.0   07-15-2021   hcutipaa              Initial Version
 **/
 import express from "express";
 import fetch from "node-fetch";
 
 //People endpoint https://60085fa0309f8b0017ee5e8a.mockapi.io/api/v1/people
 const API = 'https://60085fa0309f8b0017ee5e8a.mockapi.io/api/v1/people';
 const app = express();
 // const dataFake = [
 //     { "id": 1, "knownPeople": [3] },
 //     { "id": 2, "knownPeople": [3] },
 //     { "id": 3, "knownPeople": [] },
 //     { "id": 4, "knownPeople": [3] },
 //     { "id": 5, "knownPeople": [3] },
 //   ];
 app.get("/health", (req, res) => res.send("Ok"));
 
 app.get("/searchcelebrity", (req, res) => {
     fetch(API)
         .then(res => res.json())
         .then(body => res.send(evaluateCelebrity(body.data)));
 });
 
 /**
  *
  * @description Main method to evaluate celebrity in data response
  * @param {*} data
  * @return {*} 
  */
 const evaluateCelebrity = (data) => {
     //build Celebrity Matrix
     let matrix = buildCelebrityMatrix(data);
     let result;
     matrix = setUpCelebrityMatrix(matrix, data);
     console.log(matrix);
     try {
         let celebrityId = findCelebrityInMatrix(matrix, data.length);
         if (celebrityId === -1)
             result = {
                 error: 'No se encontro ninguna celebridad'
             }
         else {
             result = data.filter(obj => {
                 return obj.id == celebrityId + 1
             })[0];
         }
     } catch (error) {
         result = error;
     }
     return result;
 }
 /**
  *
  * @description Method to build new matrix based in number of persons
  * @param {*} people
  * @return {*} 
  */
 const buildCelebrityMatrix = (people) => {
 
     let length = people.length;
 
     let matrix = new Array(length).fill(0).map(() => new Array(length).fill(0));
     return matrix;
 }
 /**
  *
  * @description Method to fill matrix
  * @param {*} baseMatrix
  * @param {*} data
  * @return {*} 
  */
 const setUpCelebrityMatrix = (baseMatrix, data) => {
 
     data.forEach(element => {
         element.knownPeople.forEach(p => {
             baseMatrix[element.id - 1][p - 1] = 1;
         })
 
     });
 
     return baseMatrix;
 }
 /**
  *
  * @description Method to find celebrity 
  * @param {*} matrix
  * @param {*} persons
  * @return {*} result index
  */
 const findCelebrityInMatrix = (matrix, persons) => {
     let row = 0;
     let column = persons - 1;
     while (row < column) {
         if (matrix[row][column] == 1) {
             row++;
         } else {
             column--;
         }
     }
     for (let i = 0; i < persons; i++) {
         if ((i != row) && (matrix[row][i] == 1 || matrix[i][row] == 0)) {
             return -1;
         }
     }
     return row;
 
 }
 
 app.listen(3000, () => console.log("Server is Up"));