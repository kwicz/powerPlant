//function factories for the above
export const changePlantState = (plant, property) => {
  return {
    ...plant, 
    [property]: (plant[property] || 0) + 1
  }
};

let plant = { soil: 0, light: 0, water: 0 }
changePlantState(plant, "soil")


export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");
export const giveBug = changeState("bug");

const bestWater = hydrate(3);


const storeState = () => {
  let currentState = {}
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState)
    currentState = {...newState}
    return newState //why not current state?
  }
}

const stateChanger = storeState();

const wateredPlant = stateChanger(bestWater);

// ------------------------------------------------- N O T E S ----------------
// // raw methods
// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };
// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };
// const light = (plant) => {
//   return {
//     ...plant,
//     sun: (plant.sun || 0) + 1
//   }                                                            
// }