// Listen for submit button
// when we submit it calls calculate results funcion right away and we need to change this
// we can take e out from calculate results and get rid of prevent default and move it here
document.getElementById('loan-form').addEventListener('submit', function (e) {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loader as soon this is clicked
  document.getElementById('loading').style.display = 'block'; // and now when we click calculate show little spinner.

  // we want to loader show 2 seconds before calculate. 2000 miliseconds
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log('Calculate');
  //UI Variables, we need all form fields
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const mounthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // principal is amount. We want amount as value and as convert to float decimal
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  // Compute mounthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const mounthly = (principal * x * calculatedInterest) / (x - 1); //give us mounthly payment
  //once it calculate we want to chack to see if this mounthly amount is finite number

  if (isFinite(mounthly)) {
    //display results in fields, and set number to decimals
    mounthlyPayment.value = mounthly.toFixed(2);
    totalPayment.value = (mounthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((mounthly * calculatedPayment) - principal).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';

    //Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    //if this isnt finite
    showError('Please check your numbers');
  }


}

// Show error
function showError(error) {

  // Hide results
  document.getElementById('results').style.display = 'none';

  //Hide loader
  document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  //Get elements
  // we want card as a parent div, and heading
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';
  // Create text node and append to div, and text is whatever is passed
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  // take parent. inserBefore()method call it on parent and pass it the element we want put it, which is error div, whatever we want insert before it is heading
  card.insertBefore(errorDiv, heading);

  // Clar error after 3 seconds
  // method wiht 2 parameters, first is function we call call it or make there. 
  // 3000 because it is miliseconds
  setTimeout(clearError, 3000);

}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}