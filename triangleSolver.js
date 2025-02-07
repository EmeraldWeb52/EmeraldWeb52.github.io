document.addEventListener("DOMContentLoaded", function() {
    const sideA = document.getElementById("sideA");
    const sideB = document.getElementById("sideB");
    const sideC = document.getElementById("sideC");
    const missingSide = document.getElementById("missingSide");

    function calculateMissingSide() {
        const a = parseFloat(sideA.value);
        const b = parseFloat(sideB.value);
        const c = parseFloat(sideC.value);

        if (isNaN(a) && isNaN(b) && isNaN(c)) {
            missingSide.textContent = "Enter values to calculate";
            return;
        }

        if (!isNaN(a) && !isNaN(b) && isNaN(c)) {
            // Both sides A and B are provided, calculate C (hypotenuse)
            const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            missingSide.textContent = `Hypotenuse (Side C): ${hypotenuse.toFixed(2)}`;
        } else if (!isNaN(a) && isNaN(b) && !isNaN(c)) {
            // Side A and Hypotenuse are provided, calculate B
            if (c <= a) {
                missingSide.textContent = "Side C must be largest side";
                return;
            }
            const sideBLength = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            missingSide.textContent = `Side B: ${sideBLength.toFixed(2)}`;
        } else if (isNaN(a) && !isNaN(b) && !isNaN(c)) {
            // Side B and Hypotenuse are provided, calculate A
            if (c <= b) {
                missingSide.textContent = "Side C must be largest side";
                return;
            }
            const sideALength = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
            missingSide.textContent = `Side A: ${sideALength.toFixed(2)}`;
        } else if (!isNaN(c) && (c <= a || c <= b)) {
            // If C is provided but is not the largest side
            missingSide.textContent = "Side C must be largest side";
        } else {
            missingSide.textContent = "Please leave one side blank to calculate it";
        }
    }

    sideA.addEventListener("input", calculateMissingSide);
    sideB.addEventListener("input", calculateMissingSide);
    sideC.addEventListener("input", calculateMissingSide);
});