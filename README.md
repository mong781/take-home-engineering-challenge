# Take Home Engineering Challenge

We are a very practical team at Microsoft and this extends to the way that we work with you to find out if this team is a great fit for you. We want you to come away with a great understanding of the work that we actually do day to day and what it is like to work with us.

So instead of coding at a whiteboard with someone watching over your shoulder under high pressure, which is not a thing we often do, we instead discuss code that you have written previously when we meet.

This can be a project of your own or a substantial pull request on a third party project, but some folks have done largely private or proprietary work, and this engineering challenge is for you.

## Guidelines

-   This is meant to be an assignment that you spend approximately three hours of dedicated, focused work. Do not feel like you need to overengineer the solution with dozens of hours to impress us. Be biased toward quality over quantity.

-   Think of this like an open source project. Create a repo on Github, use git for source control, and use README.md to document what you built for the newcomer to your project.

-   Our team builds, alongside our customers and partners, systems engineered to run in production. Given this, please organize, design, test, deploy, and document your solution as if you were going to put into production. We completely understand this might mean you can't do as much in the time budget. Be biased for production-ready over features.

-   Think out loud in your submission's documentation. Document tradeoffs, the rationale behind your technical choices, or things you would do or do differently if you were able to spend more time on the project or do it again.

-   Our team meets our customers where they are in terms of software engineering platforms, frameworks, tools, and languages. This means you have wide latitude to make choices that express the best solution to the problem given your knowledge and favorite tools. Make sure to document how to get started with your solution in terms of setup.

## The Problem

Our San Francisco team loves to eat. They are also a team that loves variety, so they also like to discover new places to eat.

In fact, we have a particular affection for food trucks. One of the great things about Food Trucks in San Francisco is that the city releases a list of them as open data.

Your assignment is to make it possible for us to find a food truck no matter where our work takes us in the city.

This is a freeform assignment. You can write a web API that returns a set of food trucks (our team is fluent in JSON). You can write a web frontend that visualizes the nearby food trucks. We also spend a lot of time in the shell, so a CLI that gives us a couple of local options would be great. And don't be constrained by these ideas if you have a better one!

The only requirement for the assignment is that it give us at least 5 food trucks to choose from a particular latitude and longitude.

Feel free to tackle this problem in a way that demonstrates your expertise of an area -- or takes you out of your comfort zone. For example, if you build Web APIs by day and want to build a frontend to the problem or a completely different language instead, by all means go for it - learning is a core competency in our group. Let us know this context in your solution's documentation.

San Francisco's food truck open dataset is [located here](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data) and there is an endpoint with a [CSV dump of the latest data here](https://data.sfgov.org/api/views/rqzj-sfat/rows.csv). We've included a [copy of this data](./Mobile_Food_Facility_Permit.csv) in this repo as well.

Good luck! Please send a link to your solution on Github back to us at least 12 hours before your interview so we can review it before we speak.


## The Product

This problem creates an excellent opportunity for us to create a value added service on top of the data provided by the city of San Francisco.  We need to capture the market by strategically delivering features to capture the market early on.  Below is the proposed immediate project and then future phases for product expansion.

## Project Tasks
- Feature Goal: Creation of a CLI feature that returns 5 carts within the range of a provide latitude and longitude.  The approach is to find food cart records closes in the range to the provided coordinates until the limit is reached.
- Subtasks: Prepare a function to determine the closest trucks based on coordinates.
- Create basic test cases to ensure reliability of method

## Assumptions & Considerations:  
 - Data provided is always available
 - Data is finite and can fit into memory as it applies to only San Francisco. Otherwise, we'll need to use a KV database
 - Food truck location id is unique per latitude and longitude coordinates
 - Only status:APPROVED permits items are allowed to be returned
 - Decision to create standalone application for speed and avoiding need to be connected 
 
 ## How to Run
 From command line, execute...
  > npm install -g .

  Usage:  feedme latitude longitude numResults
  > feedme 37.7568774515357 -122.418579889476 5


## Future Features Expansion
- Expose sychronization feature with the data source.  This will ensure we are able to obtain the latest information for new food choices and eliminate those no longer in business.
- Expose an API with the similiar parameters as the CLI
- Create a mobile app that utilizes the API
- Allow changing of data for different cities