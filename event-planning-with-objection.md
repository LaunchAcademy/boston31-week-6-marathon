Oh my goodness, a social calendar is so difficult to track these days. Help us organize our events and attendees so that our users can have a fantabulous social life. 

### Getting Started

```
et get event-planning-with-objection
cd event-planning-with-objection
yarn install
createdb event_planning_development
yarn run dev
```

### Core Requirements

#### Step 0

To get started, work as a group to review the provided code. Specifically, your React frontend has been provided. You should not need to make any changes to the provided React code _unless specified in the steps below_.

Take note of what components exist, where they are rendered (what paths), what their responsibilities are, and where they are making `fetch` calls to.

The entities we will be working with at first are a `Category` and an `Event`. A category such as "outdoors" could have an event such as "picnic brunch". 

We will then attempt to relate events and guests! In our app, we want our guests to attend whatever events they want, multiple if they choose! And of course, multiple guests can be invited to an event.

Given this criteria, take a moment to consider the ER diagram that we may need for this app. 

#### Step 1

We need to build an application to keep track of all of the events we want to plan! Let's start by adding a "categories" table into our database. Each category should have a required string of "name".

Your `Category` model and "/api/v1/categories" API endpoint have been provided to you, so once your migration has been created, be sure to migrate, review your model and `categoriesRouter`, and then visit <http://localhost:3000/categories> to see your categories on the page! If you want to test it out, you can seed a single category in the Objection console, but we will also seed data after the next step.

#### Step 2

Now that we have our categories, we want to add events under each category.

Create a migration for an "events" table. Events should have a required string of "name" and an optional string of "description". **Consider what else you need to add in order to associate events with a particular category!**

Your `Event` model has been provided to you, so once your migration has been created and migrated, you can run `yarn run db:seed` from your `server` directory to seed some categories and events into your database.

#### Step 3

We need to update our category "show" API endpoint ("/api/v1/categories/:id") to include the events related to the category.

First, add all necessary `relationMappings` to your `Category` and `Event` models in order to associate the two objects properly.

Once your `relationMappings` have been set up properly, update the API endpoint referenced above to nest the related events under the category.

When your API endpoint has been updated, you can visit the "/categories/:id" path to see your category show page in action!

#### Step 4

Now that we can see the related events on our page, we want to be able to add new events.

Our first step will be adding the nested router, so that we can create a POST endpoint to add new events under a particular category. This endpoint will have a path of "/api/v1/categories/:categoryId/events".

You have been provided with a `categoryEventsRouter` file. Create your router within this file, and  namespace that router within your `categoriesRouter` in order to nest the url as indicated. Be sure to add the `mergeParams: true` option when creating your `categoryEventsRouter`!

For now, add the empty POST endpoint without any code inside.

#### Step 5

We need our POST endpoint to be able to successfully persist new events, so that when we submit our form, it either saves our new event, or gives us helpful errors

Inside of your POST API endpoint, first store your `categoryId` and form input in variables. Be sure to "clean" your form input using the `cleanUserInput` service.

If the event saves properly, return it, with a `201 Created` status, to the React frontend. If validation fails, return a `422 Unprocessable Entity` and the error to the frontend in your response.

#### Step 6

It's time to be able to see guests for our events. We will be building out an event "show" page that shows the event details, as well as all guests invited to an event.

The same person can be invited to multiple events: what kind of database relationship does this require?

Add a migration to create a "guests" table. Guests should have required strings of `firstName` and `lastName`.

Also add a migration for an "invitations" join table. This table should have any columns required in order to join events and guests.

#### Step 7

*Note: should your group choose, you may decide to split this step up. One individual can setup the ManyToMany relations, while the other sets up any OneToMany relations*

Now that our tables have been set up, we can add our associations for this new relationship. You have been provided with a `Guest` and `Invitation` model. Add any necessary relationMappings to your `Event`, `Guest`, and `Invitation` models to complete the join relationships!

Once you have added the relationships, seed some guests and invitations using the Objection console.

#### Step 8

We want to see our guests on the event page! Update the provided event "show" API endpoint in `eventsRouter.js` to nest related guests under the event object.

#### Step 9

We need to clean up our API endpoints! Add a `CategorySerializer` object which has a `getSummary` method. This method should only allow the name and id of each category through to your API endpoint.

Update your `categoriesRouter` index API endpoint to utilize your `CategorySerializer`.

#### Step 10

Add a `getDetails` method to your `CategorySerializer` which allows only the id and name of each category to appear. In this method, the related `events` should also be added to the category.

Update your `categoriesRouter` show API endpoint to utilize your `CategorySerializer`.

#### Step 11

Finally, let's clean up our last GET API endpoint - our `eventsRouter` "show" endpoint. Add an `EventSerializer` object which has a `getDetails` method. This method should only allow the name, description, and id of each event through to your API endpoint. In this method, the related `guests` should also be added to the event.

Update your `eventsRouter` show API endpoint to utilize your `EventSerializer`.