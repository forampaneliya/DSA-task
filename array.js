// let arr = [10, 20, 0, 40, 50, 60, 15, 8, 9];

// let pos=3;
// let element=65;
// // console.log(arr);
// for(let i=arr.length;i>pos;i--)
//     {
//         arr[i]=arr[i-1]
//     }
//     arr[pos]=element;
//     console.log(arr);

// let ser = 50;
// let flag=true

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == ser) 
//     {
//         console.log("true");
//         let flag = false



    // }

    // else {
        // i++;
        // console.log("false");   
        // let flag = false

    // }

// }
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let targetSum = 5;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === targetSum) {
      console.log(`The sum of ${targetSum} is found from elements ${arr[i]} and ${arr[j]} at indices ${i} and ${j}`);
    }
  }
}