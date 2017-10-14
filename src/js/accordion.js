class Accordion {

	constructor(listener, panel, content) {
		this.listener = listener;
		this.panel = panel;
		this.content = content;
	}

	handler(element) {
		const accordion = element.parentNode;
		const content = accordion.querySelector(`${this.content}`);
		const isActive = accordion.classList.contains('active');
		if(isActive) {
			accordion.classList.remove('active');
			content.removeAttribute('style');
		} else {
			for(let i = 0; i < this.accordions.length; i++) {
				this.accordions[i].classList.remove('active');
				this.accordions[i].querySelector(`${this.content}`).removeAttribute('style');
			}
			accordion.classList.add('active');
			content.style.maxHeight = `${1.2 * this.getContentHeight(content)}px`;
		}
	}

	getContentHeight(element) {
		const content = element.children[0];
		return content.offsetHeight;
	}

	init() {
		this.accordionsHeader = document.querySelectorAll(`${this.listener}`);
		this.accordions = document.querySelectorAll(`${this.panel}`);
		for(let i = 0; i < this.accordions.length; i++) {
			this.accordionsHeader[i].addEventListener('click',() => this.handler(this.accordionsHeader[i]));
		}
	}
}

export default Accordion;

