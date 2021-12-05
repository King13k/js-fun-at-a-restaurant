function createRestaurant(name){
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner:[]
    }
  }
  return restaurant
}
function addMenuItem(restaurant, pizzaType){
  if ('breakfast' === pizzaType.type && !restaurant.menus.breakfast.includes(pizzaType)){
    restaurant.menus.breakfast.push(pizzaType)
  }
  if ('lunch' === pizzaType.type && !restaurant.menus.lunch.includes(pizzaType)){
    restaurant.menus.lunch.push(pizzaType)
  }
  if ('dinner' === pizzaType.type && !restaurant.menus.dinner.includes(pizzaType)){
    restaurant.menus.dinner.push(pizzaType)
  }
    return restaurant


}

function removeMenuItem(restaurant, name, type){
  for (var i = 0; i < restaurant.menus[type].length; i++)
  if (restaurant.menus[type][i].name === name){
    restaurant.menus[type].splice(name, 1)
    return `No one is eating our ${name} - it has been removed from the ${type} menu!`
  }
    return `Sorry, we don't sell ${name}, try adding a new recipe!`
}



module.exports = {
 createRestaurant,
 addMenuItem,
 removeMenuItem
}
