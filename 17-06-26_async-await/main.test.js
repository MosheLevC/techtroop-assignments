import { getUserById } from "./main.js";

test("should return user by ID", async () => {
  const valid = await getUserById(2);
  const invalid = await getUserById(999);
  expect(valid.name).toBe("Ervin Howell");
  expect(invalid).toBeNull();
});
