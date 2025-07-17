
userScore = 0
computerScore = 0


while userScore and computerScore < 5{
    playRound()
}
if user = 5{
    print (you are the champion)
    else print {you are the biggest loser ever!}
}
}


function playRound(){
    userMove = prompt("Enter r for rock, p for paper, or s for scissors")

    computerMove = Math.randomNumber(1-3)
}   
    if (computerMove = 1){
        print("computer chose rock")
        if userMove = r{
            print( "tie!")
        }elif userMove = p{
            print("you win!")
            userScore ++
        
        }{elif userMove = s{
            print("you lose!")
            computerScore ++
        }
    }elif computerMove = 2{
        print("computer chose paper")
        if userMove = r{
            print( "You Lose!")
            computerScore ++
        }elif userMove = p{
            print("Tie!")
            
        
        }{elif userMove = s{
            print("win!")
            userScore ++
        }
    }

}elif computerMove = 3{
        print("computer chose scissors")
        if userMove = r{
            print( "You Win!")
            userScore ++
        }elif userMove = p{
            print("You Lose!")
            computerScore++
        
        }{elif userMove = s{
            print("Tie!")
            
        }
    }
