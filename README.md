# Photo app

This app shows your photos. You can like a photo by clicking the star icon. Likes are client sided, and not held in local storage.

## Installation

```
npm i
```

## Getting started

To start the app, run `npm run dev`

`/` Is the home page where it lists your photos. Authentication is required for this route. If you are not authenticated, you will be redirected to `/login`. For simplicity sake, any username or password can be entered. The only real constraint is that the username and password can not be empty.

To log out, visit `/login` and you will be automatically logged out.


## About 

The authentication is supposed to mimick JWT in an http only cookie.


## Production Improvements

- Have a chat with the designer to decrease the horizontal padding to 16px, so more content can be visible on mobile.
- Ask the designer how we're supposed to handle large amounts of text on the alt. 
- Ask designer about focus states and disabled states.
- Perhaps some E2E tests.
- I'd use BetterAuth for auth here instead of the pseudo jwt auth. 
- Proper validation of login data. I'm only checking client side that they are not empty and on the backend that they exist in the form data.
- Showing login validation messages
- The fact that I can't change the likes through pexels API complicated things a little. I would have used react-query to mutate the like and then invalidate the `'photos'` query, which would automatically refetch the photos and update the liked data, but I had to take a different approach. Instead, I held the likes in context. This also raises questions as to how the likes are supposed to function, such as, should likes persist in local storage? What happens if the photos were to be refetched? Does the like come from the recently fetched 
- Have some type of dealio where images load in smoothly, like a fade in or something.
- Optimize for which image I use from pexels verses the actual size used.



