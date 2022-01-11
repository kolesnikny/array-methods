/*1. Даны два массива - [1, 2, 3] и [4, 5, 6]. Объедините их вместе (concat)*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arrayConcat = array1.concat(array2);
//console.log(arrayConcat);

/*2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1](reverse).*/
const arrayReverse = array1.slice();

arrayReverse.reverse();
//console.log(arrayReverse);

/*3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6*/

const arrayPush = array1.slice();

arrayPush.push(4, 5, 6);
//console.log(arrayPush);

/*4. Дан массив [1, 2, 3]. Добавьте ему в начало 7, 8, 9.*/

const arrayUnshift = array1.slice();

arrayUnshift.unshift(7, 8, 9);
//console.log(arrayUnshift);

/*5. Дан массив ['aaa', 'bbb', 'ccc']. Выведите на экран первый элемент и удалите его.*/

const arrayShift = ['aaa', 'bbb', 'ccc'];

console.log(arrayShift.shift());
// console.log(arrayShift);

/*6. Дан массив ['ddd', 'fff', 'eee']. Выведите последний элемент на экран.*/

const arrayPop = ['aaa', 'bbb', 'ccc'];

//console.log(arrayPop.pop());
//console.log(arrayPop);

/*7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы с третьего по пятый.*/

/*8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы со второго по четвертый.*/

/*9. С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 4, 5]*/

/*10. С помощью метода splice из массива [1, 2, 3, 4, 5] запишите в новый массив элементы [2, 3, 4].*/

/*11. С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 'w', 'tr', 2, 3, 4, 'vv', 5, 'a']*/

/*12. Дан массив [5, 8, 2, 4, 7, 1]. Отсортируйте его по возрастанию.*/
