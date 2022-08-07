const initState = {
  products: [
    { id: 1, name: "man t-shirt", image: '1.jpg', price: 200, discount: 2, discountPrice: 200 - 2 / 100 * 20, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 2, name: "man t-shirt", image: '2.jpg', price: 150, discount: 4, discountPrice: 150 - 4 / 100 * 150, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 3, name: "man t-shirt", image: '3.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 4, name: "man t-shirt", image: '4.jpg', price: 140, discount: 4, discountPrice: 140 - 4 / 100 * 140, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 5, name: "man t-shirt", image: '5.jpg', price: 300, discount: 5, discountPrice: 300 - 5 / 100 * 300, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 6, name: "man t-shirt", image: '6.jpg', price: 240, discount: 8, discountPrice: 240 - 8 / 100 * 240, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 7, name: "man t-shirt", image: '7.jpg', price: 320, discount: 10, discountPrice: 320 - 10 / 100 * 320, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 8, name: "man t-shirt", image: '8.jpg', price: 620, discount: 3, discountPrice: 620 - 3 / 100 * 620, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 9, name: "man t-shirt", image: '9.jpg', price: 270, discount: 5, discountPrice: 270 - 5 / 100 * 270, quantity: 1, detalis: "this is best t-shirt for man" },
    { id: 10, name: "man t-shirt", image: '10.jpg', price: 100, discount: 9, discountPrice: 100 - 9 / 100 * 100, quantity: 1, detalis: "this is best t-shirt for man" },
  ],
  product: {}
}
const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
    default:
      return state;
  }
}
export default ProductsReducer;