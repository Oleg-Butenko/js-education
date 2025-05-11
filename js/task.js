"use strict"

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// function calculateEvenTotal(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i += 2) {
//             sum += i;
//         }

//     return sum;
// }
    

// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

// const start = 5;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

// console.log(number);

    // function findNumber(max, target) {
    // 	console.log("Log in the body of the function before the cycle");

    // 	for (let i = 1; i <= max; i += 1) {
    // 	    console.log("Current counter value i:", i);
        
    // 	    if (i === target) {
    // 	      console.log(`Found the number ${target}, we make a return, interrupting the loop and function`);
    // 				return i;
    // 	    }
    // 	  }

    //   // Цей console.log не виконується
    //   console.log("Log in body function after cycle");
    // }

    // const result = findNumber(10, 6);
    // console.log("Log after exiting function");
    // console.log(`Result of function execution ${result}`);


//     Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//     for (let i = start; i <= end; i++) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }
// }

// console.log(findNumber(5, 10, 4));