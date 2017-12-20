function QuestionsModel() {
    this.questions = [
        new Question("Hello, are you loved?", ["Yeap :)", "No -_-"], "Yeap :)"),
        new Question("Is this test awesome?", ["Of course!", "Heck nope", "I'm not sure"], "I'm not sure")
    ];

    this.getRandQuestionsVM = function () {
        return new RandQuestionsVM(this.questions);
    }
}