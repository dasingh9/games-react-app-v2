const usersDb = [
    {
        email: 'john@example.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'secret123'
    },
    {
        email: 'donald.duck@example.com',
        firstName: 'Donald',
        lastName: 'Duck',
        password: 'secret456'
    }
]

export default class UserService {
    static authenticate(email, password) {
        const user = usersDb.find(user => user.email == email && user.password == password);
        if(!user)
            throw new Error("Authentication failed");
        return user;
    }
}