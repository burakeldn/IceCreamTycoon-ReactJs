import React from 'react'
import farm from '../image/farm.png'
import iceCreamMaker from '../image/avatar.png'
import goat from '../image/goat.png'
import cow from '../image/cow.png'
import iceCreamCar from '../image/ice-cream-car.png'
import iceCreamTruck from '../image/ice-cream-truck.png'
import iceCreamShop from '../image/ice-cream-shop.png'
import iceCream from '../image/ice-cream.png'
import Game from '../Game'

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.game = new Game()
    }

    render() {

        return (
            <div className='main'>

                <div className='GrassTank'> Grass Barn
                    <div className="progressbar">
                        <div style={{
                            height: "100%",
                            backgroundColor: "#a66cff",
                        }}></div>
                        <span className="progressPercent"> {this.game.currentGrass}/{this.game.tankInfo.grassTank} KG</span>
                    </div>
                    <p>Grass Barn Capacity: {this.game.tankInfo.grassTank}</p>
                    <p>Upgrade Capacity: <button
                        disabled={this.game.currentMoney < this.game.upgradePrice.grassTankPrice}
                        onClick={
                            this.game.upgradeGrassTank
                        }
                    >{this.game.upgradePrice.grassTankPrice}</button></p>
                </div>
                <div className='MilkTank'> Milk Tank
                    <div className="progressbar">
                        <div style={{
                            height: "100%",
                            backgroundColor: "#a66cff",
                        }}></div>
                        <span className="progressPercent"> {this.game.currentMilk.toFixed(1)}/{this.game.tankInfo.milkTank} L</span>
                    </div>
                    <p>Milk Tanker Capacity: {this.game.tankInfo.milkTank}</p>
                    <p>Upgrade Capacity: <button
                        disabled={this.game.currentMoney < this.game.upgradePrice.milkTankPrice}
                        onClick={
                            this.game.upgradeMilkTank
                        }
                    >{this.game.upgradePrice.milkTankPrice}</button></p>
                </div>

                <div className='left-Side'>
                    <p>Money: {this.game.currentMoney} $</p>
                    <p>Milk: {this.game.currentMilk.toFixed(1)} L</p>
                    <p>Grass: {this.game.currentGrass} KG</p>
                    <p>Current Ice Cream: {this.game.currentIceCream}<button disabled={this.game.currentIceCream < 1}
                        onClick={this.game.sellButton}
                    >Sell</button>
                        <button disabled={this.game.currentIceCream < 1}
                            onClick={this.game.sellButtonAll}
                        >Sell All</button></p>
                </div>
                <div className='right-Side'>
                    <div className='text'>
                        Hello business man! I know you want to destroy this matrix. Well.. Will see.
                        <br></br>
                        Know let's see how things work here. It's simple. You have some money and you want to make ice cream. Everyone loves ice cream, right?
                        <br></br>
                        To make ice cream you need milk, for milk you need goats and cows. And of course you need some grass for your animals.
                        <br></br>
                        Anyways. I know you're ready. Good luck!
                        <br></br><br></br>
                        1 Ice Cream = {this.game.priceAllMoney.iceCream}$
                    </div>
                    <p>Upgrade Ice Cream Price: <button className='upICMoney'
                        disabled={this.game.currentMoney < this.game.upgradePrice.iceCreamPrice}
                        onClick={this.game.upgradeICMoney}
                    >{this.game.upgradePrice.iceCreamPrice}</button></p>
                </div>
                <div className='card'>
                    <img src={iceCream} alt="IceCream" />
                    <div className='information'>
                        <div className='id'>Make Ice Cream</div>
                        <div className='price'>Price: -{this.game.priceAllMilk.makeSelfMilk}L Milk</div>
                        <div className='rate'>Product: {this.game.productAll.makeSelfProd} Ice Cream/s</div>
                        <div className='available'>You have: {this.game.currentIceCream}</div>
                    </div>
                    <button id='makeICBtn'
                        disabled={this.game.currentMilk < this.game.priceAllMilk.makeSelfMilk}
                        onClick={this.game.makeIceCreamClick}
                    >make</button>
                </div>
                <div className='card'>
                    <img src={farm} alt="Farm" />
                    <div className='information'>
                        <div className='id'>Farm</div>
                        <div className='price'>Value: {this.game.priceAllMoney.farm}$</div>
                        <div className='rate'>Product: {this.game.productAll.farmProd} KG Grass/75s</div>
                        <div className='available'>You have: {this.game.currentFarm}</div>
                    </div>
                    <button id='doFarmBtn'
                        disabled={this.game.currentMoney < this.game.priceAllMoney.farm && this.game.currentGrass}
                        onClick={this.game.doFarm}
                    >buy</button>
                </div>
                <div className='card'>
                    <img src={goat} alt="Goat" />
                    <div className='information'>
                        <div className='id'>Goat</div>
                        <div className='price'>Value: {this.game.priceAllMoney.goat}$</div>
                        <div className='rate'>Product: {this.game.productAll.goatProd}L/40s & -{this.game.priceAllGrass.goatGrass}kg Grass</div>
                        <div className='available'>You have: {this.game.currentGoat}</div>
                        <div className='youNeed'>You need: {this.game.currentGoat * this.game.priceAllGrass.goatGrass} KG Grass</div>
                    </div>
                    <button
                        disabled={this.game.currentMoney < this.game.priceAllMoney.goat || this.game.currentGrass < this.game.priceAllGrass.goatGrass}
                        onClick={this.game.doGoat}
                    >buy</button>
                </div>
                <div className='card'>
                    <img src={cow} alt="Cow" />
                    <div className='information'>
                        <div className='id'>Cow</div>
                        <div className='price'>Value: {this.game.priceAllMoney.cow}$</div>
                        <div className='rate'>Product: {this.game.productAll.cowProd}L/40s & -{this.game.priceAllGrass.cowGrass}kg Grass</div>
                        <div className='available'>You have: {this.game.currentCow}</div>
                        <div className='youNeed'>You need: {this.game.currentCow * this.game.priceAllGrass.cowGrass} KG Grass</div>
                    </div>
                    <button
                        disabled={this.game.currentMoney < this.game.priceAllMoney.cow || this.game.currentGrass < this.game.priceAllGrass.cowGrass}
                        onClick={this.game.doCow}
                    >buy</button>
                </div>
                <div className='card'>
                    <img src={iceCreamMaker} alt="Avatar" />
                    <div className='information'>
                        <div className='id'>Ice Cream Maker</div>
                        <div className='price'>Value: {this.game.priceAllMoney.maker}$</div>
                        <div className='rate'>Product: {this.game.productAll.makerProd} Ice Cream/3s & -{this.game.priceAllMilk.makerMilk}L</div>
                        <div className='available'>You have: {this.game.currentMaker}</div>
                    </div>
                    <button
                        onClick={this.game.doIceCreamMaker}
                        disabled={this.game.currentMoney < this.game.priceAllMoney.maker}
                    >buy</button>
                </div>
                <div className='card'>
                    <img src={iceCreamCar} alt="Car" />
                    <div className='information'>
                        <div className='id'>Ice Cream Car</div>
                        <div className='price'>Value: {this.game.priceAllMoney.car}$</div>
                        <div className='rate'>Product: {this.game.productAll.carProd} Ice Cream/8s & -{this.game.priceAllMilk.carMilk}L</div>
                        <div className='available'>You have: {this.game.currentCar}</div>
                    </div>
                    <button
                        onClick={this.game.doCar}
                        disabled={this.game.currentMoney < this.game.priceAllMoney.car || this.game.currentMilk < this.game.priceAllMilk.carMilk}
                    >buy</button>
                </div>
                <div className='card'>
                    <img src={iceCreamTruck} alt="Truck" />
                    <div className='information'>
                        <div className='id'>Ice Cream Truck</div>
                        <div className='price'>Value: {this.game.priceAllMoney.truck}$</div>
                        <div className='rate'>Product: {this.game.productAll.truckProd} Ice Cream/12s & -{this.game.priceAllMilk.truckMilk}L</div>
                        <div className='available'>You have: {this.game.currentTruck}</div>
                    </div>
                    <button
                        onClick={this.game.doTruck}
                        disabled={this.game.currentMoney < this.game.priceAllMoney.truck || this.game.currentMilk < this.game.priceAllMilk.truckMilk}
                    >buy</button>
                </div>
                <div className='card'>
                    <img src={iceCreamShop} alt="Shop" />
                    <div className='information'>
                        <div className='id'>Ice Cream Shop</div>
                        <div className='price'>Value: {this.game.priceAllMoney.shop}$</div>
                        <div className='rate'>Product: {this.game.productAll.shopProd} Ice Cream/15s & -{this.game.priceAllMilk.shopMilk}L</div>
                        <div className='available'>You have: {this.game.currentShop}</div>
                    </div>
                    <button
                        onClick={this.game.doShop}
                        disabled={this.game.currentMoney < this.game.priceAllMoney.shop || this.game.currentMilk < this.game.priceAllMilk.shopMilk}
                    >buy</button>
                </div>
            </div>
        )
    }
}

export default Product