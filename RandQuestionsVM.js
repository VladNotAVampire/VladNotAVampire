function RandQuestionsVM(questions) {
    this.questions = [];// = questions;

    this.i = 0;

    var randIndexes = [];

    for(var i = 0; i < 20; i++){
        var index;

        do{
            index = Math.floor(Math.random() * questions.length);
        }
        while(randIndexes.filter(function (t) {
            return t == index;
        }).length != 0);

        randIndexes.push(index);
        this.questions.push(questions[index]);

        if (questions[index] == undefined){
            console.log(index + " wrong");
        }
    }

    this.currentQuestion = this.questions[this.i];



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