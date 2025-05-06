// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone1', () => {
  expect(isPhoneNumber("858-125-0295")).toBe(true);
});
test('valid phone2', () => {
  expect(isPhoneNumber("(858)-555-0295")).toBe(true);
});
test('invalid phone1', () => {
  expect(isPhoneNumber("528198592")).toBe(false);
});
test('invalid phone2', () => {
  expect(isPhoneNumber("my phone number!")).toBe(false);
});


test('valid email1', () => {
  expect(isEmail("rohanmadan123@gmail.com")).toBe(true);
});
test('valid email2', () => {
  expect(isEmail("googoogaagaa@yahoo.com")).toBe(true);
});
test('invalid email1', () => {
  expect(isEmail("rohanmadanemail")).toBe(false);
});
test('valid email2', () => {
  expect(isEmail("myemail@eeeeeeeeeeeeeee")).toBe(false);
});


test('strong password1', () => {
  expect(isStrongPassword("Rohan_Strong2")).toBe(true);  
});
test('strong password2', () => {
  expect(isStrongPassword("Strong_Pass123")).toBe(true);  
});
test('not strong password1', () => {
  expect(isStrongPassword("1234")).toBe(false);  
});
test('not strong password2', () => {
  expect(isStrongPassword("a!@#")).toBe(false);  
});


test('valid date1', () => {
  expect(isDate("10/14/2005")).toBe(true);
});
test('valid date2', () => {
  expect(isDate("05/14/2025")).toBe(true);
});
test('invalid date1', () => {
  expect(isDate("521-52222-09")).toBe(false);
});
test('invalid date2', () => {
  expect(isDate("jan fiften 05")).toBe(false);
});


test('valid hexcolor1', () => {
  expect(isHexColor("#f67e65")).toBe(true);
});
test('valid hexcolor2', () => {
  expect(isHexColor("#a97d74")).toBe(true);
});
test('invalid hexcolor1', () => {
  expect(isHexColor("hexcolor")).toBe(false);
});
test('invalid hexcolor2', () => {
  expect(isHexColor("baby bluee")).toBe(false);
});
