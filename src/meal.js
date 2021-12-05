function nameMenuItem(food) {
  return `Delicious ${food}`

}

function createMenuItem(itemName, itemPrice, itemType) {
  var menuDescription = {
    name: itemName,
    price: itemPrice,
    type: itemType
  }
  return menuDescription

}

function addIngredients(foodType, foodStorage) {
  for (var i = 0; i < foodStorage.length; i++) {
    if (foodType === foodStorage[i]){
      return
    }
  }
  foodStorage.push(foodType)
}

function formatPrice(itemPrice){
  return `$${itemPrice}`
}

function decreasePrice(itemPrice){
  return itemPrice - (itemPrice * .1)
}

function createRecipe(name,ingredientList, itemType){
  var recipe = {
    title: name,
    ingredients: ingredientList,
    type: itemType
  }
  return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
   createRecipe
}
