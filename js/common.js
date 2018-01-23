var prog = [
	[], []
]


prog[0][0] = document.querySelector('.dances .main_buttonset .la');
prog[0][1] = document.querySelector('.dances .main_buttonset .st');
prog[1][0] = document.querySelector('.dances .la_buttonset');
prog[1][1] = document.querySelector('.dances .st_buttonset');

prog[0][0].onclick = click_1;
prog[0][1].onclick = click_2;

function click_1() {
		prog[0][1].style.color = '#fff'
		prog[0][1].style.backgroundColor = 'rgba(0, 0, 0, 0)'
		prog[0][0].style.backgroundColor = '#ffc80a'
		prog[0][0].style.color = '#000'
		prog[1][1].style.display = 'none'
		prog[1][0].style.display = 'block'
}

function click_2() {
		prog[0][0].style.color = '#fff'
		prog[0][0].style.backgroundColor = 'rgba(0, 0, 0, 0)'
		prog[0][1].style.backgroundColor = '#ffc80a'
		prog[0][1].style.color = '#000'
		prog[1][0].style.display = 'none'
		prog[1][1].style.display = 'block'
}

document.querySelector('.start_dance .container .entry .adults .button').onclick = step_2
document.querySelector('.start_dance .container .entry .child .button').onclick = step_2

function step_2() {
	document.querySelector('.start_dance .container .entry').style.display = 'none'
	document.querySelector('.start_dance .container .contacts').style.display = 'block'
	document.querySelector('.start_dance .container .line .int_1').style.display = 'none'
	document.querySelector('.start_dance .container .line .tick_1').style.display = 'block'
	document.querySelector('.start_dance .container .line .line_1').style.color = '#8f75be'
	document.querySelector('.start_dance .container .line .line_1').style.backgroundColor = '#8f75be'
	document.querySelector('.start_dance .container .line .int_2').style.backgroundColor = '#8f75be'
	document.querySelector('.start_dance .container .line .int_2').style.border = '#8f75be'
}

document.querySelector('.start_dance .container .contacts .container .d_back .back').onclick = step_2_inverse

function step_2_inverse() {
	document.querySelector('.start_dance .container .entry').style.display = 'flex'
	document.querySelector('.start_dance .container .contacts').style.display = 'none'
	document.querySelector('.start_dance .container .line .int_1').style.display = 'block'
	document.querySelector('.start_dance .container .line .tick_1').style.display = 'none'
	document.querySelector('.start_dance .container .line .line_1').style.color = '#ffc80a'
	document.querySelector('.start_dance .container .line .line_1').style.backgroundColor = '#ffc80a'
	document.querySelector('.start_dance .container .line .int_2').style.backgroundColor = '#ffc80a'
	document.querySelector('.start_dance .container .line .int_2').style.border = '#ffc80a'
}






var dances = [
	[], []
]

var flag_1 = 0
var flag_2 = 0

dances[0][0] = document.querySelector('.dances .la_buttonset .sa');
dances[0][1] = document.querySelector('.dances .la_buttonset .ch');
dances[0][2] = document.querySelector('.dances .la_buttonset .ru');
dances[0][3] = document.querySelector('.dances .la_buttonset .pd');
dances[0][4] = document.querySelector('.dances .la_buttonset .jv');

dances[1][0] = document.querySelector('.dances .st_buttonset .sw');
dances[1][1] = document.querySelector('.dances .st_buttonset .tg');
dances[1][2] = document.querySelector('.dances .st_buttonset .vw');
dances[1][3] = document.querySelector('.dances .st_buttonset .sf');
dances[1][4] = document.querySelector('.dances .st_buttonset .qs');

console.log(dances[1][0])

