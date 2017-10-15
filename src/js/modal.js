import * as smoothScroll from 'smoothscroll-polyfill'
smoothScroll.polyfill();

const Modal = {
	currentScroll: 0,
	scrollDelay: 300,
	currentAnswer: null,

	getAnwser(question) {
		const category = parseInt(question.dataset.category);
		const order = parseInt(question.dataset.order);
		this.currentAnswer = document.getElementById(`answer-${category}-${order}`);
		this.currentAnswer.classList.add('active');
	},

	closeAnswer(e) {
		let matchesAnswer = e.target.matches ? e.target.matches('.answer__close') : event.target.msMatchesSelector('.answer__close');
		if (!matchesAnswer) return;
		e.preventDefault();
		const closeButton = e.target;
		const category = parseInt(closeButton.dataset.category);
		const order = parseInt(closeButton.dataset.order);
		this.currentAnswer = document.getElementById(`answer-${category}-${order}`);
		this.currentAnswer.classList.remove('active');

	},
	init() {
		const questions = document.querySelectorAll('.question__wrapper');

		for(let i = 0; i < questions.length; i++) {
			questions[i].addEventListener('click', () => this.getAnwser(questions[i]))
		}
		document.addEventListener('click', (e) => this.closeAnswer(e));
	}
};

export default Modal;