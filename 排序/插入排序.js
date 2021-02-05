
var arr = [6, 2, 87, 12, 65];

function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i - 1;
        var temp = arr[i]
        while (temp < arr[j] && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}