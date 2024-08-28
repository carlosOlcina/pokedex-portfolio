import { useEffect, useState } from "react";


export function useFilterMove(data){
  const [filteredData, setFilteredData] = useState()

  useEffect(()=>{
    if(data){
      
      let levelUpMoves = ['level-up'];
      let  machineMoves= ['machine'];
      let tutorMoves = ['tutor'];
      let eggMoves = ['egg'];
    
      data.forEach((move)=>{
        if (move.learnMethod === 'machine'){
          machineMoves.push(move.name)
        } else if (move.learnMethod === 'level-up'){
          levelUpMoves.push(move.name)
        } else if (move.learnMethod === 'tutor'){
          tutorMoves.push(move.name)
        } else if (move.learnMethod === 'egg'){
          eggMoves.push(move.name)
        }
      })
      setFilteredData([levelUpMoves, machineMoves, tutorMoves, eggMoves])
  }
  },[data])
  
  return filteredData
}
