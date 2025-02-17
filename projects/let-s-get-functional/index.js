// #!/usr/bin/env node

'use strict';

const { isArray } = require('lodash');
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


   const totalBalance = _.reduce(array, function(acc, item){
   
   // use Number() to convert string to a number by taking out $ and , 
   var balance = Number(item.balance.replace(/[\$,]/g, ''))   

   return acc + balance

   
      
   },0);

   // calculate the balance 
   let averagedBalance =  totalBalance / array.length

   return averagedBalance
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

/*
I: array, name
O: array
C: 
E:
*/

var friendsCount = function (array, name){
// filter through array of customers
let countFriends = _.filter(array, function(customer){

   // use some to check if any of the names we're looking for
   return _.some(customer.friends, function(friend){

   // check to see if any of the friends names equal name input
      return friend.name === name;


   })
})

// use map to iterate over the filtered customers array
// creates new array
.map(function(customer){
   return customer.name
})

return countFriends;

}

/*
I: takes in an array
O: array
   find the three most common tags among all customers
   associated tags
C:
E:
*/

var topThreeTags = function(array){

// use reduce first then sort 
   
let threeTags = _.reduce (array, function(acc, customer){
acc = acc.concat(customer.tags)

return acc

}, []);


let tagFrequency = _.reduce(threeTags, function(acc, current){
  if(acc[current]){
   acc[current]++
  } else {
   acc[current] = 1
  }
  return acc
}, {})
 console.log(tagFrequency)

}




/*
I: takes in an array
O: Object
C: use reduce
   create a summary of genders
   male: 3,
   female: 4,
   non-binary: 1
E:
*/

var genderCount = function(array) {
   l
}
   // reduce -  this one is hard

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
