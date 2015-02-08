var app = angular.module("VisualBirthPlan", []);

intro = "This is our ideal birth plan. We understand that not all labors go according to plan, and that we may need to change from this plan based on medical neccessity as things progress. This is our wishlist for an ideal experience for us. If you can help us achieve as much of these as possible, we appreciate it.";

choices = [
    { code:'vd', title:'Vaginal Delivery', state:'yes',
        desc:'Vaginal delivery preferred over C-Section' },
    { code:'wb', title:'Water Birth', state:'no' },
    { code:'pi', title:'Pitocin Induction', state:'meh' },
    { code:'pa', title:'Pitocin After Birth', state:'no' },
    { code:'pm', title:'Pain Medication', state:'no' },
    { code:'fw', title:'Food & Water', subtitle:'Preferred to IV', state:'meh' },
    { code:'im', title:'Intermittent Monitoring', state:'no' },
    { code:'ap', title:'Alternative Pushing Positions', state:'no' },
    { code:'fm', title:'Free Movement', state:'no' },
    { code:'ld', title:'Lights Dim', state:'no' },
    { code:'qd', title:'Quiet During Delivery', state:'no' },
    { code:'dc', title:'Delayed Cord Clamping', state:'no' },
    { code:'pc', title:'Partner to Cut Cord', state:'no' },
    { code:'ss', title:'Immediate Skin to Skin', state:'no' },
    { code:'bf', title:'Breastfeeding ASAP', state:'no' },
    { code:'de', title:'Delay Exams for Bonding', state:'no' },
    { code:'sp', title:'Save Placenta', state:'no' },
    { code:'ib', title:'Immediate Bathing', state:'meh',
        subtitle:'of baby' },
    { code:'wv', title:'Wiping off Vernix', state:'no' },
    { code:'er', title:'Exam In Room', state:'no' },
    { code:'br', title:'Bathe in Room', state:'no' },
    { code:'pc', title:'Pacifiers', state:'no' },
    { code:'eo', title:'Eye Ointment', state:'no' },
    { code:'hb', title:'Hepatitus B shot', state:'no' },
    { code:'vk', title:'Vitamin K', state:'no' },
    { code:'cs', title:'Circumcision', state:'no' },
    { code:'pk', title:'PKU Test', state:'no' },
    { code:'gv', title:'Give Vaccinations', state:'no' },

];

app.controller("choiceController", function($scope) {
    $scope.choices = choices;
    $scope.intro = intro;
    $scope.rotateStates = function($index, $state) {
        // Cycle through all three states (yes/no/meh)
        if ($state == 'yes') {
            $scope.choices[$index].state = 'no';
        } else if ($state == 'no') {
            $scope.choices[$index].state = 'meh';
        } else {
            $scope.choices[$index].state = 'yes';
        }
    }

});
