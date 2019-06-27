// TODO refactoring this class
class EventManager {
    constructor() {
        this.okStatus = "Everything is ok. Let s relax. ☕";
        this.lackLazyboneLog = "👷‍♂️👷‍♂ Find more lazybones.";
        this.starvation = "🍽️🍽️HELP!!! We don t have enough food. :(";
        this.foodOrHouses = "🤨 Not enough food or houses.";
        this.moreResources = "🤨 Collect more resources.";
        this.moreKnowledge = "🤨 Collect more knowledge.";
        this.moreScienceBuilding = "🤨 Build more campfires or other science buildings.";
        this.moreMusicClubs = "🤨 Build more music clubs or other entertainment buildings.";
        this.moreYogaClubs = "🤨 Build more yoga clubs or other health buildings.";
        this.moreBarrack = "🤨 Build more barracks.";
        this.funeralProccessMoreWorkers = "👥👥 One funeral requires 2 workers.";
        this.elvesCantCutTrees1 = "🧝🧝 Elves can't cut trees, so sometimes they take it from the others. They said - thank you. And took: ";
        this.elvesCantCutTrees2 = " of your wood.";
        this.elvesAreDisappointed = "🧝🧝 You don t have wood. Elves are disappointed of us.. :((";
        this.elvesLike = "🧝🧝 Main Elf said - we like you.";
        this.nightmare = "👩‍🌾👩‍🌾 👾👾 Your farmers said that they saw strange nightmares.";
        this.strangeInTheSkies = "👩‍🌾👩‍🌾 Your farmers said that they saw something strange in the skies. You said - ha, rich imagination";
        this.ufoKilled1 = "🛸 Ufo Aliens tried to improve your human beings, but it wasn't successful. Unfortunately they killed: ";
        this.ufoKilled2 = " of your farmers. Maybe in the next time.";
        this.ufoArtifact1 = "🛸 Ufo gave to you a mighty artifact to improve your human beings, but your people didn't know how to apply this and they just exchanged it with more advanced civilization for: ";
        this.ufoArtifact2 = " stones.";
        this.overturnedCorpses = "🧑🧑🧑 Your people said that corpses overturned during the last full moon night. You said - ha, rich imagination";
        this.whiteWalkersInAnotherVillage = "🧛🧛 Some white walkers came from your corpse storage and went to another village. Than they went back to sleep.";
        this.foolMoon = "Your people liked fool moon this night 🌘";
        this.deathBecauseOfZombie = "🌘🧛 You people died because of too many zombies.";
        this.newAchievement = "🙈🙈🙈 Get a new achievement.";
    }

    initialization(gameManager) {
        this.gameManager = gameManager;
        this.pageManager = this.gameManager.pageManager;
        this.configManager = this.gameManager.configManager;
        this.citizenManager = this.gameManager.citizenManager;
    }

