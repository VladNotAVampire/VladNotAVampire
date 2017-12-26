function RandQuestionsVM(questions) {
    this.questions = questions;

    this.i = 0;
    this.currentQuestion = questions[this.i];

    this.next = function () {
        console.log('next');
        this.i++;
        if (this.i > QUESTIONS_NUM - 1)
            this.i = QUESTIONS_NUM - 1;

        this.currentQuestion = this.questions[this.i];

        console.log(this);
    };

    this.previous = function () {
        this.i--;
        if (this.i < 0)
            this.i = 0;

        this.currentQuestion = this.questions[this.i];

        console.log(this);
    };
}