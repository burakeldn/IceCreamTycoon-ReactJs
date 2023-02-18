import React from 'react'
import Game from '../Game'

class Progressbar extends React.Component {

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
                        disabled={this.game.currentMoney< this.game.upgradePrice.grassTankPrice}
                        onClick={
                            this.game.upgradeGrassTank
                        }
                    >{this.game.upgradePrice.grassTankPrice}</button></p>
                </div>
                <div className='MilkTank'> Milk Barn
                    <div className="progressbar">
                        <div style={{
                            height: "100%",
                            backgroundColor: "#a66cff",
                        }}></div>
                        <span className="progressPercent"> {this.game.currentMilk}/{this.game.tankInfo.milkTank} KG</span>
                    </div>
                    <p>Milk Tanker Capacity: {this.game.tankInfo.milkTank}</p>
                    <p>Upgrade Capacity: <button
                    disabled={this.game.currentMoney< this.game.upgradePrice.milkTankPrice}
                    onClick={
                        this.game.upgradeMilkTank
                    }
                    >{this.game.upgradePrice.milkTankPrice}</button></p>
                </div>
            </div>
        )
    }
}

export default Progressbar