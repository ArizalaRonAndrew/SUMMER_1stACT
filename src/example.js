export function login(email, password){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const correctEmail = "juandelacruz@email.com";
    const correctPass = "Str0ngp@ssword";

    if(!emailPattern.test(email)) throw new Error('Invalid email');

    if(!passPattern.test(password)) throw new Error('Weak Password');

    if(email !== correctEmail || password !== correctPass) return 'Incorrect email or password';

    return 'Login Successful';

}