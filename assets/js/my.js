
var clienttotal = 124;
var projecktotal = 56;
var c = 0;
var p = 0;
var client = document.getElementById('client');
var projeck = document.getElementById('projeck');
	var refreshIntervalId = setInterval(function(){

		
var otal = clienttotal + projecktotal;

if ((c+p) > otal) {
	clearInterval(refreshIntervalId);
}


		if (c > clienttotal) {
			
		}else {
			client.innerHTML = c;
			c++;
		}

		if (p > projecktotal) {
			
		}else {
			projeck.innerHTML = p;
			p++;
		}




	}, 100);





function openmenu() {
	var openmenu = document.getElementById('openmenu');
	var tampilmenu = document.getElementById('tampilmenu');
	if (tampilmenu.style.display == "flex") {
		tampilmenu.style.display = "none";
		openmenu.classList.replace('fa-times','fa-bars');
	}else {
		tampilmenu.style.display = "flex";
		openmenu.classList.replace('fa-bars','fa-times');
	}
}
function about(id){
	var btnabout1 = document.getElementById('btnabout1');
	var btnabout2 = document.getElementById('btnabout2');
	var bio = document.getElementById('bio');
	var education = document.getElementById('education');
	if (id === 1) {
		if (btnabout1.className == "btn-active aos-init aos-animate") {
			
		}else {
			btnabout2.classList.remove('btn-active');
			btnabout1.classList.add('btn-active');
			education.style.display = "none";
			bio.style.display = "block";
		}
	}else {
		if (btnabout2.className == "btn-active aos-init aos-animate") {
			alert('sedang aktif');
		}else {
			btnabout1.classList.remove('btn-active');
			btnabout2.classList.add('btn-active');
			education.style.display = "block";
			bio.style.display = "none";
			education.style.display = "block";
		}
	}
}