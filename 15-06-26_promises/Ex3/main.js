// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  // Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const item of items) {
        if (!inventory[item]) {
          return reject(new Error(`Item ${item} not found`));
        }
        if (inventory[item].stock <= 0) {
          return reject(new Error(`Item ${item} is out of stock`));
        }
      }
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  // Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve) => {
    setTimeout(() => {
      const subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
      const tax = subtotal * 0.08;
      const total = subtotal + tax;
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  // Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.9;
      if (isSuccess) {
        resolve({
          transactionId: "TXN" + Math.floor(Math.random() * 1000000),
          amount,
          status: "success",
        });
      } else {
        reject(new Error("Payment failed: Insufficient funds or network error"));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  // Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve) => {
    setTimeout(() => {
      items.forEach((item) => {
        inventory[item].stock--;
      });
      resolve("Inventory updated successfully");
    }, 300);
  });
}

// Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  let orderResult = {};

  return checkInventory(itemNames)
    .then((items) => {
      orderResult.items = items;
      return calculateTotal(items);
    })
    .then((totals) => {
      orderResult.totals = totals;
      return processPayment(totals.total);
    })
    .then((payment) => {
      orderResult.payment = payment;
      return updateInventory(orderResult.items);
    })
    .then((inventoryStatus) => {
      orderResult.inventoryStatus = inventoryStatus;
      return orderResult;
    });
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
