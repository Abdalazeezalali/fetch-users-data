export type User={
    id?:string,
    name?:string,
    email?:string,
    address?:{
        street?:string,
        suite?:string,
        city?:string,
        zipcode?:string
    },
    phone?:number,
    company?:{
        name:string
    },
    params?:string
}