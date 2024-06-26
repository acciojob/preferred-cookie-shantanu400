document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the current values of the inputs
  let fontsize = document.getElementById('fontsize').value;
  let fontcolor = document.getElementById('fontcolor').value;

  // Save the values as cookies
 // document.cookie = `fontsize=${fontsize}; expires`;
	document.cookie="fontsize=fontsize; expires=Thu,27 June 2024, 12:00:00 UTC ";
  document.cookie = `fontcolor=${fontcolor}; expires=Thu,27 June 2024, 12:00:00 UTC`;

	document.documentElement.style.setProperty('--fontsize', fontsize + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontcolor);
});
