
// ====== SCROLL BAR ======
onScroll = () => {
    if(scrollY > 41) {
        navgation.classList.add('scroll')
    } else {
        navgation.classList.remove('scroll')
    }
}
// document.getElementById("theImage").style.visibility = "visible";

document.onscroll = function() {myFunction()};

myFunction = () => {
    if (document.documentElement.scrollTop > 41) {
    document.getElementById("image").className = "visible";
    } else {
    document.getElementById("image").className = "invisible";
    }
}

// ====== START Widget WhastApp hospedagemwordpresspro ======

function showIt2() {document.getElementById("msg1").style.visibility = "visible";}    setTimeout("showIt2()", 5000); function hiddenIt() {document.getElementById("msg1").style.visibility = "hidden";}setTimeout("hiddenIt()", 15000); function showIt3() {document.getElementById("msg1").style.visibility = "visible";} setTimeout("showIt3()", 25000);  msg1.onclick = function() {document.getElementById('msg1').style.visibility = "hidden"; };function alertW() { document.getElementById("alertWapp").style.visibility = "visible";	} setTimeout("alertW()", 15000);

// ====== END Widget WhastApp ======

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'O link da sua página',
			text: 'Thiago Desenvolvedor Front-End',
			url: 'https://thiagosgomes-dev.github.io/arvore-links/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
    accordionItemBody.style.maxHeight = 0;
    }
    
	});
});

// CAROUSEL AREA, INICIO 

// Call carousel manually
$('#myCarouselCustom').carousel();
// Go to the previous item
$("#prevBtn").click = () => {
	$("#myCarouselCustom").carousel("prev");
};
// Go to the previous item
$("#nextBtn").click =() => {
	$("#myCarouselCustom").carousel("next");
};
$('.carousel').carousel({
interval: 8000,
pause:false,
wrap:false
});

// CAROUSEL AREA, FIM