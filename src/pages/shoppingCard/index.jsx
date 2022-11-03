import React from 'react'
import NavBar from '../../components/navbar/index'
import ItemCard from '../../components/shopping_card/index'

function ShoppingCard() {
  const deliveryMethods=["Pick from Farm","Home Delivery"]
  const paymentMethods = ["Online Payment","Cash on Delivery"]
  const itemData = ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d']

  return (
    <div>
        <NavBar/>
          <ItemCard deliveryMethods={deliveryMethods} unitPrice = '45.34' paymentMethods={paymentMethods} itemData = {itemData}/>
    </div>
  )
}

export default ShoppingCard