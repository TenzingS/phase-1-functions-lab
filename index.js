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

