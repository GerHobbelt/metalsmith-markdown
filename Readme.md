
# metalsmith-brucedown

  A Metalsmith plugin to convert markdown files through [brucedown](https://www.npmjs.org/package/brucedown).

## Installation

    $ npm install metalsmith-markdown

## CLI Usage

  Install via npm and then add the `metalsmith-brucedown` key to your `metalsmith.json`.

```json
{
  "plugins": {
    "metalsmith-brucedown": {}
  }
}
```

## Javascript Usage

```js
var brucedown = require('metalsmith-brucedown');

metalsmith.use(brucedown());
```

## License

  MIT