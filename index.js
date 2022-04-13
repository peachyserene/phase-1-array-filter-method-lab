// takes array and string, returns an array of drivers who match the string
function findMatching(nameArray, givenString){
    let  newList = []
    nameArray.filter(function(element){
      if (element.toLowerCase() === givenString.toLowerCase()){
          newList.push(element)}  
    })
    return(newList)
}
//Tried making an arrow function with a ternary. It works the same but the if statement is more readable

/*  element => element === givenString ? newList.push(element) : newList.push()*/

//takes the first 2 letters and compares it through the names in the array
function fuzzyMatch(arrayNames, givenLetters){
    let updatedList = []
    arrayNames.filter(function(item){
        if (
          item.charAt(0) === givenLetters.charAt(0) 
          && 
          item.charAt(1) === givenLetters.charAt(1))
        updatedList.push(item)
    })
    return (updatedList)
}
//takes a name and returns the object with their info.
function matchName(driverList, nameSearch) {
    let driverResults = []  
    driverList.filter(function (dictionary) {
          if (dictionary.name === nameSearch)
          driverResults.push(dictionary)
      })
    return(driverResults)
  }
  //I called a varaible "dictionary", I know thats a python data structure but object is kind of a rediculous name...