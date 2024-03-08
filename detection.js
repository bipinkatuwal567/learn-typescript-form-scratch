function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 2;
}
function getId(id) {
    if (!id) {
        console.log("Id is not provided");
        return;
    }
    id.toLowerCase();
}
function printAll(value) {
    if (value) {
        if (typeof value === "object") {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var val = value_1[_i];
                console.log(value);
            }
        }
        if (typeof value === "string") {
            console.log(value);
        }
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