    addEvent(what, changes) {
        let msg;
        switch (what) {
            case "ok":
                msg = this.okStatus;
                break;
            case "starvation":
                msg = this.starvation;
                break;
            case "food or houses":
                msg = this.foodOrHouses;
                break;
            case "more resources":
                msg = this.moreResources;
                break;
            case "more knowledge":
                msg = this.moreKnowledge;
                break;
            case "more campfires":
                msg = this.moreScienceBuilding;
                break;
            case "more music clubs":
                msg = this.moreMusicClubs;
                break;
            case "more yoga clubs":
                msg = this.moreYogaClubs;
                break;
            case "more barrack":
                msg = this.moreBarrack;
                break;

            case "lack of lazybones":
                msg = this.lackLazyboneLog;
                break;
            case "1 funeral process needs 2 workers":
                msg = this.funeralProccessMoreWorkers;
                break;

            case "nightmare":
                msg = this.nightmare;
                break;
            case "strange in the skies":
                msg = this.strangeInTheSkies;
                break;
            case "Ufo killed":
                msg = this.ufoKilled1 + changes + this.ufoKilled2;
                break;
            case "Ufo gave an artifact":
                msg = this.ufoArtifact1 + changes + this.ufoArtifact2;
                break;

            case "overturned corpses":
                msg = this.overturnedCorpses;
                break;
            case "White walker killed":
                msg = "🧛🧛 Some white walkers came from your corpse storage and killed a few of your people. Than they went back. You have more corpses.";
                break;
            case "white walkers in another village":
                msg = `🧛🧛 ${changes} white walkers came from your corpse storage and went to another village. Than they went back to sleep.`;
                break;
            case "fool moon":
                msg = this.foolMoon;
                break;
            case "death because of zombies":
                msg = this.deathBecauseOfZombie;
                break;

            case "Potatoes":
                msg = `👩‍🌾👩‍🌾 Farmers found ${changes} potatoes.🥔🥔🥔🥔`;
                break;
            case "Assassin rabbits":
                msg = `🐰🐰🐰 Farmers found wild rabbits on the field. Obviously it was bad decision to take rabbit's food. Assassin rabbits killed : ${changes} farmers.`;
                break;
            case "Wild rabbits":
                msg = "🐰🐰🐰 Farmers saw the wild rabbits.";
                break;
            case "Kiwi":
                msg = `👩‍🌾👩‍🌾 Farmers found ${changes} kiwi fruits.🥝🥝🥝🥝`;
                break;
            case "Rats":
                msg = `🐀🐀🐀 Rats ate ${changes} of your food.`;
                break;

            case "Storm":
                msg = `⛈️There is a storm. It spoiled some of your wood: ${changes} is lost.`;
                break;
            case "Small rain":
                msg = "🌈 There was a small rain.";
                break;
            case "Big earthquake":
                msg = `🧶 ☹ There was a big earthquake. Unfortunately it killed: ${changes} of your miners.`;
                break;
            case "Middle earthquake":
                msg = `🧶️ There was a middle earthquake. Some trees were down and it gave you : ${changes} woods.`;
                break;
            case "Light earthquake":
                msg = "🧶 There was a light earthquake.";
                break;

            case "Amazons are there":
                msg = "Your people saw a lot of beautiful wild amazons 👧👧👧";
                break;
            case "Amazons speaking":
                msg = "👧👧👧 Your people communicated a bit with Amazons.";
                break;
            case "Amazons kidnapped":
                msg = `👧👧👧👧 Wild Amazons kidnapped some of your people. Than they brought you back ${changes} male corpses, you see smiles on corpse's faces.`;
                break;
            case "Amazons brought":
                msg = `👧👧👧👧 Amazons brought a few males to your people . ${changes} new free people.`;
                break;

            case "elves can't cut trees":
                msg = this.elvesCantCutTrees1 + changes + this.elvesCantCutTrees2;
                break;
            case "elves are disappointed":
                msg = this.elvesAreDisappointed;
                break;
            case "elves like":
                msg = this.elvesLike;
                break;
            case "Elves don't like":
                msg = `🧝🧝 Elves don't like when you cut trees. They killed: ${changes} of your woodcutters. They said - sorry.`;
                break;

            case "New people were born":
                msg = `👪👪 ${changes} new people were born.`;
                break;
            case "Died because of age":
                msg = `👪👪 ${changes} died because of age.`;
                break;
        }
        if (msg) {
            let newElement = $(`<p>${this.getMsgWithTime(msg)}</p>`);
            this.pageManager.eventDiv.after(newElement);
            this.pageManager.showElement([newElement]);
        }
    }

    addAchievement(what) {
        let newElementAchievement;
        switch (what) {
            case "UFO Alien":
                newElementAchievement = this.pageManager.ufoAchievement;
                break;
            case "Palace":
                newElementAchievement = this.pageManager.palaceAchievement;
                break;
            case "First Research":
                newElementAchievement = this.pageManager.firstResearchAchievement;
                break;
            case "Starvation":
                newElementAchievement = this.pageManager.hungerAchievement;
                break;
            case "Productivity":
                newElementAchievement = this.pageManager.productivityAchievement;
                break;
            case "More Food":
                newElementAchievement = this.pageManager.moreFoodAchievement;
                break;
        }
        if (newElementAchievement) {
            let newElement = $(`<p>${this.getMsgWithTime(this.newAchievement)}</p>`);
            this.pageManager.eventDiv.after(newElement);
            this.pageManager.achievementSection.append(newElementAchievement);

            this.pageManager.showElement([newElement, newElementAchievement]);
        }
    }

