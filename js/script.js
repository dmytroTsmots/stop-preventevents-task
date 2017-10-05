var onClick = function(e) {
	var $el = e.target;
	e.stopPropagation();
	$el.style.backgroundColor = 'yellow';
	alert('CLICK!');
}

box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;


var onClick = function(e) {
  var $el = e.target;
  e.preventDefault();
  $el.style.backgroundColor = 'yellow';
  alert('CLICK!');
}

box4.onclick = onClick;
box5.onclick = onClick;
box6.onclick = onClick;