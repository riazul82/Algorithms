// Time: BigO(logn)
// Space: BigO(1)

const binarySearch = (arr, x) => {
    let left = 0;
    let right = arr.length;

    while (left <= right) {
        let mid = Math.floor((right - left) / 2 + left);

        if (arr[mid] === x) return mid;

        if (arr[mid] > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

let findIndex = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
console.log(findIndex); // 7