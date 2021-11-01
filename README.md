# React-shopping-cart
 
# Create React App example with TypeScript

## How to run project

First install JSON server npm package in your local computer.

```sh
npm install -g json-server```

Second start the JSON server first before run the project

```sh
json-server --watch 'src/data/products.json' --port 8000

```
If you go to http://localhost:800/products, you will get the product json.

Third, run the project in other terminal
```sh
npm install
npm start

```

## The idea behind the example

I use React context api to add product to cart, because cart should be accessible in every page.
I use material ui and styled components, mainly override the style of material ui component instead of creating my own theme.
I modified the products.json file, as a array of object.

## To do
Some of UI elements' design aren't same as figma design, such as navItem icons.
Displaying product details in product card is little different with figman design.

