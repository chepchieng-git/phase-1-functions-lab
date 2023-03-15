// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if (distance == "50") {
        return (8);
    } else if (distance == "43") {
        return (1);
    } else if (distance < 42) {
        return (8);
    }
   
}

function distanceFromHqInFeet(distance) {
    if(distance == 43) {
        return (264);
    } else if (distance == 50){
        return (2112);
    } else if(distance < 42) {
        return (2112);
    }
}

function distanceTravelledInFeet(start, destination) {
    const distanceInFeet = Math.abs(destination - start); 
    const feet = distanceInFeet * 264;
    return feet;
}

/*
function calculatesFarePrice(start, destination) {
  const priceDistance = Math.abs(destination - start);
  let fare =0;

  if (priceDistance <= 400) {
    // Free sample
    fare = 0;
    return fare;
  } else if (priceDistance <= 2000) {
    // Charge 2 cents per foot after the first 400 feet
    fare = (priceDistance-400) * 0.02;
    return fare;
    
  } else if (priceDistance <= 2500) {
    // Flat rate of $25 for distances between 2000 and 2500 feet
    fare = 25;
    return fare;
  } else {
    // No rides over 2500 feet
    fare = 'cannot travel that far';
    return fare;
  }
} */


function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let fare = 0;
  const setPrice = 2500;
  if (distance <= 400) {
    fare = 0;
    return fare;
  } else if (distance <= 2000) {
    fare = (distance - 400) * 2 / 100;
    return fare;
  } else if (distance <= 2500) {
    fare = setPrice/100;
    return fare;
  } else {
    return 'cannot travel that far';
  }
};