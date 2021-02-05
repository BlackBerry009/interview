var arr = [6, 2, 87, 12, 65];

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left > right) return;
    var leftPoint = left;
    var rightPoint = right;
    var temp = arr[left];
    while (leftPoint != rightPoint) {
        while (leftPoint < rightPoint && arr[rightPoint] >= temp) {
            rightPoint--;
        }
        while (leftPoint < rightPoint && arr[leftPoint] <= temp) {
            leftPoint++;
        }
        if (leftPoint < rightPoint) {
            var d = arr[leftPoint];
            arr[leftPoint] = arr[rightPoint];
            arr[rightPoint] = d;
        }
    }
    arr[left] = arr[leftPoint];
    arr[leftPoint] = temp;
    quickSort(arr, left, leftPoint - 1);
    quickSort(arr, leftPoint + 1, right);
    return arr;

}