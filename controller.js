console.log("it's")

var myApp = angular.module("myApp");
myApp.controller("controller",function ($scope) {
    var vm = this
    var questionsModel;

    vm.state = 'start';

    vm.start = function () {
        questionsModel = new QuestionsModel();
        console.log(questionsModel);
        vm.randQuestionsVM = questionsModel.getRandQuestionsVM();
        vm.state = 'tests';
    }
});