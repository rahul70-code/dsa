class VendingMachine {
    constructor() {
      this.products = [
        {
          name: "Soda",
          price: 1.00,
          quantity: 10
        },
        {
          name: "Candy",
          price: 0.50,
          quantity: 5
        },
        {
          name: "Chips",
          price: 0.75,
          quantity: 8
        }
      ];
  
      this.balance = 0.0;
    }
  
    displayProducts() {
      // Generate a list of buttons for each product
      let buttons = '';
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];
        buttons += `<button class="product" data-index="${i}">${product.name} - $${product.price}</button>`;
      }
  
      // Update the UI to display the product buttons
      const productList = document.getElementById("product-list");
      productList.innerHTML = buttons;
    }
  
    displayBalance() {
      // Update the UI to display the current balance
      const balanceElement = document.getElementById("balance");
      balanceElement.innerText = `$${this.balance.toFixed(2)}`;
    }
  
    addFunds() {
      // Get the amount of funds to add from the user
      const amount = parseFloat(prompt("Enter amount to add:"));
  
      // Update the balance
      this.balance += amount;
  
      // Update the UI to reflect the updated balance
      this.displayBalance();
    }
  
    purchaseProduct(index) {
      // Get the selected product
      const product = this.products[index];
  
      // Check if the product is in stock and the user has enough balance
      if (product.quantity > 0 && product.price <= this.balance) {
        // Update the product's quantity
        product.quantity--;
  
        // Update the user's balance
        this.balance -= product.price;
  
        // Display a success message
        alert(`Purchased ${product.name}!`);
      } else {
        // Display an error message
        alert("Unable to complete purchase. Please check your balance and ensure the product is in stock.");
      }
  
      // Update the UI to reflect the updated state
      this.displayProducts();
      this.displayBalance();
    }
  }
  
  const vendingMachine = new VendingMachine();
  
  // Add event listeners for the product buttons
  const productList = document.getElementById("product-list");
  productList.addEventListener("click", event => {
    if (event.target.classList.contains("product")) {
      const index = parseInt(event.target.dataset.index);
      vendingMachine.purchaseProduct(index);
    }
  });
  
  // Add an event listener for the add funds button
  const addFundsButton = document.getElementById("add-funds");
  addFundsButton.addEventListener("click", () => vendingMachine.addFunds());
  
  // Initialize the UI
  vendingMachine.displayProducts();
//   vendingMachine.display
  