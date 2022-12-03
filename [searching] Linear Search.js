// Time: BigO(n)
// Space: BigO(1)

const linearSearch = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }

    return -1;
}

let findIndex = linearSearch([1, 4, 5, 9, 2, 6, 3, 7, 8, 10], 9);
console.log(findIndex); // 3