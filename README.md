# eslint-config-nicenice

This is standard + standard-jsx with a couple overrides:

```js
{
  'jsx-quotes': ['error', 'prefer-double'],
  'object-curly-spacing': ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
}
```

So

```js
// Dangling commas on multiline things
const a = {
  omg: 1,
}

// Spaces around curleys
const b = { wowza: true }

// JSX quotes are double quotes.
const Cat = () => (
  <input type="text" placeholder="Tell me about your cat" />
)
```

## Try it out here
```sh
yarn
node_modules/.bin/eslint ./test
```

## Use

Install the thing

```sh
yarn add --dev eslint-config-nicenice
```

Install many dependencies because [eslint sucks at them](https://github.com/eslint/eslint/issues/3458)

```sh
yarn add --dev eslint-config-nicenice

# add a billion dependencies because eslint doesnt handle allow them to be wrapped up in this package. Sorry
yarn add --dev eslint @babel/eslint-parser @babel/core eslint-config-standard eslint-config-standard-jsx eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-no-only-tests eslint-plugin-react-camel-case eslint-plugin-n eslint-config-prettier eslint-plugin-prettier
```

Create a `.eslintrc.js` file:

```js
module.exports = {
  extends: ['nicenice']
}
```

![so_good](https://user-images.githubusercontent.com/69169/38057017-f6b53d9e-3292-11e8-954e-8900809d442c.png)
