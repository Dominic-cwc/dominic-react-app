const first = { name: 'Dominic' };
const second = { job: 'Developer' };

const combined = {...first, ...second, location: 'Hong Kong' };
console.log(combined);