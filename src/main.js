//1.If the length of the input is greater than or equal to 8, return true
//2.If the length of the input is less than 8, return false
//3.If no input, return false
//4.If the input contains uppercase letters, return true
//5.If the input does not have upper case letters, return false

export function isValidPassword(password) { 
  if (password.length >= 8 && /[A-Z]/.test(password)) {
    return true
  }
   return false;
}

export function gradeCalculator(grades) {
 

  const { prelims, midterm, finals, lab } = grades
  const total = prelims + midterm + finals + lab

  if (total > 100 || total<= 0) return 'false'
  if (total >= 97) return '1.00'
  if (total >= 95) return '1.25'
  if (total >= 91) return '1.50'
  if (total >= 88) return '1.75'
  if (total >= 85) return '2.00'
  if (total >= 82) return '2.25'
  if (total >= 79) return '2.50'
  if (total >= 76) return '2.75'
  if (total >= 75) return '3.00'
  if (total < 75) return '5.00'

  if (!grades || grades.prelims == null || grades.midterm == null || grades.finals == null || grades.lab == null) {
    return 'INC'
  }

 
   
}