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

//function factories for the above
const changePlantState = (plant, property) => {
  return {
    ...plant, 
    [property]: (plant[property] || 0) + 1
  }
};

let plant = { soil: 0, light: 0, water: 0 }
changePlantState(plant, "soil")

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}