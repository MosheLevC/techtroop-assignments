import { getUserById, getUserWithPosts } from "./main.js";

test("should return user by ID", async () => {
  const valid = await getUserById(2);
  const invalid = await getUserById(999);
  expect(valid.name).toBe("Ervin Howell");
});

test("should return null if user doesn't exist", async () => {
  const invalid = await getUserById(999);
  expect(invalid).toBeNull();
});

test("should return user with their posts", async () => {
  const data = await getUserWithPosts(1);
  expect(data.user.name).toBe("Leanne Graham");
  expect(Array.isArray(data.posts)).toBe(true);
  expect(data.posts.length).toBeGreaterThan(0);
  expect(data.posts[0].userId).toBe(1);
});

test("should return null for non-existent user with posts", async () => {
  const data = await getUserWithPosts(999);
  expect(data).toBeNull();
});
