var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var buttonNegative = document.querySelector(".modal__action--negative");
var burgerButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(backdrop);
// console.log(modal);

var selectPlanButton = document.querySelectorAll('.plan button');
console.log(selectPlanButton);


if(selectPlanButton){
	for(var i of selectPlanButton){
		i.addEventListener('click',()=>{
			// backdrop.style.display='block';
			// modal.style.display="block";
			backdrop.classList.add('open');
			modal.classList.add('open');
		})
	}
}

// backdrop.addEventListener('click',closeModal)

backdrop.addEventListener('click',()=>{
	mobileNav.classList.remove('open');
	closeModal();
})

if(buttonNegative){
	buttonNegative.addEventListener('click', closeModal)
}

function closeModal(){
	backdrop.classList.remove('open');
	modal.classList.remove('open');
}


burgerButton.addEventListener('click',()=>{
	backdrop.classList.add('open');
	mobileNav.classList.add('open');
})

