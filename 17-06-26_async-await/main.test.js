import { getUserById } from "./main.js";

test("should return user by ID", async () => {
  const valid = await getUserById(2);
  const invalid = await getUserById(999);
  expect(valid.name).toBe("Ervin Howell");
});

test("should return null if user doesn't exist", async () => {
  const invalid = await getUserById(999);
  expect(invalid).toBeNull();
});
