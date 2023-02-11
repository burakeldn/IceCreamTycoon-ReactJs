class Game {

    // Current Information
    currentFarm = 0
    currentGrass = 0
    currentCow = 0
    currentGoat = 0
    currentMilk = 50
    currentIceCream = 0
    currentMaker = 0
    currentCar = 0
    currentTruck = 0
    currentShop = 0
    currentMoney = 2000

    firstDate = Date.now()

    upgradePrice = {
        iceCreamPrice: 500,

    }

    priceAllMoney = {
        iceCream:1,
        farm: 420,
        goat: 1000,
        cow: 5300,
        maker: 720,
        car: 8000,
        truck: 13000,
        shop: 35000,
    }

    priceAllMilk = {
        makeSelfMilk: 0.30,
        makerMilk: 0.50,
        carMilk: 12,
        truckMilk: 22,
        shopMilk: 55,
    }

    priceAllGrass = {
        goatGrass: 90,
        cowGrass: 330,
    }

    productAll = {
        makeSelfProd: 1,
        farmProd: 300,
        goatProd: 80,
        cowProd: 450,
        makerProd: 1,
        carProd: 15,
        truckProd: 20,
        shopProd: 50,
    }
    //

    // Game update
    update = () => {
        if (Date.now() - this.firstDate > 1000) {
            this.firstDate = Date.now()
        }
    }
    //

    // On click events
    makeIceCreamClick = () => {
        document.getElementById("makeICBtn").disabled = true;
        setTimeout(() => {
            Math.floor(this.currentMilk -= this.priceAllMilk.makeSelfMilk)
            this.currentIceCream += this.productAll.makeSelfProd
            document.getElementById("makeICBtn").disabled = false;
        }, 100);
     }

     doFarm = () => {
        this.currentMoney -= this.priceAllMoney.farm
        this.currentFarm ++
        this.currentGrass += this.productAll.farmProd
        setInterval(() => {
            this.currentGrass += (this.productAll.farmProd * this.currentFarm)/this.currentFarm
        }, 30000);
     }

     doGoat = () => {
        this.currentMoney -= this.priceAllMoney.goat
        this.currentGoat ++
        this.currentGrass -= (this.priceAllGrass.goatGrass * this.currentGoat)/this.currentGoat
        this.currentMilk += this.productAll.goatProd

        setInterval(() => {
            if(this.currentGrass > (this.currentGoat * this.priceAllGrass.goatGrass)){
            this.currentGrass -= (this.currentGoat * this.priceAllGrass.goatGrass)/this.currentGoat
            this.currentMilk += (this.currentGoat * this.productAll.goatProd)/this.currentGoat}
        }, 40000)

     }

     doCow = () => {
        this.currentMoney -= this.priceAllMoney.cow
        this.currentCow ++
        this.currentGrass -= (this.priceAllGrass.cowGrass * this.currentCow)/this.currentCow
        this.currentMilk += this.productAll.cowProd

        setInterval(() => {
            if(this.currentGrass > (this.currentCow * this.priceAllGrass.cowGrass)){
            this.currentGrass -= (this.currentCow * this.priceAllGrass.cowGrass)/this.currentCow
            this.currentMilk += (this.currentCow * this.productAll.cowProd)/this.currentCow}
        }, 40000)
     }


     doIceCreamMaker = () => {
        this.currentMoney -= this.priceAllMoney.maker
        this.currentMaker++
        setInterval(()=>{
            if(this.currentMilk >= (this.currentMaker * this.priceAllMilk.makerMilk)){
                this.currentMilk -= (this.currentMaker * this.priceAllMilk.makerMilk)/this.currentMaker
                this.currentIceCream += (this.productAll.makerProd * this.currentMaker)/this.currentMaker

            }
        },3000)
     }

     doCar = () => {
        this.currentMoney -= this.priceAllMoney.car
        this.currentCar++
        setInterval(()=>{
            if(this.currentMilk > (this.currentCar * this.priceAllMilk.carMilk)){
                this.currentMilk -= (this.currentCar * this.priceAllMilk.carMilk)/this.currentCar
                this.currentIceCream += (this.currentCar * this.productAll.carProd)/this.currentCar
            }
        },8000)
     }

     doTruck = () => {
        this.currentMoney -= this.priceAllMoney.truck
        this.currentTruck++
        setInterval(()=>{
            if(this.currentMilk > (this.currentTruck * this.priceAllMilk.truckMilk)){
                this.currentMilk -= (this.currentTruck * this.priceAllMilk.truckMilk)/this.currentTruck
                this.currentIceCream += (this.currentTruck * this.productAll.truckProd)/this.currentTruck
            }
        },12000)
     }

     doShop = () => {
        this.currentMoney -= this.priceAllMoney.shop
        this.currentShop++
        setInterval(()=>{
            if(this.currentMilk > (this.currentShop * this.priceAllMilk.shopMilk)){
                this.currentMilk -= (this.currentShop * this.priceAllMilk.shopMilk)/this.currentShop
                this.currentIceCream += (this.currentShop * this.productAll.shopProd)/this.currentShop
            }
        },15000)
     }
//

// Sell Buttons
sellButton = () => {
    this.currentIceCream -= 1
    this.currentMoney += this.priceAllMoney.iceCream
}
sellButtonAll = () => {
    this.currentMoney += this.currentIceCream * this.priceAllMoney.iceCream
    this.currentIceCream -= this.currentIceCream
}
//

// Upgrade Buttons
    upgradeICMoney = () => {
        this.priceAllMoney.iceCream ++
        this.currentMoney -= this.upgradePrice.iceCreamPrice 
        this.upgradePrice.iceCreamPrice += Math.floor((this.upgradePrice.iceCreamPrice)/100)*70
}
//

// Sound Effects
    soundEffectClick = () => {
        let myAudio = document.querySelector('#audio')
        myAudio.play()
    }        

//
    /*
        %kaç dolduğunu gösteren bir bar lazım her kart      
        için ayrı ayrı
        zaman yeterse ses efekti ekelmeye çalışıcam
    */
}

export default Game;