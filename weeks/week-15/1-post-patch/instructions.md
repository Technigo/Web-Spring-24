# Instructions
If you followed the 'Happy Thoughts' React assignment, you should remember this one - our own version of Twitter, but focusing on positivity and friendliness rather than, well, Twitter. 😉

In the Happy Thoughts project, you built a frontend in React which uses an API we created to store thoughts. For this project, we want you to build your own API which works in the same way and should become a drop-in replacement for the API you used in the React frontend.

We built a frontend that has a form to write a new 'happy thought', lists recent thoughts, and shows a count of 'hearts' on each thought. Users could then click the heart to like a thought. It looked like this:
![Untitled (6)](https://github.com/Technigo/project-happy-thoughts-api/assets/51529201/83233e11-75cf-467e-aa71-4e5909f3fd14)

In order to replace the API we built, you're going to need to build a `Thought` Mongoose model which has properties for the `message` string, a `heart` property for tracking the number of likes, and a `createdAt` property to store when the thought was added.
## Endpoints to add

### `GET /thoughts`
This endpoint should return a maximum of 20 thoughts, sorted by `createdAt` to show the most recent thoughts first.

### `POST /thoughts`
This endpoint expects a JSON body with the thought `message`, like this: `{ "message": "Express is great!" }`. If the input is valid (more on that below), the thought should be saved, and the response should include the saved thought object, including its `_id`.

### `POST thoughts/:thoughtId/like`
This endpoint doesn't require a JSON body. Given a valid thought id in the URL, the API should find that thought, and update its `hearts` property to add one heart.

### The thought model
We mentioned the `Thought` model and its properties a bit earlier. Each of these properties has some special rules or validations which you must implement to make a good API for the frontend:
- `message` - the text of the thought
  - Required
  - Min length of 5 characters
  - Max length of 140 characters
- `hearts` - the number of heart clicks this thought has received
  - Defaults to `0`
  - Should not be assignable when creating a new thought. For example, if I send a POST request to `/` to create a new thought with this JSON body; `{ "message": "Hello", "hearts": 9000 }`, then the `hearts` property should be ignored, and the object we store in mongo should have 0 hearts.
- `createdAt` - the time the Thought was added to the database
  - Defaults to the current time
  - Should not be assignable when creating a new thought

### Using your API
Once you've created your API, you should deploy it, and update your frontend project to use your own API instead of the old Technigo one. The idea is that if you build this API correctly, **the only thing you should need to change in the frontend code is the URL to the API,** to change it from the Technigo one to the one you deploy.

## Requirements
- Your API should implement the routes exactly as documented in the instructions above
- Your `GET /thoughts` endpoint should only return 20 results, ordered by `createdAt` in descending order.
- Your API should validate user input and return appropriate errors if the input is invalid.
- In the `POST /thoughts` endpoint to create a new thought, if the input was invalid and the API is returning errors, it should set the response status to `400` (bad request).
- The endpoint to add hearts to a thought should return an appropriate error if the thought was not found.

## Stretch goals
So you’ve completed the requirements? Great job! Make sure you've committed and pushed a version of your project before starting on the stretch goals. Remember that the stretch goals are optional.

### Intermediate Stretch Goals
***Remember**: For any new feature you add to the backend, be mindful of how that will require the frontend to change, and vice-versa.*
- Give thoughts a category or tags. So you could organize them. For example 'Food thoughts', 'Project thoughts', 'Home thoughts', etc.
- Allow users to enter their name in a new property on the thought model, or remain anonymous.

### Advanced Stretch Goals
- Add filtering and sorting options to the endpoint which returns all thoughts. So you could choose to sort by oldest first or only show thoughts with many hearts.
- Implement [pagination](https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js) in your backend & frontend so you can click through pages of thoughts. The frontend could request a specific page and show only that page. The backend would take the request for that page and return only the thoughts for that page. Rather than only showing the most recent 20 thoughts. 
- You could also experiment with implementing [infinite scrolling](https://www.npmjs.com/package/react-infinite-scroller) on the frontend rather than having a list of page numbers. This idea is similar to paging and involves frontend & backend changes.
- Feel free to add other features that pop into your mind to exercise creating and fulfilling a virtual "contract" between the frontend and backend. This is a very valuable exercise in understanding both parts.
