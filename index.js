// Create a function that takes as parameters the number of wins and losses of a player, then returns the result to a variable.
// Use Variables, Operators, Loops, Decision Structures and Functions
// The ranked match balance should be calculated as (wins - losses).

// If wins are less than 10 = Iron
// If wins are between 11 and 20 = Bronze
// If wins are between 21 and 50 = Silver
// If wins are between 51 and 80 = Gold
// If wins are between 81 and 90 = Diamond
// If wins are between 91 and 100 = Legendary
// If wins are greater than 100 and looses higher than 0 = Immortal
// If wins are greater than 100 and no looses = Master Higlander

// At the end, a message should be displayed:
// "The Hero has a balance of {balanceWins} wins and is at the {level} level"


getHero("Deadpool", 19, 10);
getHero("Wolverine", 35, 20);
getHero("Miranha", 60, 30);
getHero("Xavier Carequinha", 80, 20);
getHero("Beast", 100, 15);
getHero("Ciclop", 130, 35);
getHero("Magneto", 120, 15);
getHero("Fênix", 1000, 0);

function defineLevel(balance, losses) {
    if (balance > 100 && losses === 0) {
        return "Master Highlander";
    } else if (balance > 100) {
        return "Immortal";
    } else if (balance >= 91) {
        return "Legendary";
    } else if (balance >= 81) {
        return "Diamond";
    } else if (balance >= 51) {
        return "Gold";
    } else if (balance >= 21) {
        return "Silver";
    } else if (balance >= 10) {
        return "Bronze";
    } else {
        return "Iron";
    }
}

function getHero(hero, wins, losses) {
    let balance = wins - losses;
    let level = defineLevel(balance, losses);
    console.log("The hero " + hero + " has a balance of " + balance + " victories and is at the level " + level);
}
