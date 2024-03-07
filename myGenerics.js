var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityFour(5);
identityFour("Hey");
function identityFive(val) {
    return val;
}
identityFive({ type: 4, brand: "whatever" });
function getSearchProduct(products) {
    // some database operation
    var myIndex = 7;
    return products[myIndex];
}
/* Using Arrow function */
var getArrowSearchProduct = function (products) {
    // some database operation
    var myIndex = 10;
    return products[myIndex];
};
