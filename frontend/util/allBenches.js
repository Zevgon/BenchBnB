export const allBenches = (benchState) => {
  let result = [];
  Object.keys(benchState).forEach(key => {
    result.push(benchState[key]);
  });
  
  return result;
};
