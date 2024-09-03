# Possible Bug

Repo example for issue [#18720](https://github.com/webpack/webpack/issues/18720).

The bug seems to bug is related to interpolation of filename from a variable, but it works if the interpolation is an inline string.

## Usage

```shell
yarn
yarn build
node dist/main.js
```

As `src/index.js` is setup runs the failing case, otherwise uncomment.

```javascript
async function main() {
  // It fails it is used a variable as interpolated value.
  const filename = 'data';
  const {default: data} = await import(`./${filename}.json`);
  console.log('fails ==>', data); // fails ==> {}

  // It works with an inline string value
  // const {default: data} = await import(`./${'data'}.json`);
  // console.log('works ==>', data); // works ==> { x: 123 }
}

main();
```
