export  class Account {
    username: string
    password: string
    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }
}
export class User extends Account {
    email: string 
    constructor(username: string, password: string, email: string) {
        super(username,password)
        this.email = email
    }
}
// export class Error{
//     length?: number
//     id?:number

//     Require(param: string) : string{

//     }

//     RequireLong(params:number) : string {
        
//     }

//     RequireShort(params:number) : string {
//         return ""
//     }
// }