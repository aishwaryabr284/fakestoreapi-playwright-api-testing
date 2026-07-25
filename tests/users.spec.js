const { test, expect } = require('@playwright/test');
const { AuthApi } = require('../api/authApi');
const { UsersApi } = require('../api/usersApi');
import { UserDetails } from '../testData/UserData';
import { LoginDetails } from '../testData/Logindetails';

test.describe('Users API', () => {
    test('should get all users', async ({ request }) => {
        const usersApi = new UsersApi(request);
        const response = await usersApi.getAllUsers();
        const users = await response.json();

        expect(response.ok()).toBeTruthy();
        expect(Array.isArray(users)).toBeTruthy();
        expect(response.status()).toBe(200);
        expect(users.length).toBeGreaterThan(0);
        expect(users[0]).toHaveProperty('id');
        expect(users[0]).toHaveProperty('email');
        expect(users[0]).toHaveProperty('username');
    });

    test('should get single user', async ({ request }) => {
        const usersApi = new UsersApi(request);
        const response = await usersApi.getASingleUser(UserDetails.UserData.id);
        const user = await response.json();

        expect(response.ok()).toBeTruthy();
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('password')
    });

    test('should create a new user', async ({ request }) => {
        const usersApi = new UsersApi(request);        
        const response = await usersApi.addNewUser(UserDetails.UserData);
        const createdUser = await response.json();

        expect(response.status()).toBe(201);
        expect(createdUser).toHaveProperty('id');
        expect(createdUser.id).toBeTruthy();
    });

    test('should update the user', async ({ request }) => {
        const usersApi = new UsersApi(request);

        const response = await usersApi.updateUser(UserDetails.UpdatedUserData.id, UserDetails.UpdatedUserData);
        const updatedData = await response.json();

        expect(response.status()).toBe(200);
        expect(updatedData).toMatchObject(UserDetails.UpdatedUserData);
    })

    test('should delete user', async ({ request }) => {
        const usersApi = new UsersApi(request);
        const response = await usersApi.deleteUser(UserDetails.UserData.id);

        expect(response.status()).toBe(200);
    })


    test('should login with valid user credentials', async ({ request }) => {
        const authApi = new AuthApi(request);
        const response = await authApi.login(LoginDetails.LoginData.username,LoginDetails.LoginData.password);
        
        //expect(response.ok()).toBeTruthy();
        const loginResult = await response.json();        
        expect(loginResult).toHaveProperty('token');
        expect(loginResult.token.length).toBeGreaterThan(0);
    });

});

