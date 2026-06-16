import { test, expect, it, describe } from 'vitest'
import { isValidPassword, gradeCalculator } from '../src/main.js'

describe('isValidPassword', () => {
it('Should return true if the length of the input is greater than or equal to 8', () => {
  const password = 'Password123'
  const result = isValidPassword(password) 
  expect(result).toBe(true)
})

it('Should return false if the length of the input is less than 8', () => {
  const password = 'pass'
  const result = isValidPassword(password) 
  expect(result).toBe(false)
})

it('Should return false if no input', () => {
    const input = ''
    const result = isValidPassword(input)
    expect(result).toBe(false)
})

it('Should return true if the input contains uppercase letters', () => {
    const input = 'Password'
    const result = isValidPassword(input)
    expect(result).toBe(true)
})

it('Should return false if the input does not have uppercase letters', () => {
    const input = 'password'
    const result = isValidPassword(input)
    expect(result).toBe(false)
})
})

import { describe, it, expect } from 'vitest'
import { gradeCalculator } from '../src/main.js'

describe('gradeCalculator', () => {
  
  it('Should return 1.00 if the total score is 97 or above', () => {
    const grade = { prelims: 25, midterm: 25, finals: 25, lab: 25 }
    const result = gradeCalculator(grade)
    expect(result).toBe('1.00')
  })

  it('Should return 3.00 if the total score is exactly 75', () => {
    const grade = { prelims: 15, midterm: 20, finals: 20, lab: 20 } 
    const result = gradeCalculator(grade)
    expect(result).toBe('3.00')
  })

  it('Should return 5.00 if the total score is below 75', () => {
    const grade = { prelims: 10, midterm: 15, finals: 20, lab: 15 } 
    const result = gradeCalculator(grade)
    expect(result).toBe('5.00')
  })

  it('Should return INC if any grade component is missing', () => {
    const grade = { prelims: 20, midterm: 20, finals: 20 } 
    const result = gradeCalculator(grade)
    expect(result).toBe('INC')
  })

  it('Should return false if the score is greater than 100', () => {
    const grade = { prelims: 20, midterm: 20, finals: 20, lab: 300 } 
    const result = gradeCalculator(grade)
    expect(result).toBe('false')
  })

  it('Should return false if the score has negative', () => {
    const grade = { prelims: 0, midterm: -20, finals: -10, lab: 0 } 
    const result = gradeCalculator(grade)
    expect(result).toBe('false')
  })

  it('Should return false if the score has negative', () => {
    const grade = { prelims: 0, midterm: 0, finals: 0, lab: 0 } 
    const result = gradeCalculator(grade)
    expect(result).toBe('false')
  })

})