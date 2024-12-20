// Write a program that takes a number (1 to 7) as input and prints the corresponding day of the week.

function dayOfWeek(number) {
    const days = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    };
    return days[number] || "Invalid input. Please enter a number from 1 to 7.";
}