import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "./pages/index",
    error: "/",
  },
});
