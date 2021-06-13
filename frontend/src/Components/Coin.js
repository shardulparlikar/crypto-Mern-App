import React from 'react'
import Button from './Button'
import '../css/coin.css'

const Coin = ({ name, symbol, marketcap, price, image }) => {
    function numFormatter(marketcap) {
        if (marketcap > 999 && marketcap < 10000000) {
            return (marketcap / 10000).toFixed(3) + 'K';
        } else if (marketcap > 10000000) {
            return (marketcap / 10000000).toFixed(3) + 'M';
        } else if (marketcap < 900) {
            return marketcap; // 
        }
    }

    return (
        <div className="coin-data container">

            <div className="row coin-row">
                <div className="col-2 text-center"><h5>{name}</h5></div>
                <div className="col-2 text-center d-inline-block">

                    <div className="symbol p-2">
                        <img height="30" width="30" src={image} alt="" />
                        {symbol}
                    </div>
                </div>
                <div className="col-2 text-center">${numFormatter(marketcap)}</div>
                <div className="col-2 text-center">
                    <Button name={name} price={price} symbol={symbol}  image={image} mcap={marketcap}/>
                </div>
                <div className="col-2 text-center">{(price)}</div>
            </div>



        </div>
    )
}

export default Coin

