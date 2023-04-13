function arrInput(arr, displayValue) {
    let newArr = arr.map(number => number * number);
    displayValue(newArr);
}
let arr = [2, 3, 4, 5, 6];
arrInput(arr, function (result) {
    console.log(result);
});