    getMsgWithTime(msg) {
        return `${new Date().toLocaleTimeString()} : ${msg}`;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    eventHappen() {
        // to small population for events
        let eventDiversity = 1;
        if (this.configManager.currentPopulation > 20) {
            eventDiversity = 8;
        }

        switch (this.getRandomInt(eventDiversity)) {
        // switch (8) {
            default:
                this.nothingHappenEvent();
                break;
            case 1:
                this.nothingHappenEvent();
                break;
            case 2:
                this.ufoEvent();
                break;
            case 3:
                this.farmerEvent();
                break;
            case 4:
                this.weatherEvent();
                break;
            case 5:
                this.wildAmazonEvent();
                break;
            case 6:
                this.elfEvent();
                break;
            case 7:
                this.bloodMoonEvent();
                break;
            case 8:
                this.birthDeathCycleEvent();
                break;
            //    TODO add to storm and rename to weather
            // // Drought (-foodProduction)
            // case 8:
            //     break;

            // // Animals (-citizen quantity)
            // case 7:
            //     animalsEvent();
            //     break;
            // // Pets (+food consuming)
            // case 7:
            //     break;

            // // Im/Emigration (+current population, - knowledge)
            // case 10:
            //     break;

            // // Laziness (-productivity)
            // case 11:
            //     break;
            // // Motivation (+production)
            // case 12:
            //     break;
        }
    }

    nothingHappenEvent() {
        this.addEvent("ok");
    }

    ufoEvent() {
        let farmers = this.configManager.farmerQuantity;
        if (farmers > 25) {
            switch (this.getRandomInt(3)) {
                case 1:
                    let killedFarmerAmount = Math.round(0.1 * farmers);
                    this.addEvent("Ufo killed", killedFarmerAmount);
                    for (let i = 0; i < killedFarmerAmount; i++) {
                        this.citizenManager.killFarmer();
                    }
                    break;
                case 2:
                    this.addEvent("nightmare");
                    break;
                case 3:
                    let newResources = Math.round(0.6 * this.configManager.stoneQuantity);
                    this.addEvent("Ufo gave an artifact", newResources);
                    this.configManager.changeCurResourceQuantity("stone", newResources);
                    break;
            }
        } else {
            this.addEvent("strange in the skies");
        }
    }

    farmerEvent() {
        let farmers = this.configManager.farmerQuantity;
        // this.configManager.eventDiv.after("<p>" + this.getMsgWithTime("🥔🥔 🥝🥝 your people see a lot of new kind of food.") + "</p>");

        let food = this.configManager.foodQuantity;
        switch (this.getRandomInt(5)) {
            case 1:
                this.addEvent("Potatoes", Math.round(food * 1.8));
                this.configManager.changeCurResourceQuantity("food", Math.round(food * 1.8));
                break;
            case 2:
                this.addEvent("Assassin rabbits", Math.round(farmers * 0.15));
                for (let i = 0, amount = Math.round(farmers * 0.15); i < amount; i++) {
                    this.citizenManager.killFarmer();
                }
                break;
            case 3:
                this.addEvent("Wild rabbits");
                break;
            case 4:
                this.addEvent("Kiwi", Math.round(food * 2.5));
                this.configManager.changeCurResourceQuantity("food", Math.round(food * 2.5));
                break;
            case 5:
                this.addEvent("Rats", Math.round(food * 0.9));
                this.configManager.changeCurResourceQuantity("food", -Math.round(food * 0.9));
                break;
        }
    }

    weatherEvent() {
        // TODO add illness
        let wood = this.configManager.woodQuantity;
        let miners = this.configManager.minerQuantity;
        switch (this.getRandomInt(2)) {
            // Storm
            case 1:
                if (wood > 20) {
                    this.addEvent("Storm", Math.round(wood * 0.3));
                    this.configManager.changeCurResourceQuantity("wood", -Math.round(wood * 0.3));
                } else {
                    this.addEvent("Small rain");
                }
                break;
            // Earthquake
            case 2:
                switch (this.getRandomInt(2)) {
                    case 1:
                        if (miners > 7) {
                            let killedMinerAmount = Math.round(0.3 * miners);
                            this.addEvent("Big earthquake", killedMinerAmount);
                            for (let i = 0, amount = killedMinerAmount; i < amount; i++) {
                                this.citizenManager.killMiner();
                            }
                        } else {

                            let newResources = Math.round(0.33 * this.configManager.woodMaxQuantity);
                            this.addEvent("Middle earthquake", newResources);
                            this.configManager.changeCurResourceQuantity("wood", newResources);
                        }
                        break;
                    case 2:
                        this.addEvent("Light earthquake");
                        break;
                }
                break;
        }
    }

    wildAmazonEvent() {
        let scientists = this.configManager.curScientistQuantity;
        if (scientists > 10) {
            switch (this.getRandomInt(3)) {
                case 1:
                    this.addEvent("Amazons speaking");
                    break;
                case 2:
                    let killedScientistAmount = Math.round(0.5 * scientists);
                    this.addEvent("Amazons kidnapped", killedScientistAmount);
                    for (let i = 0, amount = killedScientistAmount; i < amount; i++) {
                        this.citizenManager.killScientist();
                    }
                    this.configManager.changeCurResourceQuantity("knowledge", -this.configManager.knowledgeQuantity * 0.5);
                    break;
                case 3:
                    let newMaleAmount = Math.round(0.25 * scientists);
                    this.addEvent("Amazons brought", newMaleAmount);
                    this.citizenManager.createCitizen(newMaleAmount);
                    break;
            }
        } else {
            this.addEvent("Amazons are there");
        }
    }

    elfEvent() {
        switch (this.getRandomInt(2)) {
            case 1:
                let wood = this.configManager.woodQuantity;
                if (wood > 20) {
                    this.addEvent("elves can't cut trees", wood);
                    this.configManager.changeCurResourceQuantity("wood", -wood);
                } else {
                    this.addEvent("elves are disappointed");
                }
                break;
            case 2:
                if (this.configManager.woodmenQuantity > 7) {
                    let changes = this.configManager.woodmenQuantity;
                    this.addEvent("Elves don't like", changes);
                    for (let i = 0; i < changes; i++) {
                        this.citizenManager.killWoodcutter();
                    }
                } else {
                    this.addEvent("elves like");
                }
                break;
        }
    }

    bloodMoonEvent() {
        let corpses = this.configManager.corpseQuantity;
        if (corpses) {
            switch (this.getRandomInt(2)) {
                case 1:
                    this.addEvent("overturned corpses");
                    break;
                case 2:
                    let wakeUpUndead = Math.round(this.getRandomInt(corpses) / 2);
                    switch (this.getRandomInt(2)) {
                        case 1:
                            if (wakeUpUndead && this.configManager.currentPopulation) {
                                this.addEvent("White walker killed");
                                for (let i = 0; i < wakeUpUndead; i++) {
                                    this.citizenManager.findPersonToKill();
                                }
                            }
                            break;
                        case 2:
                            this.addEvent("white walkers in another village", wakeUpUndead);
                            break;
                    }
            }
        } else {
            this.addEvent("fool moon");
        }
    }

    birthDeathCycleEvent() {
        let curPop = this.configManager.currentPopulation;
        let changeAmount = Math.round(this.getRandomInt(curPop) * 0.25);
        if (changeAmount) {
            switch (this.getRandomInt(2)) {
                case 1:
                    this.addEvent("New people were born", changeAmount);
                    this.citizenManager.birthCitizen(changeAmount);
                    break;
                case 2:
                    this.addEvent("Died because of age", changeAmount);
                    for (let i = 0; i < changeAmount; i++) {
                        this.citizenManager.findPersonToKill();
                    }
                    break;
            }
        }
    }
}

export default EventManager;