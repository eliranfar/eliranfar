let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
  // הוספת המוצר לסל
  cart.push({ product, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  // ריקון הרשימה והצגת המוצרים שבסל
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ${item.price} ₪`;
    cartItems.appendChild(li);
  });

  // עדכון הסכום הכולל
  totalPriceElement.textContent = totalPrice;
}
