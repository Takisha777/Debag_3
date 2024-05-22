//Source
/*
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
    totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);*/


const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
let salaryWithTax;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
    totalJuniorDevelopersSalary += salaryWithTax;
    console.log(salaryWithTax, totalJuniorDevelopersSalary);
    debugger;

}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
