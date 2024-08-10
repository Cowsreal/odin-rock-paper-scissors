function numToChoice(val)
{
    if(val == 0)
    {
        return "rock";
    }
    if(val == 1)
    {
        return "paper";
    }
    if(val == 2)
    {
        return "scissors";s
    }
}

function getComputerChoice()
{
    let randNum = Math.random();
    if(randNum < 0.33)
    {
        return 0;
    }
    else if(randNum < 0.66)
    {
        return 1;
    }
    else
    {
        return 2;
    }
}

function getHumanChoice()
{
    let input = prompt("What's your choice?");
    input = input.toLowerCase();
    if(input == "rock")
    {
        console.log("You chose rock!");
        return 0;
    }
    else if(input == "paper")
    {
        console.log("You chose paper!");
        return 1;
    }
    else if(input == "scissor" || input == "scissors")
    {
        console.log("You chose scissors!");
        return 2;
    }
    else
    {
        console.log("Invalid input, try again");
        let choice = getHumanChoice();
        return choice;
    }
}

function playRound()
{
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if(humanChoice == computerChoice)
    {
        console.log("You tied! The computer chose " + numToChoice(computerChoice) + ".");
        return -1;
    }
    if(humanChoice == 0 && computerChoice == 2 || humanChoice > computerChoice)  //Human win
    {
        console.log("You won! The computer chose " + numToChoice(computerChoice) + ".");
        return 1;
    }
    else
    {
        console.log("You lost! The computer chose " + numToChoice(computerChoice) + ".");
        return 0;
    }
}

function playGame()
{
    let humanScore = 0;
    let rounds = 5;
    while(rounds > 0)
    {
        let result = playRound();
        if(result == -1)
        {
            continue;
        }
        else
        {
            humanScore += result;
            rounds -= 1;
        }
    }
    if(humanScore > 2)
    {
        console.log("You win! You beat the computer " + humanScore + " rounds out of 5!");
    }
    else
    {
        console.log("You lost! You only beat the computer " + humanScore + " rounds out of 5!");
    }
}

playGame();