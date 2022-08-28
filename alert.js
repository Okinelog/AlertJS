"use strict";
/**
 * Required Tailwind CSS!
 * Notification messages
 * @param {string} type - error | success | info
 * @param {string} message - message
 * @param {integer} timeout - disappear after time
 */
function alertJS(type, message, timeout = 0){
	var box = document.querySelector("#alertJSBox")
	var div = document.createElement("div");
	if(box === null){
		box = document.createElement("div")
		box.id = "alertJSBox"
		box.classList.add("absolute")
		box.classList.add("right-5")
		box.classList.add("top-5")
	}
	box == null ? div.classList.add("mb-5") : div.classList.add("mb-2.5")
	div.classList.add("alertJSBox")
	div.classList.add("text-sm")
	div.classList.add("text-white")
	div.classList.add("py-3")
	div.classList.add("px-4")
	div.classList.add("rounded")
	div.classList.add("animate-bounce")
	div.classList.add("transition-all")
	div.classList.add("duration-100")
	div.classList.add("delay-100")
	div.append(message)
	if(type == 'error'){
		div.classList.add("bg-red-500")
	}
	else if(type == 'success'){
		div.classList.add("bg-green-500")
	}
	else if(type == 'info'){
		div.classList.add("bg-blue-600")
	}
	box.appendChild(div)
	document.body.appendChild(box)
	setTimeout( () => { div.classList.add("opacity-0") }, timeout )
	setTimeout( () => { div.remove() }, (timeout + 400) )
}