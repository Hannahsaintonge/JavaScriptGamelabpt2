"use strict";




//start of game


function startGame(choice) {
    choice = prompt("Do you want to play?");
    if (choice === "yes") {
        let userName = prompt("What is your name?");
        startCombat(userName);
    } else {
        console.log("Bye, Felicia!");
    }

    function getDamage() {
        return Math.floor((Math.random() * 5) + 1);
    }

    function startCombat(userName) {
        let userHealth = 40;
        let grantHealth = 10;
        let userWins = 0;

        while (userHealth > 0 && grantHealth > 0) {
            let gamePlay = prompt("Would you like to attack or quit?");
            if (gamePlay === "attack") {

                userHealth -= getDamage();
                grantHealth -= getDamage();

                console.log(`${userName} health is ${userHealth}`);
                console.log(`Grant's health is ${grantHealth}`);

                if (grantHealth <= 0) {
                    userWins++;
                    grantHealth = 10;
                    console.log("Grant is defeated and user gets " + userWins + " wins");
                    break;
                }
                if (userWins === 3) {
                    console.log("You win.");
                    break;

                }

                } else if (gamePlay === "quit"){
                console.log("Bye, Felicia!");
                break;

            }

        } // while loop end


    } // start combat end

}
        startGame();


