function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }

    return val + 2;
}

function getId(id: string | null){
    if(!id){
        console.log("Id is not provided")
        return
    }
    id.toLowerCase();
}

function printAll(value: string | string[] | null){
    if(value){
        if(typeof value === "object"){
            for(let val of value){
                console.log(value)
            }
        }
        if(typeof value === "string"){
            console.log(value);
        }
    }
}


function logValue (x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish food"
    }
    else{
        pet
        return "Bird food"
    }
}

/* Discriminated Union */

interface Square {
    kind: "square",
    side: number,
}

interface Circle{
    kind: "circle",
    radius: number,
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    breadth: number,
}

type Shape = Square | Circle | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return shape.radius ** 2
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle": 
            return shape.radius ** 2
        case "square": 
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.breadth
        default: {
            const _defaultForShape: never = shape;
            return _defaultForShape;
        }
    }
}