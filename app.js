// 1.N natural son berilgan. Dastlabki n ta toq sondan
// tashkil topgan array qaytaruvchi getInitialOdds(n)
// nomli function tuzing input: 3 output: [1,3,5]

// function getInitialOdds(n) {
//     let odds = []

//     for(let i = 0; i < n; i++) {
//         odds.push(2 * i + 1)

//     }
//     return odds
// }
// console.log(getInitialOdds(3));



//  2. string da nechta unli harf borligini toping bunda unli harflar
// ro'yxatini alohida array ko'rinishida shakllantirib olib keyin loop qilib bajaring

// let str = "salom"
// let arr = ["a","u","o","i","o'","A","U","O","I","O'"]

// function findVowels(n) {
//     let count = 0
//     for (let i = 0; i < n.length; i++) {
//         if (arr.includes(n[i])) {
//             count++
//         }
//     }
//     return `${count} ta unli harf bor`

// }
// console.log(findVowels(str));



// 3.N ta element dan iborat bo’lgan array yarating va arraydagi eng katta
// va eng kichkina sonlar o’rnini almashtiring: arr = [1, 3, 2, 0, 4, 5], result = [1,3,2,5,4,0]

// let arr = [1, 3, 2, 0, 4, 5];

// function maxNum(num) {
//   let max = num[0];
//   let min = num[0];

//   for (let index of num) {
//     if (max < num[index]) {
//       max = num[index];
//     }
//     if (min > num[index]) {
//       min = num[index];
//     }
//   }

//   let min_index = num.indexOf(min);
//   let max_index = num.indexOf(max);

//   num[min_index] = max;
//   num[max_index] = min;

//   return num;
// }
// console.log(maxNum(arr));



// 4. argument sifatida berilgan so'z da nechta a harfi 
// ishtirok etganini aniqlaydigan function tuzing

// function findA(str) {
//     let count = 0
//     for(let i = 0; i < str.length; i++) {
//         if (str[i] == "a") {
//             count++
//         }
//     }
//     return count
// }
// console.log(findA("salom"));



// 5. nums = [2,7,11,15], target = 9 => ixtiyoriy array va biron bir target nomli o'zgaruvchi olinsin. 
// Array ichidagi sonlar yig'indisi target ga teng bulgan sonlarni index si topilsin 
// Misol uchun 2 va 7 soni yig'indisi 9 ga teng, masala sharti mana shu 2 va 7 soni indexi console ga chiqarilsin

// let nums = [2,7,11,15]
// let target = 9 
// let result = []

// for (let i = 0; i < nums.length; i++) {
//     for (let g = 0; g < nums.length; g++) {
//        if (nums[i] + nums[g] === target) {
//             result.push(i)
//        }
        
//     }
    
// }
// console.log(result);




//  6. Ixtiyoriy n ta element dan iborat bo’lgan array yarating 
// va uning ichidagi dublicate bo’lgan item larni o’chiring:

// let arr = [1,2,3,4,6,3,8,3,5]
// let collect = []

// for (let i = 0; i < arr.length; i++) {
//     if (!collect.includes(arr[i])) {
//         collect.push(arr[i])
//     }
// }console.log(collect);

