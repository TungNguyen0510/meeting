import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protechedRoutes = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  "/meeting(.*)"
])
export default clerkMiddleware((auth,req) => {
  if(protechedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
