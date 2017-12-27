function QuestionsModel() {
    var abcde = ["А", "Б", "В", "Г", "Д"];

    this.questions = [
        new Question('images/1.png', abcde, "Б"),
        new Question('images/2.png', abcde, "Д"),
        new Question('images/3.png', abcde, "В"),
        new Question('images/4.png', abcde, "Б"),
        new Question('images/5.png', abcde, "Г"),
        new Question('images/6.png', abcde, "Г"),
        new Question('images/7.png', abcde, "А"),
        new Question('images/8.png', abcde, "В"),
        new Question('images/9.png', abcde, "Г"),
        new Question('images/10.png', abcde, "Д"),
        new Question('images/11.png', abcde, "Г"),
        new Question('images/12.png', abcde, "В"),
        new Question('images/13.png', abcde, "А"),
        new Question('images/14.png', abcde, "Д"),
        new Question('images/15.png', abcde, "А"),
        new Question('images/16.png', abcde, "Б"),
        new Question('images/17.png', abcde, "А"),
        new Question('images/18.png', abcde, "Д"),
        new Question('images/19.png', abcde, "А"),
        new Question('images/20.png', abcde, "Г"),

        new Question('images/21.png', abcde, "А"),
        new Question('images/22.png', abcde, "Б"),
        new Question('images/23.png', abcde, "Г"),
        new Question('images/24.png', abcde, "Г"),
        new Question('images/25.png', abcde, "Б"),
        new Question('images/26.png', abcde, "В"),
        new Question('images/27.png', abcde, "В"),
        new Question('images/28.png', abcde, "Д"),
        new Question('images/29.png', abcde, "Д"),
        new Question('images/30.png', abcde, "А"),
        new Question('images/31.png', abcde, "Г"),
        new Question('images/32.png', abcde, "В"),
        new Question('images/33.png', abcde, "А"),
        new Question('images/34.png', abcde, "Г"),
        new Question('images/35.png', abcde, "Д"),
        new Question('images/36.png', abcde, "Б"),
        new Question('images/37.png', abcde, "Б"),
        new Question('images/38.png', abcde, "А"),
        new Question('images/39.png', abcde, "Д"),
        new Question('images/40.png', abcde, "А"),

        new Question('images/41.png', abcde, "А"),
        new Question('images/42.png', abcde, "Б"),
        new Question('images/43.png', abcde, "Г"),
        new Question('images/44.png', abcde, "Г"),
        new Question('images/45.png', abcde, "Б"),
        new Question('images/46.png', abcde, "В"),
        new Question('images/47.png', abcde, "В"),
        new Question('images/48.png', abcde, "Д"),
        new Question('images/49.png', abcde, "Д"),
        new Question('images/50.png', abcde, "А"),
        new Question('images/51.png', abcde, "Г"),
        new Question('images/52.png', abcde, "В"),
        new Question('images/53.png', abcde, "А"),
        new Question('images/54.png', abcde, "Г"),
        new Question('images/55.png', abcde, "Д"),
        new Question('images/56.png', abcde, "Б"),
        new Question('images/57.png', abcde, "Б"),
        new Question('images/58.png', abcde, "А"),
        new Question('images/59.png', abcde, "Д"),
        new Question('images/60.png', abcde, "А")

        /*
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
        */
    ];

    this.getRandQuestionsVM = function () {
        return new RandQuestionsVM(this.questions);
    }
}