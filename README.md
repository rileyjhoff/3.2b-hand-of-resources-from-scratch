# Template for Backend Express

The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Scripts

| command                | description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | runs the tests once                                                                 |
| `npm run test:watch`   | continually watches and runs the tests when files are updated                       |
| `npm run setup-db`     | sets up the database locally                                                        |
| `npm run setup-heroku` | sets up the database on heroku                                                      |

# Hand of Resources

### Learning Objectives

- Create and deploy a POST endpoint that creates a resource and responds created object
- Create and deploy a GET endpoint that returns an array of objects
- Create and deploy a GET endpoint that returns a single matching object based on the id in the path and req.params.id
- Create and deploy a PUT/PATCH endpoint that updates a resource with the matching id and responds the updated object
- Create and deploy a DELETE endpoint that deletes a resource with the matching id and responds the deleted object
- Add JSON deserialization middleware and use the body in a route
- Use params to simplify the extraction of “id” from a router
- Utilize Router to implement a horizontally scalable Express App architecture
- Use the pg library with $1, $2, $3 syntax to sanitize our SQL queries to prevent SQL injection.
- Use pg to make queries against a Postgres DB
- Connect to a Postgres DB using the pg node module
- Deploy an API to Heroku

### Description

It’s time to get some practice writing controllers, models, and tests! For this deliverable, you’ll make a single API that can create/read/update/delete five different types of resources. They don’t have to be related in any way; for example, your API could use dogs, shows, songs, games, and foods.

You need to create five different controllers, five different models, and five different test files corresponding to each resource. Create your tables using the `sql/setup.sql` file and `npm run setup-db` command. **Your tables should contain at least three fields (including `id`)**. Try experimenting with different field types in Postgres.

Your test files should be added to the `__tests__` directory. Each test file should be named after the resource it’s testing (e.g. `__tests__/dogs.test.js`). **Each route for each resource needs to be tested!**

Your commits need to show a vertical approach. A vertical approach means that you wrote the test, controller, and model for a single resource and committed it, rather than writing the tests for all the resources in a single commit, then all the controllers in another, etc. Make sure your commit messages are relevant and descriptive.

Finally, once you’ve built out all the routes, deploy your API to Heroku and give yourself a high five.

### Acceptance Criteria

- Five controller files exist for each resource
- Five model files exist for each resource
- Five test files exist for each resource
- Test pass and sufficiently cover making the request and validating the response
- Route paths follow RESTful conventions
- API is deployed to Heroku

### Rubric

| Task                                                     | Points    |
| -------------------------------------------------------- | --------- |
| For each resource:                                       |           |
| Create (test, model, route)                              | 0.5       |
| Read (test, model, route)                                | 0.5       |
| Update (test, model, route)                              | 0.5       |
| Delete (test, model, route)                              | 0.5       |
| Total for 5 resources                                    | 2 x 5 = 10|
| Commit history shows vertical approach (see description) | 5         |
| API is RESTful                                           | 3         |
| API is deployed to Heroku                                | 2         |
