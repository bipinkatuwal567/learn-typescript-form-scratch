interface User {
    readonly dbId: number;
    name: string;
    id: number;
    googleId?: string;
    // startTrial: () => string;
    startTrial(): string;
    getCoupon(couponname: string, value: number): number;
}

const user :User = {
    dbId: 5,
    name: "Forest",
    id: 123,
    startTrial: () => {
        return "started a trial"
    },
    getCoupon: (coupon: "forest", off: 56) => {
        return 2;
    }
}




export {}