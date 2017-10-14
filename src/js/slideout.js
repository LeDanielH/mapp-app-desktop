import * as smoothScroll from 'smoothscroll-polyfill'
smoothScroll.polyfill();

const SlideOut = {
	currentScroll: 0,
	scrollDelay: 300,
	currentAnswer: null,

	getAnwser(e) {
		let matchesQuestion = e.target.matches ? e.target.matches('.question__item') : event.target.msMatchesSelector('.question__item');
		if (!matchesQuestion) return;
		e.preventDefault();
		const question = e.target;
		this.saveCurrentScroll(question);
		const category = parseInt(question.dataset.category);
		const order = parseInt(question.dataset.order);
		this.currentAnswer = document.getElementById(`answer-${category}-${order}`);
		const wrapper = document.getElementById('mapp__wrapper');
		this.currentAnswer.classList.add('active');
		wrapper.classList.add('active');
		if (typeof window.scroll !== "undefined") {
			setTimeout(()=> {
				window.scroll({
					top: 0,
					behavior: 'smooth',
					duration: this.scrollDelay
				});
			}, this.scrollDelay);
		}


	},

	saveCurrentScroll() {
		this.currentScroll = Math.max(document.body.scrollTop,document.documentElement.scrollTop, window.pageYOffset);
	},

	closeAnswer() {
		if(this.currentAnswer === null) return;
		const wrapper = document.getElementById('mapp__wrapper');
		this.currentAnswer.classList.remove('active');
		this.currentAnswer = null;
		wrapper.classList.remove('active');
		if ((typeof window.scroll !== "undefined") && (this.currentScroll > 0)) {
			setTimeout(()=> {
				window.scroll({
					top: this.currentScroll,
					behavior: 'smooth'
				});
			}, this.scrollDelay);
		}

	},
	init() {
		document.addEventListener('click', (e) => this.getAnwser(e));
		const arrow = document.getElementById('app__arrow');
		arrow.addEventListener('click', () => this.closeAnswer());
	}
};

export default SlideOut;