class CartsApi {
  constructor(request) {
    this.request = request;
  }

  // Retrieve a list of all available carts.
  async getAllCarts() {
    return this.request.get('/carts');
  }

  // Retrieve details of a specific cart by ID.
  async getCartById(cartId) {
    return this.request.get(`/carts/${cartId}`);
  }

  // Create a new cart
  async addNewCart(cartData){
    return this.request.post('/carts',{
        data :cartData
    });
  }

  // Update an existing cart by ID
  async updateCart(cartId, cartData){
    return this.request.put(`/carts/${cartId}`,{
        data :cartData
    });
  }

  // Delete a specific cart by ID.
  async deleteCart(cartId){
    return this.request.delete(`/carts/${cartId}`);
  }
}

module.exports = { CartsApi };
