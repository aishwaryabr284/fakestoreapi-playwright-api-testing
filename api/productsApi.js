class ProductsApi {
  constructor(request) {
    this.request = request;
  }
  
  // Retrieve a list of all available products.
  async getAllProducts() {
    return this.request.get('/products');
  }

  // Retrieve details of a specific product by ID.
  async getProductById(productId) {
    return this.request.get(`/products/${productId}`);
  }

  // Retrieve all the categories of the product
  async getCategories() {
    return this.request.get('/products/categories');
  }

  // Create a new product.
  async createProduct(productData) {
    return this.request.post('/products', {
      data: productData
    });
  }

  // Update an existing product by ID.
  async updateProduct(productId,productData){
    return this.request.put(`/products/${productId}`,{
      data : productData
    });
  }

  // Delete a specific product by ID.
  async deleteProduct (productId){
    return this.request.delete(`/products/${productId}`)
  }
}

module.exports = { ProductsApi };
