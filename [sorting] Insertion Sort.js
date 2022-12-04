// Time: BigO(n^2)
// Space: BigO(1)

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i ++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            arr[j] = arr[j - 1] + (arr[j - 1] = arr[j]) - arr[j];
            j --;
        }
    }

    return arr;
}

let sortedAra = insertionSort([8, 3, 5, 7, 6, 2, 1, 9, 4, 10]);
console.log(sortedAra);