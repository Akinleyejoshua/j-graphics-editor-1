// style editor 
//BODY
function body(){
	const body = document.querySelector('body');
	body.style.background = 'whitesmoke';
	body.style.fontFamily = 'monospace';
	body.style.dislplay = 'flex';
}body()

//HEADING 1
function heading(){
	const h1 = document.querySelector('h1');
	const edit = h1.style;
	edit.textShadow = '3px 6px 9px grey';
	edit.fontSize = '2em';
	edit.textAlign = 'center';
	edit.color = 'white'
}heading()

//TOOLS
function tools(){
	const tools = document.querySelector('#tools');
	const edit = tools.style
	edit.background = 'white';
	edit.boxShadow = '0px 0px 8px gray';
	edit.padding = '1em';
	edit.borderRadius = '1em';
}tools()

//LABELS
function label(){
	const labels = document.querySelectorAll('label');
	for (i = 0; labels.length > i; i++){
	labels[i].style.color = 'skyblue';
	}
}label()

//INPUTS
function input(){
	const inputs = document.querySelectorAll('input');
	for (i = 0 ; inputs.length > i ; i++){
		inputs[i].style.background = 'whitesmoke';
		inputs[i].style.border = 'none';
		inputs[i].style.padding = '0.2em';
		inputs[i].style.margin = '0.2em';
	}
}input()

//Apply Button
function applybutton(){
	const applybutton = document.querySelector('button');
	const edit = applybutton.style;
	edit.border = 'none';
	edit.background = 'skyblue';
	edit.padding = '0.5em';
	edit.boxShadow = '0px 0px 6px gray';
	edit.color = 'white';
}applybutton()

// Fieldset
function fieldSet(){
	const fieldset = document.querySelector('fieldset');
	const edit = fieldset.style;
	edit.background = 'white';
	edit.border = 'none';
	edit.boxShadow = '0px 0px 1px gray';
	edit.borderRadius = '0.5em';
	edit.textAlign = 'center';
}fieldSet()

// Display
function display(){
	const display = document.querySelector('#display');
	const edit = display.style
	edit.padding = '1em';
	edit.margin = '10px';
	edit.position = 'relative';
}display()