const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

function showInfo() {
    const petNumberInput = document.querySelector("#petNum").value;
    const index = parseInt(petNumberInput, 10) - 1; 

    if (isNaN(index) || index < 0 || index >= petsData.length) {
        document.querySelector(".selectedPetInfo").textContent = `Please enter a number between 1 and ${petsData.length}.`;
        return; 
    }

const pet = petsData[index];
const output = `${pet.petName} is ${pet.age} years old. ` + `This pet weighs ${pet.weightInKilos} kilos and is a ${pet.breed} breed.`;

document.querySelector(".selectedPetInfo").textContent = output;
}