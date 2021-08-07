//Tamagotchi Project


function namePet() {
    const name = (document.querySelector('#Tamagotchi-name').value)
    document.querySelector('.speech').innerText=`Hi! I'm ${name}.`

}

    document.querySelector("#submit").addEventListener("click", namePet)

class Tamagotchi {
    constructor(){
    this.age=1
    this.hunger=0
    this.sleepiness=0
    this.boredom=0
    this.width=300
    this.height=300
    }
   
    feedPet() {
        console.log(this.hunger)
        this.hunger -=1
        document.querySelector("#hunger").innerText=`${this.hunger}`
        console.log(this.hunger)
    }
   
  //  lightSwitchOff() {
  //      const lightsOut = document.querySelector("body")
  //      lightsOut.document.body.style.backgroundColor="black"
  //  }

 //   lightSwitchOn() {
  //      const lightsOn = document.querySelector("body")
  //  }
    putToBed() {
        this.sleepiness -=1
        document.querySelector('#sleepiness').innerText=`${this.sleepiness}`
        const kittyBed = document.querySelector('#kitty')
        kittyBed.setAttribute('src', 'Images/Annoyed.png')
    }

    playWithPet() {
        this.boredom -=1
        document.querySelector('#boredom').innerText=`${this.boredom}`
        const kittyPlay = document.querySelector('#kitty')
        kittyPlay.setAttribute('src', 'Images/Happy.png')

    }
    giveLove() {
        const kittyLoved = document.querySelector('#kitty')
        kittyLoved.setAttribute('src', 'Images/Loved.png')
    }

    increaseAge() {
        this.ageID = setInterval(()=>{
            const ageElement =  document.querySelector('#age')
            ageElement.innerText= `${this.age}`
            this.age++
                if (this.age>3) {
                    this.endGame()
                }
        }, 15000)
    }

    increaseHunger() {
        this.hungerID = setInterval(()=>{
            const hungerElement =  document.querySelector('#hunger')
            hungerElement.innerText=`${this.hunger}`
            this.hunger++
                if (this.hunger>10) {
                    this.endGame()
                }
        }, 1500)
    }

    increaseSleepiness() {
        this.sleepyID = setInterval(()=>{
            const sleepyElement =  document.querySelector('#sleepiness')
            sleepyElement.innerText=`${this.sleepiness}`
            this.sleepiness++
                if (this.sleepiness>10) {
                    this.endGame()
                }
        }, 2000)
    }

    increaseBoredom() {
        this.boredomID = setInterval(()=>{
            const boredomElement =  document.querySelector('#boredom')
            boredomElement.innerText=`${this.boredom}`
            this.boredom++
                if (this.boredom>10) {
                    this.endGame()
                }
        }, 1500)
    }

    morphAge() {
        const ageKitty = document.querySelector("#kitty")
        this.width+=100
        this.height+=100
        ageKitty.style.height=`${this.height}px`
        ageKitty.style.width=`${this.width}px`
    }
    gameStart() {
        this.increaseHunger()
        this.increaseSleepiness()
        this.increaseBoredom()
        this.increaseAge()

    }
    endGame() {
        clearInterval(this.boredomID)
        clearInterval(this.sleepyID)
        clearInterval(this.hungerID)
        clearInterval(this.ageID)
        const deadKitty = document.querySelector('.speech')
        deadKitty.innerText=`Oh no! I'm dead.`
        const deadKitty2 = document.querySelector('#kitty')
        deadKitty2.setAttribute('src','Images/Sad.png')   
 
    }
}


const Tamagotchi1 = new Tamagotchi()

document.querySelector("#feed-Me").addEventListener('click', ()=>{Tamagotchi1.feedPet()})
document.querySelector('#pet-Me').addEventListener('click', ()=>{Tamagotchi1.giveLove()})
document.querySelector('#put-Me-To-Bed').addEventListener('click', ()=>{Tamagotchi1.putToBed()})
//document.querySelector('#turn-Off-Lights').addEventListener('click', Tamagotchi1.lightSwitchOff)
//document.querySelector('#turn-Off-Lights').addEventListener('click', Tamagotchi1.lightSwitchOn)
document.querySelector('#make-Me-Older').addEventListener('click', Tamagotchi1.increaseAge)
document.querySelector('#play-With-Me').addEventListener('click', ()=>{Tamagotchi1.playWithPet()})
document.querySelector('#give-Love').addEventListener('click', ()=>{Tamagotchi1.giveLove()})
document.querySelector('#make-Me-Older').addEventListener('click', ()=>{Tamagotchi1.morphAge()})
document.querySelector('#submit').addEventListener('click', ()=>{Tamagotchi1.gameStart()})

