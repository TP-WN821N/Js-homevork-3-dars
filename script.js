// 1. prompt da kiritilgan songacha bo'lgan juft va toq sonlar yig'indisini toping va ular o'rtasidagi farqni ham console ga chiqaring
// let son = +prompt("Biror son kiriting !")
// const juftToq = (son) => {
//   let toq = 0
//   let juft = 0
//   for (let i = 0; i < son; i++) {
//     if (i % 2 == 0) {
//       juft += i;
//     } else {
//       toq += i
//     }
//   }
//   console.log(`Juft sonlar yig'indisi: ${juft}`)
//   console.log(`Toq sonlar yig'indisi: ${toq}`)
//   console.log(`Orasidagi farq: ${Math.abs(toq - juft)}`)
// }
// juftToq(5)


// 2. shunday function yarating ki argument sifatida berilgan songacha bo'lgan sonlarning yig'indisi qaytarsin (return qilsin)
// let son = +prompt("Biror son kiriting !")
// const yigindi = (son) => {
//   sum = 0
//   for (let i = 0; i < son; i++) {
//     sum += i;
//   }
//   return sum
// }
// yigindi(12)


// 3. array ni ichidagi sonlar yig'indisini topib beradigan algorithm yarating array sonlardan tashkil topsin
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrYigindi = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }
// arrYigindi(arr)


// 4. array ichidagi juft sonlar yig'indisini topadigan algorithm yarating
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrYigindi = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);
// }
// arrYigindi(arr)


// 5. shunday function yaratinki agument sifatida berilgan son array ichida bor yoki yo'qligini aniqlab bersin
// let search = (item) => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   let num = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       num++
//     }
//   }
//   if (num > 0) {
//     console.log("True Bor");
//   } else {
//     console.log("False yo'q");
//   }
// }


// 6. shunday function yaratinki argument sifatida berilgan son array ichida bor bo'lsa array dan olib tashlab agar bo'lmasa array ning oxiridan qo'shib qo'ysin
// let num = prompt("Biror son kiriting")
// const result = (num) => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   let a = 0

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       arr.splice(i, 1)
//     } else {
//       a++
//     }
//   }
//   // 10>=10
//   if (a >= arr.length) {
//     arr.push(num)
//   }

//   console.log(arr);
// }
// result(1)


// 7. array ichidagi birinchi va oxirgi sonlar o'rtasidagi farqni toping farq har doim musbat son chiqishi kerak
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function reset(arr) {
  sum = arr[0] + arr[arr.length - 1]
  console.log(sum);
}
reset(arr)

