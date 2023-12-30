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

function calculateTotalSpentByCategory(transactions) {
  let m=new Map();
  for(let i=0;i<transactions.length;i++){
    console.log(m.has(transactions[i]["category"]));
    if(!m.has(transactions[i]["category"])){
      m.set(transactions[i]["category"],transactions[i]["price"]);
    }
    else{
      const t=m.get(transactions[i]["category"]);
      console.log(t);
      m.set(transactions[i]["category"],transactions[i]["price"]+t);
    }
  }
  let ans=[];
  m.forEach((b,a)=>{
    ans.push({category:a,totalSpent:b});
  }
  )
  return ans;
}

// module.exports = calculateTotalSpentByCategory;
let transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656259600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			{
				id: 3,
				timestamp: 1656019200000,
				price: 15,
				category: 'Clothing',
				itemName: 'T-Shirt',
			},
			{
				id: 4,
				timestamp: 1656364800000,
				price: 30,
				category: 'Electronics',
				itemName: 'Headphones',
			},
			{
				id: 5,
				timestamp: 1656105600000,
				price: 25,
				category: 'Clothing',
				itemName: 'Jeans',
			},
		]
console.log(calculateTotalSpentByCategory(transactions));
