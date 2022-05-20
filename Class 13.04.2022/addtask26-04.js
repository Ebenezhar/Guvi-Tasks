const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  
  let names1 = scores.map((n)=>n.name);
  console.log(names1);
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
  // Array of objects -> Array of string (Transform)

  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  let names2 = scores.filter((n)=> n = n.marks >= 40);
  console.log(names2);
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]
  
  // Task 3
  //  Find all the names who failed the exams (Array methods)

  let names3 = scores.filter((n)=> scores.name = n.marks < 40);
  console.log(names3.map((n)=>n.name));

  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];
  
  // Task 4
  // Find the Average marks
  //  41

  let total = scores.map((n)=>n.marks);
  let avg = total.reduce((sum,curr)=>sum+curr);
  console.log((avg/scores.length).toFixed());  
  
  // Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"

  let names4 = scores.map((n)=> a = Math.max(n.marks));
  console.log(names4);
  
  // Only use
  // map, reduce, filter
  