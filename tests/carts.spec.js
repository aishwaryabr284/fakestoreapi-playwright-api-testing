const { test, expect } = require('@playwright/test');
const { CartsApi } = require('../api/cartsApi');
import { CartDetails } from '../testData/CartData';

test.describe('Carts API', () => {
  test('should get all carts', async ({ request }) => {
    const cartsApi = new CartsApi(request);
    const response = await cartsApi.getAllCarts();
    const carts = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(Array.isArray(carts)).toBeTruthy();
    expect(carts.length).toBeGreaterThan(0);
    expect(carts[0]).toHaveProperty('id');
    expect(carts[0]).toHaveProperty('userId');
    expect(Array.isArray(carts[0].products)).toBeTruthy();
  });

  test('should get one cart by id', async ({ request }) => {
    const cartsApi = new CartsApi(request);
    const response = await cartsApi.getCartById(CartDetails.cartData.id);
    const cart = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(cart.id).toBe(1);
    expect(cart.userId).toBeGreaterThan(0);
    expect(cart.products.length).toBeGreaterThan(0);
  });

  test('should add new cart', async ({ request }) => {
    const cartsApi = new CartsApi(request);
    
    const response = await cartsApi.addNewCart(CartDetails.cartData);
    const cart = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    expect(cart.userId).toBeGreaterThan(0);
    expect(cart.products.length).toBeGreaterThan(0);
  });

  test('should update cart', async ({ request }) => {
    const cartsApi = new CartsApi(request);
    
    const response = await cartsApi.updateCart(CartDetails.updatedCartData.id,CartDetails.updatedCartData);
    const cart = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(cart).toMatchObject(CartDetails.updatedCartData);
    expect(cart.userId).toBeGreaterThan(0);
    expect(cart.products.length).toBeGreaterThan(0);
  });

  test('should delete cart', async ({ request }) => {
    const cartsApi = new CartsApi(request);
    const response = await cartsApi.deleteCart(CartDetails.cartData.id);

    expect(response.status()).toBe(200);
  })

});
