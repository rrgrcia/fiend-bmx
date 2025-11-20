import { Hono } from "hono";

// Define Env type (replace with your actual bindings if any)
type Env = {};

// Create app
const app = new Hono<{ Bindings: Env }>();

export default app;
