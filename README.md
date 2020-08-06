<h1 align="center">
  Deriv.com
</h1>

## In this document:

-   [Pre-installation](#requirements)
-   [Quick start](#quick-start)
-   [How to contribute](#how-to-contribute)
-   [Manage releases](#manage-releases)
-   [Test link deployment](#test-link-deployment)
-   [FAQ](#faq)

## Other Documents

-   [General implementation](documents/implementation-guide.md) - Contain ways to do development in deriv.com
-   [Style guide](documents/style-guide.md) - Contain file structure and advice for developers
-   [Git best practice](documents/git-best-practices.md) - Contain git practices and commit guidelines
-   [File structures](documents/file-structures.md)

## Pre-installation

Before running or contribute to this project, you need to have the following packages setup in your environment

-   node
-   npm
-   git (for `contribution`)
-   gatsby-cli (npm install -g gatsby-cli)

Moreover, having these extensions will help you to speed up the development process and adhere to the best practices

-   Prettier: setup in your editor https://prettier.io/ (or you can run `npm run format`)
-   Stylelint: setup in your editor https://stylelint.io/ (or you can run `npm run stylelint`)
-   Eslint: setup in your editor https://eslint.org/ (or you can run `npm run eslint`)

## Quick start

1.  **Install your dependencies:**

    ```sh
    npm ci
    ```

2.  **To start developing:**

    ```sh
    npm start
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## How to contribute

We have two types of PR (Pull request):

### Base master

PR will be based on master branch if the commits are not having text changes

1. Create branch from latest master branch

    ```sh
    git checkout master
    git pull upstream master
    git checkout -b [_your_branch_name]
    ```

2. MAKE YOUR CHANGES

3. Make pull request

-   Push your changes to your origin

    ```sh
    git push -u origin [_your_branch_name]
    ```

-   Click on the autogenerated link from terminal to open the PR

-   Make sure to change the PR base to `master` branch

### Base crowdin

PR will be based on crowdin branch if the commits are having text changes

1. Create branch from latest crowdin branch

-   if you dont have crowdin branch

    ```sh
    git fetch upstream crowdin
    git checkout crowdin
    git checkout -b [_your_branch_name]
    ```

-   if you have crowdin branch

    ```sh
    git checkout crowdin
    git pull upstream crowdin
    git checkout -b [_your_branch_name]
    ```

2. MAKE YOUR CHANGES

3. Extract translation

-   Make sure you have the latest crowdin changes, resolve conflicts if any

    ```sh
    git pull upstream crowdin
    ```

-   Extract translation text to update `messages.json`

    ```sh
    cd scripts/
    node extract-translations.js
    ```

-   Commit your changes

4. Make pull request

-   Push your changes to your origin, add `-u` flag for the first time push

    ```sh
    git push -u origin [_your_branch_name]
    ```

-   Click on the autogenerated link from terminal to open the PR

-   Make sure to change the PR base to `crowdin` branch

## Manage releases

There are 2 types of releases:

1. Release to staging:

Merging to master (squash and merge) will automatically release last commit to staging server https://staging.deriv.com

2. Release to production:

Releasing to production require a tag using the following format:

`production_VYYYYMMDD_${Integer}`

Example of release steps

-   Create the tag following todays date

    ```sh
    git tag production_V20200806_0 -m 'release to production'
    ```

-   Push tag to main repository

    ```sh
    git push upstream production_V20200806_0
    ```

## Test link deployment

There are two types of test link deployment preview:

1. Automatic deployment

Upon creating PR, `vercel` (https://vercel.com/) will auto-generate test link inside the PR. you can use that to preview test link for the changes you have made.

2. Manual deployment

If preferrable to use manual deployment, you can use gh-pages functionality to create test link. here are ways to do it:

-   **Basic name.github.io/deriv-com/**

    ```sh
    npm run deploy-dev
    ```

    ⚠️ This will remove your branch deployments

-   **To a specific branch:**

    ```sh
    branch_name=fix_all_the_bugs npm run deploy-branch
    ```

    This will be deployed to name.github.io/deriv-com/br/fix_all_the_bugs

⚠️ You have to enable pathPrefix in gatsby-config for manual deployment, otherwise the resources will not be uploaded to the site

## FAQ

-   [how to create new page?](documents/implementation-guide.md#create-new-page)
-   [how to insert image?](documents/implementation-guide.md#image-component)
-   [how to style my element?](documents/implementation-guide.md#styled-component)
-   [Where to put my new component?](documents/file-structures.md)

⚠️ If you have more to questions to add, please open a PR to add question in FAQ section. Answer will be on the PR reviews
