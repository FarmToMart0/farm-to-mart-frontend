import React from 'react'
import NavBar from '../../components/navbar/index'
import ItemCard from '../../components/shopping_card/index'

function ShoppingCard() {
  const deliveryMethods=["Pick from Farm","Home Delivery"]
  const paymentMethods = ["Online Payment","Cash on Delivery"]
  const itemData = ['https://image.shutterstock.com/image-photo/grain-auger-combine-pouring-soy-260nw-1842422164.jpg',
  'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=600']

  return (
    <div>
        <NavBar/>
          <ItemCard deliveryMethods={deliveryMethods} unitPrice = '45.34' paymentMethods={paymentMethods} itemData = {itemData}/>
    </div>
  )
}

export default ShoppingCard