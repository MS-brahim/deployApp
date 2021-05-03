let app = require("../server");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("Server API", () => {
  describe("Test GET route /", () => {
    it("It should return all data", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.not.be.eq(0);
          done();
        });
    });
  });
  describe("Test GET route /:id", () => {
    it("It should return an object by id", (done) => {
      const id = 1;
      chai
        .request(app)
        .get("/byId/" + id)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("createdAt");
          response.body.should.have.property("name");
          response.body.should.have.property("email");
          response.body.should.have.property("phone");
          done();
        });
    });
  });
});
