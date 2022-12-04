// Time: BigO(n^2)
// Space: BigO(1)

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1] + (arr[j + 1] = arr[j]) - arr[j];
            }
        }
    }

    return arr;
}

let sortedAra = bubbleSort([8, 3, 5, 7, 6, 2, 1, 9, 4, 10]);
console.log(sortedAra);