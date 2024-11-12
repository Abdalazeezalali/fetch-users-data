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
    phone?:string,
    company?:{
        name:string
    },
    params?:string
}
export type item = {
    id?: number;
    content?: string;
};