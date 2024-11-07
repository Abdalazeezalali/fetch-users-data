export const baseUrl="https://jsonplaceholder.typicode.com"
export const userEndPoints={
    users:`${baseUrl}/users`,
    user:(id:string)=>`${baseUrl}/users/${id}` as const,
}as const
