var arr = [2,2,2,2,5,5,5,8],
    k = 3,
    threshold = 4;

// function counts(arr,k,threshold){
//     let count = 0;
//     for(let j = arr.length - 1; j >= k - 1; j--){
//         let i = j - k + 1;
//         let newArr = arr.slice(i,j+1);
//         let result = newArr.reduce((a,b)=> a+b,0)
//         if((result / k) >= threshold) count = count + 1;
//     }
//     return count;
// }


function counts(arr,k,threshold){
    let target = threshold * k;
    let count = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];      

    }
    if(sum >= target) count = count + 1;

    for(let j = k; j < arr.length; j++){
        sum -= arr[j - k];
        sum += arr[j];
        if(sum >= target) count++;
    }
    return count;
}

console.log(counts(arr,k,threshold))