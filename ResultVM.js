function ResultVM(LogInModel, QuestionsVM) {
    this.name = LogInModel.name;
    this.secondName = LogInModel.secondName;
    this.questions = QuestionsVM.questions;

    this.correctAnswersNumber = 0;

    for(var i = 0; i < QuestionsVM.questions.length; i++){
        this.correctAnswersNumber += QuestionsVM.questions[i].isAnswerCorrect(QuestionsVM.questions[i].answer) ? 1 : 0;

        if (!QuestionsVM.questions[i].isAnswerCorrect(QuestionsVM.questions[i].answer))
            console.log(QuestionsVM.questions[i]);

        QuestionsVM.questions[i].answer = undefined;
    }

    this.percents = Math.round((this.correctAnswersNumber / QUESTIONS_NUM) * 100);
}