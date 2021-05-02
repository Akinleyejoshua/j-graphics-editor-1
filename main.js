console.log("Start")
// inputs 
const textInput = document.querySelector(`[name = 'Text']`);
const backgroundInput = document.querySelector(`[name = 'Background']`);
const colorInput = document.querySelector(`[name = 'Color']`);
const fontInput = document.querySelector(`[name = 'Font']`);
const fontSizeInput = document.querySelector(`[name = 'Font-size'`)
const borderInput = document.querySelector(`[name = 'Border']`);
const paddingInput = document.querySelector(`[name = 'Padding']`);
const borderRadiusInput = document.querySelector(`[name = 'Border-radius']`);
const boxShadowInput = document.querySelector(`[name = 'Box-shadow']`);
const textShadowInput = document.querySelector(`[name = 'Text-shadow']`);
const displayInput = document.querySelector(`[name = 'Display']`);

// Button
const applyButton = document.querySelector(`[name = 'Apply']`)

// display area
const displayArea = document.querySelector(`#display`);

//EVENTS

applyButton.addEventListener('click', function apply(){
	const edit = displayArea.style;
	displayArea.innerHTML = textInput.value;
	edit.background = backgroundInput.value;
	edit.color =  colorInput.value;
	edit.fontFamily = fontInput.value;
	edit.fontSize = fontSizeInput.value;
	edit.border = borderInput.value;
	edit.padding = paddingInput.value;
	edit.borderRadius = borderRadiusInput.value;
	edit.boxShadow = boxShadowInput.value;
	edit.textShadow = textShadowInput.value;
	edit.display = displayInput.value;

})

console.log('End')