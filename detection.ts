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

