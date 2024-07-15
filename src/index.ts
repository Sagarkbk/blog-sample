import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.onError((err, c) => {
  console.error(err);
  return c.text("Internal Server Error", 500);
});

export default app;

// Add input validation after publishing types to npm

// Categories/Tags:

// Implement a category or tagging system for blogs.

// User Profiles:

// Add endpoints to view and update user profiles.

// Image Upload:

// Add functionality to upload and store images for blog posts.

// Rate Limiting:

// Implement rate limiting to prevent abuse of your API.

// Caching:

// Implement caching for frequently accessed data to improve performance.
