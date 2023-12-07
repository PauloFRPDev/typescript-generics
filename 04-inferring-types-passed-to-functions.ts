// You don't always have to pass the types to a generic
// function!

const addIdToObject = <TObj>(obj: TObj) => {
  return {
    ...obj,
    id: "123",
  };
};

const result = addIdToObject({
  firstName: "Paulo",
  lastName: "Pinheiro",
});

console.log(result);

export {};
