class Account {
    username: string
    password: string
    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }
}

class User extends Account {
    email: string 
    constructor(username: string, password: string, email: string) {
        super(username,password)
        this.email = email
    }
}