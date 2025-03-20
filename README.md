# Frontend Challenge

Welcome to the Frontend Challenge.

## Overview

This project was bootstrapped with **Vite** using the **React Typescript template**.

To complete this challenge, you will need to write a simple React based web app, and provide us the source files in a
zip-file.

The purpose of this challenge is to assess your skills and approach to composing a simple web app given a set of Figma
screens and an API feed.

## Tasks

You'll need to build a set of React components to render the app while trying to match the Figma designs
as closely as possible. You'll also need to use the provided JSON feed, filter that data, and use the relevant fields.
It is a very small-scale project, but we expect you to approach it and construct your solution as if it was a real,
production-ready project that needs to be maintained by a team of developers and extended with new features.

Although this is a basic exercise, we'll be looking for **simple, well-designed, performant, semantic and tested code**
in the submission.

Please write all markup and styling yourself and refrain from styling libraries like Bootstrap, Material UI, etc.

Please write any notes, thoughts, instructions you might have in the `Candidate Notes` section of this readme file.
E.g., if you leave out some of the requirements you are encouraged to explain how you would have approached them if you
had more time.

### Details

You will need to create the following two pages:

- A "Home" page displaying a list of products
- A "Product" page displaying a single product

You should be able to navigate between the two pages. You can use any routing library you like.
The pages should be responsive and work on mobile, tablet, and desktop. The pages should also be accessible.
You can assume that you only need to support the latest 2 major versions of Chrome, Firefox, Safari, and Edge.

#### "Home" page

    - The page should be accessible via the following route: `/`.
    - It should display a list of products fetched from the feed.
    - Each list item should display the product name, brand, price, and image.
    - Clicking on the product card should navigate to the product page.
    - The list should be sortable by product name, highest- and lowest price (using the "Sort" select).

#### "Product" page

    - The page should be accessible via the following route: `/product/:id`.
    - It should display a single product.
    - The product ID should be used to fetch the product from the feed.
    - It should display a "Back" button that navigates back to the home page.
    - It should display a "Add to basket" button that console logs the product ID.
    - It should display the product information seen in the Figma design.

## Assets

Assets are available in the `src/assets` folder.

### Design

Figma link:
https://www.figma.com/file/OwBWlJRdngF6obgsJaEOwj/Hesehus---Frontend-Test

To be able to inspect the design, you need to be logged in (with whichever account). If you don't have a Figma account,
you can create one for free.

### Feed

The JSON feed is available at `src/feed/sample.ts`.

## Candidate Notes

Please write any notes, thoughts, instructions you might have here.

I did not add the Menu button while making it responsive to phone size because there are no other pages that would use it.
It could be done now, and later when adding more pages it would be ready but I didnt look at it as a priority. 

Took me a while to get used to working with css files again because I have mostly been using tailwind and bootstrap

I did not do any testing because I dont know how to do it but I will look into it
