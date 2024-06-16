import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/forum(.*)',
    '/dashboard','/my-kart'

  ]);
export default clerkMiddleware((auth,req) =>{
    
    if(isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|).*)', '/', '/(|trpc)(.*)'],
};