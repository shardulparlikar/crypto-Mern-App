import React from 'react'

export const Posts = ({ posts, loading }) => {



    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="crypto_row my-2 ">
                        <div className="row">
                            <div className="col-2">{post.name}</div>
                            <div className="col-2">{post.symbol}</div>
                            <div className="col-2">{post.market_cap}</div>
                            <div className="col-2">
                                <button className="btn btn-primary">Save Data</button>
                            </div>
                            <div className="col-2">{post.price}</div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;