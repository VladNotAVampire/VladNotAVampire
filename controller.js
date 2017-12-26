console.log("it's")

var myApp = angular.module("myApp");
myApp.controller("controller",function ($scope) {
    var vm = this;
    var questionsModel;

    vm.state = 'start';
    vm.questionsNum = QUESTIONS_NUM;
    vm.logInModel = new LogInModel();

    vm.start = function () {
        if (vm.logInModel.name != "" && vm.logInModel.secondName != "") {
            if (questionsModel == undefined)
                questionsModel = new QuestionsModel();

            console.log(questionsModel);
            vm.randQuestionsVM = questionsModel.getRandQuestionsVM();
            vm.state = 'tests';
            return;
        }


    };

    vm.finish = function () {
        vm.resultVM = new ResultVM(vm.logInModel, vm.randQuestionsVM);
        vm.state = 'result';
    };
});