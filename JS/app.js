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
    }

    
    feedPet() {
        this.hunger -=1
        document.querySelector("#hunger").innerText=`${this.hunger}`
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
    }

    playWithPet() {
        this.boredom -=1
        document.querySelector('#boredom').innerText=`${this.boredom}`

    }
    giveLove() {
        this.boredom -=1
        this.sleepiness -=1
        document.querySelector('#boredom').innerText=`${this.boredom}`
        document.querySelector('#sleepiness').innerText=`${this.boredom}`
    }

    increaseAge() {
        const ageID = setInterval(()=>{
            const ageElement =  document.querySelector('#age')
            ageElement.innerText= `${this.age}`
            this.age ++
                if (this.age>3) {
                    clearInterval(ageID)
                }
                this.morphAge()
        }, 15000)
    }

    increaseHunger() {
        const hungerID = setInterval(()=>{
            const hungerElement =  document.querySelector('#hunger')
            hungerElement.innerText=`${this.hunger}`
            this.hunger ++
                if (this.hunger>10) {
                    clearInterval(hungerID)
                }
        }, 1000)
    }

    increaseSleepiness() {
        const sleepyID = setInterval(()=>{
            const sleepyElement =  document.querySelector('#sleepiness')
            sleepyElement.innerText=`${this.sleepiness}`
            this.sleepiness ++
                if (this.sleepiness>10) {
                    clearInterval(sleepyID)
                }
        }, 2000)
    }

    increaseBoredom() {
        const boredomID = setInterval(()=>{
            const boredomElement =  document.querySelector('#boredom')
            boredomElement.innerText=`${this.boredom}`
            this.boredom ++
                if (this.boredom>10) {
                    clearInterval(boredomID)
                }
        }, 1500)
    }

    morphAge() {
 //     const ageUP = document.querySelector('#kitty')
  //    let currentWidth = ("#kitty").style.width
  //    let currentHeight = ("#kitty").style.height
  //      let newWidth = currentWidth + 50
   //     let newHeight = currentHeight + 50
    
    }
    gameStart() {
        this.increaseHunger()
        this.increaseSleepiness()
        this.increaseBoredom()
        this.increaseAge()
        this.endGame()

    }
    endGame() {
        if((this.age===10)||(this.sleepiness===10)||(this.boredom===10)) {
            document.querySelector('.speech').innerText=`Oh no! I'm dead. :(`   
        }
    }
}


const Tamagotchi1 = new Tamagotchi()

document.querySelector("#feed-Me").addEventListener('click', Tamagotchi1.feedPet)
document.querySelector('#pet-Me').addEventListener('click', Tamagotchi1.giveLove)
document.querySelector('#put-Me-To-Bed').addEventListener('click', Tamagotchi1.putToBed)
//document.querySelector('#turn-Off-Lights').addEventListener('click', Tamagotchi1.lightSwitchOff)
//document.querySelector('#turn-Off-Lights').addEventListener('click', Tamagotchi1.lightSwitchOn)
document.querySelector('#make-Me-Older').addEventListener('click', Tamagotchi1.increaseAge)
document.querySelector('#play-With-Me').addEventListener('click', Tamagotchi1.playWithPet)
document.querySelector('#make-Me-Older').addEventListener('click',Tamagotchi1.morphAge)
document.querySelector('#submit').addEventListener('click', Tamagotchi1.gameStart())

console.log(Tamagotchi1.feedPet)