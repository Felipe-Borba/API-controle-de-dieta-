import { prisma, request } from "./utils";


describe("server", () => {
  test("GET /", async () => {
    const result = await request.get("/");

    expect(result.status).toBe(200);
    expect(result.body).toEqual({ message: "Hello World!" });
  });
});

describe("Jest healthy check", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(2 + 1).toBe(3);
  });
});
