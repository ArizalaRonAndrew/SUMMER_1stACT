import { test, expect, it, describe } from 'vitest'
import {login} from '../src/example.js'

describe("Login", () => {
    it("should return success message if the email and password is correct", () => {  
        const email = "juandelacruz@email.com"
        const password = "Str0ngp@ssword"
        expect(login(email, password)).toBeTruthy()   
    });

    it("should throw an error if email do not have @", () => {  
        const email = "juandelacruzemail.com"
        const password = "Str0ngp@ssword"
        expect(() => login(email, password)).toThrow("Invalid email")  
    });

    it("should throw an error if email do not have domain", () => {
        const email = "juandelacruz@"
        const password = "Str0ngp@ssword"
        expect(() => login(email, password)).toThrow("Invalid email")         
    });

    it("should throw an error if email is empty", () => { 
        const email = ""
        const password = "Str0ngp@ssword"
        expect(() => login(email, password)).toThrow("Invalid email")     
    });

    it("should throw an error if email is null", () => {  
        const email = null
        const password = "Str0ngp@ssword"
        expect(() => login(email, password)).toThrow("Invalid email")           
    });

    it("should throw an error if if password is less than 8 characters", () => {   
        const email = "juandelacruz@email.com"
        const password = "Str0ng"
        expect(() => login(email, password)).toThrow("Weak Password")           
    });

    it("should throw an error if password is empty", () => {
        const email = "juandelacruz@email.com"
        const password = ""
        expect(() => login(email, password)).toThrow("Weak Password")                 
    });

    it("should throw an error if password is null", () => {
        const email = "juandelacruz@email.com"
        const password = null
        expect(() => login(email, password)).toThrow("Weak Password")
    });

    it("should return warning message when email is incorrect", () => {  
        const email = "juandelacrud@email.com"
        const password = "Str0ngp@ssword"
        expect(login(email, password)).toMatch("Incorrect email or password")     
    });

    it("should return warning message when password is incorrect", () => {
        const email = "juandelacruz@email.com"
        const password = "Wr0ngP@ssword"
        expect(login(email, password)).toMatch("Incorrect email or password")
    });
})