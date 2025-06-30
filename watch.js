//digital clock program

function runWatch(){
    const date = new Date;

    //get hour
    let hour = date.getHours().toString().padStart(2,0);
    //consider am or pm
    const ap = hour >= 12 ? "P.M" : "A.M";
    //show hour depent on am or pm
    hour = hour % 12 || 12;
    //get minute
    const minute = date.getMinutes().toString().padStart(2,0);
    //get second
    const second = date.getSeconds().toString().padStart(2,0);
    //get the whole tiem
    const time = `${hour}:${minute}:${second} ${ap}`;

    document.getElementById('clock').textContent = time;
}

runWatch();
//make to refresh every 1 second
setInterval(runWatch, 1000);
    

