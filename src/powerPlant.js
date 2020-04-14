//function factories for the above
export const changePlantState = (plant, property) => {
  return {
    ...plant, 
    [property]: (plant[property] || 0) + 1
  };
};


export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");
export const giveBug = changeState("bug");

export const bestWater = hydrate(3);

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState; //why not current state?
  };
};