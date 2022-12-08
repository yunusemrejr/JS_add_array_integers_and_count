function xx() {
    let array1 = [];
    array1.push(1);
    array1.push(2);
    array1.push(3);

    array1 = array1.reduce(

        (joined, x) => joined + x);


    let resultNumber;
    resultNumber = parseInt(array1);
    console.log("array1 has 3 integers. When added together they give: " +
        resultNumber);

}

function xc() {
    let array_x = [];
    let array_y = [];

    array_y.push(4);
    array_y.push(1);
    array_y.push(5);
    array_y.push(3);
    array_y.push(2);
    array_y.push(6);
    array_y.push(7);
    array_y.push(9);
    array_y.push(8);

    for (i = 0; i < array_y.length; i++) {
        array_x.push(array_y[i]);
    }
    console.log("we have array_x and array_y. We pushed 9 different integers into array_y.\n" +
        "Then we started to iterate through the elements in array_y. \nWe added each element of array_y, into array_x." +
        "Now this is array_x: " + array_x + ". \nAnd this is array_x element count: " + array_x.length);
}





xx();
xc();