# videonet-webapp

This is a repository for the Videonet web application, which is originally a challenge application.

The application is currently deployed via `AWS Lambda` and `API Gateway` at [http://videonet-web.s3-website-ap-southeast-2.amazonaws.com](http://videonet-web.s3-website-ap-southeast-2.amazonaws.com).

## Technology

The Videonet webapp is built with the following technologies:

- [React v16.9](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/docs/home/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Serverless Framework](https://www.serverless.com/framework/docs/)

## Installation Instructions

- Clone the project with `git clone https://github.com/adenh93/videonet-webapp.git`
- Enter the directory of the project `cd videonet-webapp`
- Install dependencies via `yarn install`
- Run tests via `yarn test`
- See below about API connectivity
- Start the application via `yarn start`

## API

The Videonet application consumes a GraphQL API, which wraps the TMDB REST API (more details regarding this in the [API project](https://github.com/adenh93/videonet-api)). Due to this, the API project will need to be running in order for the application to work out of the box. If you just want to jump straight in, you can do the following:

- Locate the `.env` file
- Copy the value of the `REACT_APP_PROD_API_URL` environment variable into `REACT_APP_API_URL`

## CI/CD

The application leverages Github Actions for its CI/CD pipeline. Any commits pushed to the `staging` branch will trigger a deployment to `AWS S3` and `Cloudfront` after the build and all tests succeed.

## TODO

There is still quite a bit of polish I would have liked to apply, such as route transitions, improving the look and feel, etc. I also was unable to implement a Hamburger navigation list, due to a lack of time. I would also like to implement some proper error handling, and introduce some Toast notifications.

Currently, the pagination on the Browse page is very basic, and I would like to overhaul the manual pagination by loading more results as the user scrolls.
It would also be great to introduce some e2e testing via `Cypress`, and some fine tuned unit testing.

## Desktop Screenshots

### Home

![Home - Desktop](https://i.ibb.co/yB6wZdd/Home.png)

### Browse - No Search

![Browse - No Search - Desktop](https://i.ibb.co/NWwtGPW/Browse-No-Search.png)

### Browse - Search

![Browse - Search - Desktop](https://i.ibb.co/0DNTP3p/Browse-Search.png)

### Details

![Details - Desktop](https://i.ibb.co/h89Ls5C/Details.png)

### Watch List

![Watch List - Desktop](https://i.ibb.co/n35GB7n/Watch-List.png)

## Mobile Screenshots

### Home

![Home - Mobile](https://i.ibb.co/v3Vq4WK/Home-Mobile.png)

### Browse

![Browse - Mobile](https://i.ibb.co/PmYJ84p/Browse-Mobile.pngb)

### Details

![Details - Mobile](https://i.ibb.co/NKgQPrS/Details-Mobile.png)

### Watch List

![Watch List - Mobile](https://i.ibb.co/1K1tLZy/Watch-List-Mobile.png)
