function takeOrder(order, deliveryOrders) {
if (deliveryOrders.length  < 3){
deliveryOrders.push(order)
}
return takeOrder
}

function refundOrder(orderNumber, deliveryOrders){
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(orderNumber === deliveryOrders[i].orderNumber){
      deliveryOrders.splice(i,1)
    }
  }
  return deliveryOrders
}

function listItems(deliveryOrders){
    var itemNames = []
    for(var i = 0; i < deliveryOrders.length; i++){
      itemNames.push(deliveryOrders[i].item)
    }
    return itemNames.join(', ')

}

function searchOrder(deliveryOrders,itemNames){
  for (var i = 0; i < deliveryOrders.length; i++){
    if ( itemNames === deliveryOrders[i].item){
      return true
    }
  }
  return false
}










module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
