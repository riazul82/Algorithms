// Time: BigO(nlogn)
// Space: BigO(n)

const merge = (leftArr, rightArr) => {
    let left = 0;
    let right = 0;
    let sortedAra = [];

    while (left < leftArr.length && right < rightArr.length) {
        if (leftArr[left] <= rightArr[right]) {
            sortedAra.push(leftArr[left]);
            left ++;
        } else {
            sortedAra.push(rightArr[right]);
            right ++;
        }
    }

    return [...sortedAra, ...leftArr.slice(left), ...rightArr.slice(right)];
}

const mergeSort = (arr) => {
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let leftAra = arr.slice(0, mid);
    let rightAra = arr.slice(mid);

    return merge(mergeSort(leftAra), mergeSort(rightAra));
}

let sortedAra = mergeSort([8, 3, 5, 7, 6, 2, 1, 9, 4, 10]);
console.log(sortedAra); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]