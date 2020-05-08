/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and 
returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(callback) {
  const data = callback(fifaData)
  // console.log(data)
  let test1 = []  
  
    const team =  data.filter( e => {
       test1.push({team: e["Away Team Name"], score: e["Away Team Goals"]  },
       {team: e["Home Team Name"], score: e["Home Team Goals"] } )
       
     
      })
      console.log(test1)
      
        const totalAperrance = test1.reduce((acc, obj) => {
             
              let key = obj.team
              
              if (!acc[key]) {
                  acc[key] = 0
              }
              if (obj.team ) {
                  acc[key]++
                 
              } else {
                  acc[obj.team]++
                  
              }
              return acc
          }, {})
          // return results
  
          console.log(totalAperrance)
  
          const scoreSum = test1.reduce((acc, obj) => {
             
              let key = obj.team
              let score = obj.score
              if (!acc[key]) {
                  acc[key] = 0
              }
              if (obj.team ) {
                  acc[key]+= score
                 
              } else {
                  acc[obj.team]+= score
                  
              }
              return acc
          }, {})
  
   console.log(scoreSum)
  
          let highestAvareage = ''
          let currentScore = 0
          for(let country in totalAperrance){
              
              if((scoreSum[country] / totalAperrance[country]) > currentScore){
                  highestAvareage = country
                  currentScore = scoreSum[country] / totalAperrance[country]
              }
          
          }
          
          let tiedTeams = [highestAvareage]
          for(let country in totalAperrance){
              
              if(((scoreSum[country] / totalAperrance[country]) == scoreSum[highestAvareage]) && highestAvareage !== country){
                 tiedTeams.push(country)
              }
          
          }
  
          
              return `${tiedTeams[0]} and ${tiedTeams[1]} have the most goals score per appearance`
  
  
  

  
  }
    console.log(getGoals(getFinals))
  
  
  /* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals
   scored against them per appearance (average goals against) in the World Cup finals */
  
  function badDefense(/* code here */) {
  
      /* code here */
  
  };
  
  badDefense();