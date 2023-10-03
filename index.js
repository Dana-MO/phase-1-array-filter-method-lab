// Code your solution here

function findMatching(arr, name) {
    const listName = arr.filter(checkName);
    function checkName (driver) {
        return driver.toLowerCase() === name.toLowerCase();
    }
    return listName;
}

function fuzzyMatch(arr, letters) {
    const fuzzyList = arr.filter(checkLetters);
    function checkLetters(driver) {
        return driver.slice(0, letters.length) === letters;
    }
    return fuzzyList;
}

function matchName(arr, name) {
    const elementList = arr.filter(checkString);
    function checkString(element) {
        return element.name === name;
    }
    return elementList;
}