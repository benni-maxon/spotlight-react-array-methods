// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => brands.reduce((acc, { shoes }) => [...acc, ...shoes], []);

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const ageSum = dogs.reduce((acc, { age }) => (acc += age), 0);
  return ageSum / dogs.length;
};
