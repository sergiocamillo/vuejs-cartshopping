///console.log(Vue);
new Vue(
    {
     el:'#app',
     data: {
         total: 0,
         items: 
         [
            { 
                id: 1,
                title: "Item 1",
                price:9.99 
            },
            { 
                id: 2,
                title: "Item 2",
                price:10.00 
            },
            { 
                id: 3,
                title: "Item 3",
                price:12.00  }
         ],
         cart: []
     },
     methods: {
        addItem: function(index) {
            let item = this.items[index];

            let cartItem = {
                id: item.id,
                title: item.title,
                price: item.price,
                qty: 1
            };
            
            cartItem = this.itemExists(cartItem);
            
            if(cartItem.qty < 2) // First time is add a product. Quantity == 1
            {
                this.cart.push(
                    cartItem
                );
            }

            this.total += item.price;

        },

        itemExists(item)
        {
            var itemFound = this.cart.find(obj => obj.id == item.id);
            
            if (itemFound != null)
            {
                itemFound.qty++;
                return itemFound;
            }

            return item;
        },

        plus(item)
        {
            item.qty++;
            this.total += item.price;
        },

        minus(item, index)
        {
            item.qty--;

            if(item.qty <= 0) // Remove item from the cart
                this.cart.splice(index,1)
            
            this.total -= item.price;
        }
     },
     filters: {
         currency: function(price) {
            return '$'.concat(price.toFixed(2));
         }
     }
    }
);
