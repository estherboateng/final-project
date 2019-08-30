// an input session.
 let input = document.getElementById('invalid'); 

input.onblur = function() {
	if (!input.value.includes('@')) { 
		// if email does not includes the @ symbol then it's not valid
		input.classList.add('invalid');
		return error.innerHTML = 'Please enter a valid email.';
	}
};

input.onfocus = function() {
	if (this.classList.contains('invalid')) {
		// remove the "error" indication, because the user wants to re- enter something
		this.classList.remove('invalid');
		error.innerHTML = "";
	}
};

