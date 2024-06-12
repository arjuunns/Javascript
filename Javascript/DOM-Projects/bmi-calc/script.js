const form = document.querySelector('form');

// this use case wont work
// const height = document.querySelector('#height');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Enter valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Enter valid weight ${weight}`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    // show result =>
    // results.innerHTML = `<span>${bmi}</span>`;
    // try to add more to the span element different way
    if(bmi<18.6) results.innerHTML = `<span>UnderWeight : ${bmi}`;
    else if(bmi>18.6 &&bmi<24.9) results.innerHTML = `<span>Normal : ${bmi}`;
    else results.innerHTML = `<span>Over Weight : ${bmi}`;
  }
  
});
