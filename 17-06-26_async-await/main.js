// Ex1
export async function getUserById(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

// Ex2
async function getUserPosts(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await response.json();
    console.log(`Fetched ${posts.length} posts for user ${userId}`);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getUserWithPosts(userId) {
  const user = await getUserById(userId);
  if (!user) {
    return null;
  }

  const posts = await getUserPosts(userId);
  return { user, posts };
}
