import React, { useState } from 'react'
import Coin from './Coin'

export const Search = ({ posts, loading, alldata }) => {

    const [search, setSearch] = useState('');


    const searchCrypto = (e) => {
        const searchEntry = e.target.value;
        setSearch(searchEntry)
    }

    const searchCoin = posts.filter(crypt =>
        crypt.name.toLowerCase().includes(search.toLowerCase())
    )
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div className="input-group mb-3">
                <div className="row w-100">
                    <div className="col-4">
                        <h4>Stock Details Table</h4>
                    </div>
                    <div className="col-7">
                        <input type="text" className="form-control"
                            placeholder="Search Crypto"
                            onChange={searchCrypto}

                        />
                    </div>
                </div>



            </div>
            <div className="coin-data data-table container">
                <div className="row coin-row">
                    <div className="col-2 text-center"><h5>Name</h5></div>
                    <div className="col-2 text-center"><h5>Symbol</h5></div>
                    <div className="col-2 text-center"><h5>Market Cap</h5></div>
                    <div className="col-2 text-center"></div>
                    <div className="col-2 text-center"><h5>Current Price</h5></div>
                </div>
            </div>
            {searchCoin.map(crypt => {
                return (
                    <Coin key={crypt.id} name={crypt.name} symbol={crypt.symbol} price={crypt.price} marketcap={crypt.market_cap} image={crypt.logo_url} />
                )
            })}
        </>
    )
}

export default Search;
