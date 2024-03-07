abstract class TakePhoto{
    constructor(
        cameraMode: string,
        filter: string,
    ){}

    // using abstract in method it make inheriting class to have it compulsory
    abstract getSepia(): void

    // If i want to use some function
    getReelsNumber(): number{
        // complex calculation
        return 10;
    }
}

class Instagram extends TakePhoto{
    constructor(
        cameraMode: string,
        filter: string,
        burst: number,
    ){
        super(cameraMode, filter);
    }
    getSepia(){
        console.log("Sepia");
    }
}

const forest = new Instagram("test", "test", 7);