import React from 'react'

const Clock = ()=>{
{
    const body = document.querySelector('body');
    body.classList.toggle('light');
    body.style.transition = `0.3s linear`;
}
    


setInterval(() => {
    const deg = 6; 
// 360 / (12 * 5);

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let msec = day.getMilliseconds();
    
    
    // VERY IMPORTANT STEP:
    
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    
    // gives the smooth transitioning effect, but there's a bug here!
    // sc.style.transition = `1s`;
    

});


    return( 
        <>
        <div className="clock">

<div className="hour">
    <div className="hr" id="hr">
        
    </div>
</div>

<div className="min">
    <div className="mn" id="mn">

    </div>
</div>

<div className="sec">
    <div className="sc" id="sc">

    </div>
</div>

</div>
<div className="Clock" onclick="Clock()"></div>


        </>
    );
};
export default Clock;