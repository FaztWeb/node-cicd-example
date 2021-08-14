const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
  it('should respond with "Hello World"', (done) => {
    request(app).get("/").expect("Hello World!", done);
  });

  it('should respond with "pong"', (done) => {
    request(app).get("/ping").expect("pong", done);
  });
});
