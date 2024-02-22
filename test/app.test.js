import app from "../src/app";
import supertest from "supertest";

describe("GET / array items", () => {
  test("get to / returns 200 and data", async () => {
    const result = await supertest(app).get("/api/books");
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(
      expect.objectContaining({
        id: expect.any(integer),

        title: expect.any(String),

        author: expect.any(Boolean),
      })
    );
  });

  //   test("post to / echoes json", async () => {
  //     const result = await supertest(app).post("/").send({
  //       test: "value",
  //     });
  //     expect(result.statusCode).toEqual(200);
  //     expect(result.body).toBeTruthy();
  //     expect(result.body.test).toBe("value");
  //   });

  //   test("404 & json returned from nonexistent route", async () => {
  //     const result = await supertest(app).get("/badPath");
  //     expect(result.statusCode).toEqual(404);
  //     expect(result.body.message).toBeTruthy();
  //   });
});
