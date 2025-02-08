// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.gith-ub.io-2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// _.map, _.filter, _.reduce, _.each

/*
I: function takes in array
O: function returns the number of male customers
C:
E:
*/

var maleCount = function(array) {
// use filter on the array with callback function on customer
var males = _.filter(array, function(customer){
 // check to see if customer gender equals male   
 return customer.gender === 'male';
});
// male.length will tell us how many males are in the array
return males.length
};


/*
I: function takes in array
O: function returns the number of female customers
C:
E:
*/

var femaleCount = function(array){
var females = _.filter(array, function(customer){
return customer.gender === 'female'
})

return females.length
}

var oldestCustomer;

var youngestCustomer;

var averageBalance;


/*
I: function takes in an array and a letter
O: returns a number
   Find how many customers names begin with a given letter
C: Could use filter
   Should work with uppercase or lowercase
E:
*/

var firstLetterCount = function (array, letter){
// use filter on the array with callback function on customer
var firstLetter = _.filter(array, function(customer){
// return the customers name with letter in the first index - make lowercase
// set equal to letter set to lowercase
return customer.name[0].toLowerCase() === letter.toLowerCase()
 
});
// return the arrays length to get the number
return firstLetter.length

}

/*
I: An array, a customer, and a letter
O: A number
   Find how many friends of a given customer have 
   names that start with a given letter
C: Could use filter
E:
*/

var friendFirstLetterCount = function (array, customer, letter){
// fiilter through customer friends
var friendLetter = _.filter(customer.friends, function(friend){
 // return friends names to lower case set to equal letter
return friend.name[0].toLowerCase() === letter.toLowerCase()
})
return friendLetter.length
}



var friendsCount = function (array, name){

}

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
