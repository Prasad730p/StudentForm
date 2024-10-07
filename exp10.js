// multiplicationTable.js

// Get the number from the command-line arguments
const number = parseInt(process.argv[2]);

// Check if a valid number is provided
if (isNaN(number)) {
    console.log("Please provide a valid number.");
    process.exit(1);
}

// Function to generate multiplication table
const generateMultiplicationTable = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

// Generate and print the multiplication table
generateMultiplicationTable(number);
