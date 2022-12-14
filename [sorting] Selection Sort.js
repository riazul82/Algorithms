// Time: BigO(n^2)
// Space: BigO(1)

let selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            arr[i] = arr[minIndex] + (arr[minIndex] = arr[i]) - arr[i];
        }
    }

    return arr;
}

let sortedAra = selectionSort([8, 3, 5, 7, 6, 2, 1, 9, 4, 10]);
console.log(sortedAra);