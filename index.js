
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};

// Return last two drivers function
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create fare multiplier
const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    };
};

// Fare doubler function
const fareDoubler = createFareMultiplier(2);

// Fare tripler function
const fareTripler = createFareMultiplier(3);

// Function to select different drivers
const selectDifferentDrivers = (drivers, fn) => {
    return fn(drivers);
};


const drivers = ['John', 'Jane', 'Doe', 'Smith'];
// output on console
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['John', 'Jane']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Doe', 'Smith']

console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30


