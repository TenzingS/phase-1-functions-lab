function distanceFromHqInBlocks(distance){
    if(distance < 42){
        return (42 - distance);
    }else{
        return (distance - 42);
    }
}

distanceFromHqInBlocks(43);


function distanceFromHqInFeet(distance){
    return (distanceFromHqInBlocks(distance) * 264);
}

function distanceTravelledInFeet(start, end){
    if (start >= end){
        return ((start - end) * 264);
    }
    else {
        return ((end - start) * 264 )
    };
}

function calculatesFarePrice(start, destination){
    const distanceFeet = distanceTravelledInFeet(start, destination)

    if(distanceFeet <= 400){
        return 0 
    }else if(distanceFeet > 400 && distanceFeet <= 2000){
       const distancetravelled = distanceFeet - 400 
       return distancetravelled * .02
    }
    else if(distanceFeet > 2000 && distanceFeet <= 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}