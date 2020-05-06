import {fifaData} from "./fifa.js"


// ⚽️ M  V P ⚽️ //

//* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

//? (a) Home Team name for 2014 world cup final 
    //! console.log(fifaData[828]["Home Team Name"])
//? (b) Away Team name for 2014 world cup final*/
    //! console.log(fifaData[828]["Away Team Name"])
//? (c) Home Team goals for 2014 world cup final
    //! console.log(fifaData[828]["Home Team Goals"])
//? (d) Away Team goals for 2014 world cup final
    //! console.log(fifaData[828]["Away Team Goals"])
//? (e) Winner of 2014 world cup final */
    //! console.log(fifaData[828]["Win conditions"])







  //? Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data 

// ES6

//*  const getFinals = data => data.filter( final => final.Stage === "Final");

function getFinals(data) {
     const finals = data.filter( finalGame => finalGame.Stage == "Final")
    
     return finals
}

   //! console.log(getFinals(fifaData))



//? Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, 
//? and returns an array called `years` containing all of the years in the dataset */


function getYears(callback) {
    const newArr = callback(fifaData)
    
    const years =newArr.map( finalYears => finalYears.Year)
    
    return years
}

//!   console.log(getYears(getFinals))





/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine
 the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

//  



function getWinners(callback) {
    
        const getTeam = callback(fifaData)
     
        const winners = getTeam.map( wins => {
            if(wins["Home Team Goals"] >= wins["Away Team Goals"])
                return wins["Home Team Name"]
            return wins["Away Team Name"]
            
        })
            
        return winners
      
    }

 //! console.log(getWinners(getFinals)) 

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following
 parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


function getWinnersByYear(winners,years) {
    const winingTeams = winners(getFinals);
    const winningYears = years(getFinals);   
    
    const arrayOfString = winningYears.map((year, index) => `In ${year}, ${winingTeams[index]} won the world cup!`)
    return arrayOfString
};

 //! console.log(getWinnersByYear(getWinners,getYears))

//? Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and 
//? returns the number of world cup wins that country has had. 

//Hint: Investigate your data to find "team initials"!
//Hint: use `.reduce` */



function getWinTeams(array){
    let data = getFinals(array)
    console.log(data)
    let worldCupWinners = []
    
    data.map( team => {
        if(team["Away Team Goals"] > team["Home Team Goals"]){
            worldCupWinners.push({teamName: team["Away Team Name"], teamInital: team["Away Team Initials"], years: team.Year, goals: team["Away Team Goals"] })
            
        }else if(team["Home Team Goals"] > team["Away Team Goals"]){
           worldCupWinners.push({teamName: team["Home Team Name"],teamInital: team["Home Team Initials"], years: team.Year, goals: team["Home Team Goals"] })
            
        }else if(team["Home Team Goals"] == team["Away Team Goals"] ){
            const getTeamName = team["Win conditions"].split(' ')
            const teamInitals = team["Win conditions"].split('').slice(0,3).join('').toUpperCase()
            worldCupWinners.push({teamName: getTeamName[0], teamInital: teamInitals, years: team.Year})
                  
         }
        
    })
 
    return worldCupWinners
  

}

//! console.log(getWinTeams(fifaData))




function getCountryWins(data,teamInitials) {
    const teams = data(fifaData)
    
    const winningCount = teams.reduce((total, team) =>  team.teamInital == teamInitials ? total+1 : total, 0)
     

    return  `${teamInitials} has won ${winningCount} world cup`
}



//!   console.log(getCountryWins(getWinTeams, 'BRA')) 




/* Task 9: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number 
of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// const test = [1, 2, 3, 23, 4, 5, 2134, 5] // 272.125

function getAverageGoals(data) {
    const homeGames = data.map( goals => goals["Home Team Goals"])
    const awayGames = data.map( goals => goals["Away Team Goals"])
    const  reducer = (total, currentValue) => total + currentValue
    
    let homeGamesReduce = homeGames.reduce(reducer) / homeGames.length
        homeGamesReduce = homeGamesReduce.toFixed(2);
    let awayGamesReduce = awayGames.reduce(reducer) / homeGames.length
        awayGamesReduce = awayGamesReduce.toFixed(2);

    return `The Average goals are: 
            Home Games ${homeGamesReduce} 
            Away Games: ${awayGamesReduce}`
     
    


} 

//! console.log(getAverageGoals(fifaData))


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and 
returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(callback) {
const data = callback(fifaData)
console.log(data)

    const eachGame= []
    
    data.map( element => {
       if(element["Away Team Goals"]  && element["Home Team Goals"] ){
           eachGame.push(
               {
                awayTeam: element["Away Team Name"],
                awayTeamGoals: element["Away Team Goals"],
                homeTeam: element["Home Team Name"], 
                homeTeamGoals: element["Home Team Goals"], 
                date: element["Datetime"]
            })
       }
    })

   console.log(eachGame)
   eachGame.filter(e => eachGame.awayTeamGoals)
   
};

 console.log(getGoals(getFinals))


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals
 scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */



// function getCountryWins(data,teamInitials) {
//     //CallBack Data
//    const teams = data(fifaData)
  
//    const teamWon = [] //World cup winners

//    // For loop to get the name, inital and years of the world cup winner.
//    for(let i = 0; i < teams.length; i++){
//        if(teams[i]["Home Team Goals"] >= teams[i]["Away Team Goals"] ){
//             teamWon.push(
//                 {  
//                    teamName: teams[i]["Home Team Name"],
//                    teamInital: teams[i]["Home Team Initials"],
//                    yearWon: teams[i]["Year"]
//                })
//        }else {
//            teamWon.push(
//                {   
//                    teamName: teams[i]["Away Team Name"],
//                    teamInital: teams[i]["Away Team Initials"],
//                    yearWon: teams[i]["Year"]
//                })
//        }
//    }

// }