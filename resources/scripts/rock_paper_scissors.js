class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user:0,
      cpu:0 
      
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    
    const random = Math.floor(Math.random() * acceptedValues.length);
    return(acceptedValues[random]);
    
  }

  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){


    if(userSelection === cpuSelection){
      
      return "tie";
    } else if(userSelection === "rock" && cpuSelection === "scissors")
      {return "win"}
      else if(userSelection === "paper" && cpuSelection === "rock"){
        return "win"}
      else if(userSelection === "scissors" && cpuSelection === "paper")
      {return "win";
      } else{
      return "lose";
      }
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){

    
    const cpuSelection = this.generateCPUResponse();
    const winner = this.determineWinner(userSelection, cpuSelection);

    if(winner === "win"){
      // if the user won the round
      this.score.user++;
      this.gameHistoryLog.push(this.user + "selected" + this.userSelection + "," + this.cpu + "selected" + this.cpuSelection + ":" + this.user + "wins");
    } else if(winner === "lose"){
      // if the user cpu the round
      this.score.cpu++;
      this.gameHistoryLog.push(this.user + "selected" + this.userSelection + "," + this.cpu + "selected" + this.cpuSelection + ":" + this.cpu + "wins");
    } else{
      this.gameHistoryLog.push(this.user + "selected" + this.userSelection + "," + this.cpu + "selected" + this.cpuSelection + ":" + "It's a tie");
    }
  }

}
