// src/stores/CartStore.js

// import { observable, action, makeObservable } from 'mobx';
import { makeObservable, observable, computed, action } from 'mobx';

class CartStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      addToCart: action,
      total: computed,
      removeFromCart: action,
    });
  }
  get total() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  // @action
  addToCart(item) {
    const itemAlreadyInCart = this.items.find(cartItem => cartItem._id === item._id);

    if (!itemAlreadyInCart) {
      // If the item is not in the cart, add it with a quantity of 1
      this.items.push({ ...item, quantity: 1 });
    } else {
      // If the item is already in the cart, increase its quantity
      itemAlreadyInCart.quantity++;
    }

    // const itemAlreadyInCart = this.items.find(cartItem => cartItem._id == item._id);

    // if (!itemAlreadyInCart) {
    //   this.items.push(item);
    // } else {
    //   const existingItem = this.items.find(i => i.id === item.id);
    //   if (existingItem) {
    //     existingItem.quantity++;
    //   } else {
    //     this.items.push({ ...item, quantity: 1 });
    //     // let totalPrice=this.items.quantity*this.items.price;
    //     // console.log(totalPrice)
    //     // this.items.push({ ...item,totalPrice: totalPrice });
    //   }



    //   console.log('This product is already in the cart.');
    // }

    // const existingItem = this.items.find(i => i.id === item.id);
    // if (existingItem) {
    //   existingItem.quantity++;
    // } else {
    //   this.items.push({ ...item, quantity: 1 });
    //   // let totalPrice=this.items.quantity*this.items.price;
    //   // console.log(totalPrice)
    //   // this.items.push({ ...item,totalPrice: totalPrice });
    // }

  }
  
  // @action
  removeFromCart(item) {
    const index = this.items.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  
  // @action
  increaseQuantity(item) {
    const cartItem = this.items.find(i => i._id === item._id);
    // console.log(this.items._id)
    if (cartItem) {
      cartItem.quantity++;
    }
  }
  
  // @action
  decreaseQuantity(item) {
    const cartItem = this.items.find(i => i.id === item.id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        // Remove the item from the cart if quantity becomes zero
        // this.items = this.items.filter(i => i.id !== item.id);
      }
    }
  }
}

const cartStore = new CartStore();
export default cartStore;
