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

// Ex3
export async function getDashboardData() {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
      throw new Error("Failed to fetch dashboard data");
    }

    const [users, posts, comments] = await Promise.all([usersRes.json(), postsRes.json(), commentsRes.json()]);

    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;

    const topUsers = users
      .map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id);
        const postIds = userPosts.map((post) => post.id);
        const commentCount = comments.filter((comment) => postIds.includes(comment.postId)).length;

        return {
          name: user.name,
          postCount: userPosts.length,
          commentCount,
        };
      })
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    const recentPosts = [...posts].sort((a, b) => b.id - a.id).slice(0, 5);

    return {
      summary: {
        totalUsers,
        totalPosts,
        totalComments,
        avgPostsPerUser: totalUsers ? totalPosts / totalUsers : 0,
        avgCommentsPerPost: totalPosts ? totalComments / totalPosts : 0,
      },
      topUsers,
      recentPosts,
    };
  } catch (error) {
    console.error("Dashboard error:", error.message);
    throw error;
  }
}
