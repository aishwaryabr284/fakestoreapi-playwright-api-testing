const { test, expect, request } = require('@playwright/test');
const { ProductsApi } = require('../api/productsApi');
import { ProductDetails } from '../testData/ProductData';

test.describe('Products API', () => {
  test('should get all products', async ({ request }) => {
    const productsApi = new ProductsApi(request);
    const response = await productsApi.getAllProducts();
    const products = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('title');
    expect(products[0]).toHaveProperty('price');
  });

  test('should get one product by id', async ({ request }) => {
    const productsApi = new ProductsApi(request);
    const response = await productsApi.getProductById(ProductDetails.productData.id);
    const product = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(product.id).toBe(1);
    expect(product.title).toBeTruthy();
    expect(product.price).toBeGreaterThan(0);
    expect(product.rating).toHaveProperty('rate');
  });

  test('should get product categories', async ({ request }) => {
    const productsApi = new ProductsApi(request);
    const response = await productsApi.getCategories();
    const categories = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(categories).toContain('electronics');
    expect(categories).toContain('jewelery');
  });

  test('should create a new product', async ({ request }) => {
    const productsApi = new ProductsApi(request);

    const response = await productsApi.createProduct(ProductDetails.productData);
    const createdProduct = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    expect(createdProduct).toHaveProperty('id');
  });

  test('should update the product', async ({request})=>{
    const productsApi = new ProductsApi(request);
   
    const response = await productsApi.updateProduct(ProductDetails.updatedProductData.id,ProductDetails.updatedProductData);
    const updatedData = await response.json();

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(updatedData).toMatchObject(ProductDetails.updatedProductData);
  })

  test('should delete a product', async({request})=>{
    const productsApi = new ProductsApi(request);
    const response = await productsApi.deleteProduct(ProductDetails.productData.id);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
  })
});
