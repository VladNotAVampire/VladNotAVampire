function QuestionsModel() {
    this.questions = [
        new Question("Hello, are you loved?", ["Yeap :)", "No -_-"], "Yeap :)"),
        new Question("Is this test awesome?", ["Of course!", "Heck nope", "I'm not sure"], "I'm not sure"),
        new Question("What is the correct answer?", ["A", "B", "C", "D"], "B"),
        new Question("What is the name of this site developers team?", [
            "L/O/M",
            "Джерельні програмісти",
            "Extruit",
            "ЧМО",
            "Кипиш"
        ], "ЧМО"),
        new Question("What mark have we deserved", [
            "5",
            "4",
            "3",
            "2"
        ],  "5")
    ];

    this.getRandQuestionsVM = function () {
        return new RandQuestionsVM(this.questions);
    }
}