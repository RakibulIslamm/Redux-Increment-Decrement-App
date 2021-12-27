import React from 'react';

const Home = (props) => {
    // console.log(props);
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '50%',
                margin: '0 auto'
            }}>
                <h2>This is Home</h2>
                <img style={{
                    width: '50px'
                }} src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png" alt="" />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '50%',
                margin: '0 auto',
                boxShadow: '0 0 3px gray',
                padding: '10px 30px'
            }}>
                <div className='img-wrapper item'>
                    <img style={{
                        width: '150px'
                    }} src="https://cutt.ly/dYNzgOG" alt="" />
                </div>
                <div className='text-wrapper item'>
                    <span style={{
                        fontSize: '21px',
                        fontWeight: 'bold'
                    }}>iPhone13 : $1200</span>
                </div>
                <div className='btn-wrapper item'>
                    <button style={{
                        background: 'yellow',
                        color: 'black',
                        padding: '10px 20px',
                        outline: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 0 1px black',
                    }} onClick={() => props.addToCartHandler({ name: 'Iphone', price: '1200' })}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Home;