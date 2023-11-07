{
    // get property from an array of object


    type User = {
        name: string;
        id: number;
        roll?: number
    }
    const users: User[] = [
        {
            name: "Dip",
            id: 1
        },
        {
            name: "Sithi",
            id: 2
        },
        {
            name: "Joy",
            id: 3
        },
    ]

    // property r man gular akta array return krba so return type T[K][]
const getPropertiesValue=<T,K extends keyof T>(x:T[],key:K):T[K][]=>{
    return x.map(obj=>obj[key])
}

console.log(getPropertiesValue(users,"name"));





const users1: User[] = [
    {
        name: "Dip",
        id: 1,
        roll:2
    },
    {
        name: "Sithi",
        id: 2,
        roll:5
    },
    {
        name: "Joy",
        id: 3,
        roll:3
    },
]

console.log(getPropertiesValue(users1,"roll"));

}