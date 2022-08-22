export const addItems = (otherCartItems, itemToAdd) => {
  const sameItem = otherCartItems.find((item) => item.id === itemToAdd.id);

  if (sameItem) {
    return otherCartItems.map((item) =>
      item.id === sameItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...otherCartItems, { ...itemToAdd, quantity: 1 }];
  }
};
