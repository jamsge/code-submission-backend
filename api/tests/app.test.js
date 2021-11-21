const request = require("supertest");

const app = require("../app");

beforeAll((done) => {
  done();
});

describe("Is the server running?", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

afterAll((done) => {
  done();
});
