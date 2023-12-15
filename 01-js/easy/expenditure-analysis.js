/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions = []) {
  let result = [];

  let found = false;

  for (let i = 0; i < transactions.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result.length > 0) {
        if (transactions[i]["category"] === result[j]["category"]) {
          found = true;
        }
      }
    }
    if (found === false) {
      result.push({ category: transactions[i]["category"], "totalSpent": 0 });
    }
    found = false;
  }

  for (let i = 0; i < transactions.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (transactions[i]["category"] === result[j]["category"]) {
        Reflect.set(result[j], "totalSpent", result[j]["totalSpent"] + transactions[i]["price"])
      }
    }
  }

  return result;
}

console.log(
  calculateTotalSpentByCategory([
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656105600000,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
    },
    {
      id: 3,
      timestamp: 1656134400000,
      price: 30,
      category: 'Food',
      itemName: 'Sushi',
    },
  ])
);

module.exports = calculateTotalSpentByCategory;
