import React from 'react'

 const Main=()=> {

    

    return (
        <div className='man'>
            <div className='movie-container'>
            <label>Please pick you seat</label>
            <select className='movie'>
                <option value='45'>First class (Ero 45)</option>
                <option value='30'>Economy class (Ero 30)</option>
            </select>
            </div>
            <ul className='showCase'>
                <li>
                    <div className='seat'></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div className='seat selected'></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div className='seat occupied'></div>
                    <small>Occupied</small>
                </li>
            </ul>
            <div className='container'>
                <div className='screen'></div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat occupied'></div>
                    <div className='seat occupied'></div>
                    <div className='seat occupied'></div>
                </div>
                <div className='row'>
                    <div className='seat occupied'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat occupied'></div>
                    <div className='seat occupied'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row'>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
            </div>
            <p className='text'>You have selected<span className='count'>0</span>seats for a price of <span className='total'> total</span></p>
        </div>
    )
}
export default Main