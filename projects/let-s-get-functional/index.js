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
const numFemales = _.reduce(array,function(acc, current){
   // check if each gender element is equal to feamle
 if(current.gender === "female"){
   // if yes, increment acc count
   acc++
 }
 // return acc
 return acc
}, 0)

  return numFemales
}

var oldestCustomer = function(array){
   const oldest = _.reduce(array, function(acc, item){
      // check to see if items age is greater than acc
      // if not move on and keep checking
if (item.age > acc.age){
   return item
} else {
   return acc
}

  // don't need a seed value. the first item will become the seed. The firset object will be the seed   
   });
   return oldest.name
};

/*
I: takes in an array
O: a string
C: must use reduce
E: NA
*/


var youngestCustomer = function(array){
const youngest = _.reduce(array, function(acc, current){
   // check if the current age is less than acc 
   // if so retrun current item else return acc
if(current.age < acc.age){
   return current
} else {
   return acc
}
// do not need a seed value because we're checking against the first/current object again
});
// return youngest
return youngest.name
}

/*
I: array
O: number
C: reduce
E:
*/


var averageBalance = function(array){
   const balance = _.reduce(array, function(acc, current){
   return acc + current.balance

   
      
   },0);
   const averageBalance =  balance / array.length

   return averageBalance
};


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
// use find to locate a specifc customer object
var customerObj = array.find(function(item){
   // use item.name to locate specific customer
   return item.name === customer
});
  // if a customer object is not found return zero
if (!customerObj){
   return 0;
}

// fiilter through customer objects friends
var friendLetter = _.filter(customerObj.friends, function(friend){
 // return friends names first letter to lower case set to equal letter lowercaseed
return friend.name[0].toLowerCase() === letter.toLowerCase()
});

// retrun length of the array 
return friendLetter.length
}



var friendsCount = function (array, name){

}

var topThreeTags;

var genderCount; // reduce -  this one is hard

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
