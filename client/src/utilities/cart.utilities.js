export const addItem = (otherCartItems, itemToAdd) => {
  const sameItem = otherCartItems.find((item) => item.id === itemToAdd.id);

  if (sameItem) {
    return otherCartItems.map((item) =>
      item.id === sameItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...otherCartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeItem = (otherCartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return otherCartItems.filter((item) => item.id !== itemToRemove.id);
  } else
    return otherCartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
};

export const clearItem = (otherCartItems, itemToClear) =>
  otherCartItems.filter((item) => item.id !== itemToClear.id);
