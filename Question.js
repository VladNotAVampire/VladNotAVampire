function Question(text, variants, correctAnswer) {
    this.variants = variants;
    this.text = text;
    this.correctAnswer = correctAnswer;
    this.answer = "";

    this.isAnswerCorrect = function (answer) {
        return this.correctAnswer == answer;
    }
}