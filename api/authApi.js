class AuthApi {
  constructor(request) {
    this.request = request;
  }

  // Authenticate a user.
  async login(username, password) {
    return this.request.post('/auth/login', {
      data: {
        username,
        password
      }
    });
  }
}

module.exports = { AuthApi };
