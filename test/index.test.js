const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
  it('should respond with "Hello World"', (done) => {
    request(app).get("/").expect("Hello World", done);
  });
});
