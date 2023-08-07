export  class Account {
    Username: string
    Password: string    
    constructor(Username: string, Password: string) {
        this.Username = Username
        this.Password = Password
    }
}
export class User extends Account {
    email: string 
    constructor(Username: string, Password: string, email: string) {
        super(Username,Password)
        this.email = email
    }
}
