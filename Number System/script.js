// Check Ready State

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("complete");
        initApp();
    }
});


// Prime Number
const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const togglePrimeNumber = (event) => {
    event.preventDefault();
    resetBlockColors();
    const blocks = document.querySelectorAll("#view2 > div");
    blocks.forEach(block => {
        const number = parseInt(block.textContent);
        if (isPrime(number)) {
            block.style.backgroundColor = "black"; 
            block.style.color = "white";
        }
    });
}


// Scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// code Start
const initApp = () => {
    document.getElementById("Go").onclick = (event) => {
        let firstNumber = parseFloat(document.getElementById("first").value.trim());        //Assign first Number
        let lastNumber = parseFloat(document.getElementById("last").value.trim());          //Assign Last Number


        // let firstNumber = Math.floor(firstNumbers);
        // let lastNumber = Math.floor(lastNumbers);            //Avoid Float Numbers



        event.preventDefault();
        if (!isNaN(firstNumber) && !isNaN(lastNumber)) {
            if (firstNumber <= lastNumber) {
                generateBlocks(firstNumber, lastNumber);
            } else {
                alert("Check the Number \n Enter first number is Smaller than last Number");
            }
        } else {
            alert("Please enter valid numbers");
        }

        scrollToTop();
    }


    // Event listener for toggling odd numbers
    document.getElementById("oddNumber").addEventListener("click", toggleOddNumbers);


    // Event listener for toggling even numbers
    document.getElementById("evenNumber").addEventListener("click", toggleEvenNumbers);


    // Event listener for toggling Prime numbers
    document.getElementById("primeNumber").addEventListener("click", togglePrimeNumber);


    // Event listener for Reset All
    document.getElementById("resetAll").addEventListener("click", resetAll);


    // Event listener for scrolling to top when any button is clicked
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", scrollToTop);
    });
}


// Create a Blocks
const createDiv = (parent, content) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = content;
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.color = "black";
    newDiv.style.display = "flex";
    newDiv.style.flexWrap = "wrap";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
    return newDiv;                   // Return the newly created div
}

const generateBlocks = (start, end) => {
    const view2 = document.getElementById("view2");
    view2.innerHTML = '';              // Clear existing blocks

    for (let i = start; i <= end; i++) {
        const newDiv = createDiv(view2, i);
        newDiv.addEventListener("click", function() {               //Square Value
            const number = parseInt(this.textContent);
            const squaredValue = number * number;
            this.style.backgroundColor = "purple"
            this.style.color = "white"
            this.textContent = squaredValue;
        });
    }
}


// Odd Number
const toggleOddNumbers = (event) => {
    event.preventDefault();
    resetBlockColors();
    const blocks = document.querySelectorAll("#view2 > div");
    blocks.forEach(block => {
        const number = parseInt(block.textContent);
        if (number % 2 !== 0) {
            block.style.backgroundColor = "green";
            block.style.color = "white";
        }
    });
}


// Even Number
const toggleEvenNumbers = (event) => {
    event.preventDefault();
    resetBlockColors();
    const blocks = document.querySelectorAll("#view2 > div");
    blocks.forEach(block => {
        const number = parseInt(block.textContent);
        if (number % 2 === 0) {
            block.style.backgroundColor = "blue";
            block.style.color = "white";
        }
    });
}


// Reset Colors
const resetBlockColors = () => {
    const blocks = document.querySelectorAll("#view2 > div");
    blocks.forEach(block => {
        block.style.backgroundColor = "yellow";
        block.style.color = "black";
    });
}


// Reset All
const resetAll = () => {
    location.reload();
}