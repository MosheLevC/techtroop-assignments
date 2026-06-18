import { getUserById, getUserWithPosts, getDashboardData } from "./main.js";

test("should return user by ID", async () => {
  const valid = await getUserById(2);
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
});

test("should return null for non-existent user with posts", async () => {
  const data = await getUserWithPosts(999);
  expect(data).toBeNull();
});

test("should return dashboard summary data", async () => {
  const dashboard = await getDashboardData();

  expect(dashboard.summary).toBeDefined();
  expect(dashboard.summary.totalUsers).toBe(10);
  expect(dashboard.summary.totalPosts).toBe(100);
  expect(dashboard.summary.totalComments).toBe(500);

  expect(dashboard.topUsers.length).toBe(3);
  expect(dashboard.topUsers[0]).toHaveProperty("name");
  expect(dashboard.topUsers[0]).toHaveProperty("postCount");
  expect(dashboard.topUsers[0]).toHaveProperty("commentCount");

  expect(dashboard.recentPosts.length).toBe(5);
  expect(dashboard.recentPosts[0].id).toBeGreaterThan(dashboard.recentPosts[4].id);
});
