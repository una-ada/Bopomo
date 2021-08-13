# Bopomo

A social platform (full stack MERN application) to share free web fonts with
full technical specifications for ease of use.

## Getting Started

Open the deployed application on Heroku at [bopomo.herokuapp.com][1] which will
direct you to a Sign In page with a link to a Sign Up page for new users.

Once logged in, you'll see an index of posted fonts and a form to upload new
font files.

## Solutions

Bopomo is a MERN stack application hosted on Heroku and MonogoDB atlas via a GCP
cluster. Server functionality is handled by a REST API written in ES2015
(JavaScript) with the Express.js framework.

## Planning

User stories following a "AAU I want to &lt;action&gt;, because &lt;reason&gt;"
format and sorted by milestones are stored as cards on a [Trello board][2]. Said
cards are also linked to GitHub issues on this repo for more thorough planning
within contributions.

The database is planned with an ERD saved as a [Lucid document][3] using the
crow's foot ERD template.

Wireframes are currently sketches that can be found in the [docs/img][4] folder
on this repo.

## Next Steps

Future plans for development include:

- More user interaction
  - Comments on fonts
  - Comment replies
  - Comment votes
  - Following users
  - Shared font pairings
- Integrations
  - Repo links on fonts
  - Continuous integration font updates
  - OAuth signup and sign in
- Security options
  - Password updates
  - Locked/private accounts
  - Blocking users
  - Disabling comments on fonts

[1]: https://bopomo.herokuapp.com/
[2]: https://trello.com/b/ifgO1H27/bopomo
[3]: https://lucid.app/lucidchart/5e3370f4-9a25-4409-9e2c-28b8849a83c0/view
