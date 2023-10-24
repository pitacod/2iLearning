import { User } from "./user"

export interface Course {
    id:number,
    title:string,
    price:number
    image:string,
    rate:number,
    instructor:User

}
