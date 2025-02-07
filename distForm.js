document.addEventListener("DOMContentLoaded", function() {
    const input1 = document.getElementById("numberInput1");
    const input2 = document.getElementById("numberInput2");
    const input3 = document.getElementById("numberInput3");
    const input4 = document.getElementById("numberInput4");
    const displayValue = document.getElementById("displayValue");

    function calculateDistance() {
        const x1 = parseFloat(input1.value);
        const y1 = parseFloat(input2.value);
        const x2 = parseFloat(input3.value);
        const y2 = parseFloat(input4.value);

        console.log(`x1: ${x1}, y1: ${y1}, x2: ${x2}, y2: ${y2}`);  // Debugging log

        // Check if all inputs are valid numbers
        if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
            const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            displayValue.textContent = distance.toFixed(2); // Display distance with 2 decimals
        } else {
            displayValue.textContent = "Invalid input";  // Show if any value is invalid
        }
    }

    // Add event listeners to calculate distance when inputs change
    input1.addEventListener("input", calculateDistance);
    input2.addEventListener("input", calculateDistance);
    input3.addEventListener("input", calculateDistance);
    input4.addEventListener("input", calculateDistance);
});