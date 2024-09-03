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
