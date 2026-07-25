exports.UsersApi = class UsersApi {
  constructor(request) {
    this.request = request;
  }

  // Retrieve a list of all users.
  async getAllUsers() {
    return this.request.get('/users');
  }

  // Retrieve details of a specific user by ID.
  async getASingleUser(userID){
    return this.request.get(`/users/${userID}`);
  }

  // Create a new user.
  async addNewUser(userData){
    return this.request.post('/users', {
        data:userData
    })
  }

  // Update an existing user by ID.
  async updateUser(userID, userData){
    return this.request.put(`/users/${userID}`,{
        data: userData
    })
  }

  // Delete a specific user by ID.
  async deleteUser(userID){
    return this.request.delete(`/users/${userID}`);
  }
}
