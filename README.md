# `babel-plugin-styled-components-ssr`

Add server-side rendering support to `styled-components`!

## Usage

**NOT LIVE YET BECAUSE EXPERIMENTAL, WE AREN'T SURE IF WE ACTUALLY NEED THIS JUST YET**

```
npm install --save-dev babel-plugin-styled-components-ssr
```

Then in your babel configuration (probably `.babelrc`):

```JSON
{
  "plugins": ["styled-components-ssr"]
}
```

## Todo before release

- [ ] Figure out if we actually need this
- [ ] Add support for different import name, e.g. `import s from 'styled-components'` breaks at the moment
- [ ] More tests to make sure we're solid and have covered all the edge cases

## License

Licensed under the MIT License, Copyright © 2016 Maximilian Stoiber.

See [LICENSE.md](./LICENSE.md) for more information.

## Acknowledgments

This repo is largely based on [@vdanchenkov](https://github.com/vdanchenkov)s excellent [`babel-plugin-styled-components-named`](https://github.com/vdanchenkov/babel-plugin-styled-components-named). Thank you!
