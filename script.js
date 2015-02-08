var app = angular.module("VisualBirthPlan", []);

intro = "This is our ideal birth plan. We understand that not all labors go according to plan, and that we may need to change from this plan based on medical neccessity as things progress. This is our wishlist for an ideal experience for us. If you can help us achieve as much of these as possible, we appreciate it.";

choices = [
    { code:'vd', title:'Vaginal Delivery', state:'meh',
        desc:'Vaginal delivery preferred over C-Section' },
    { code:'ce', title:'Cesarean Delivery', state:'meh',
        desc:'Vaginal delivery preferred over C-Section' },
    { code:'wb', title:'Natural Birth', state:'meh' },
    { code:'wb', title:'Epidural', state:'meh' },
    { code:'wb', title:'Other Medication', state:'meh' },
    { code:'wb', title:'Water Birth', state:'meh' },
    { code:'pi', title:'Pitocin Induction', state:'meh' },
    { code:'pa', title:'Pitocin After Birth', state:'meh' },
    { code:'pm', title:'Pain Medication', state:'meh' },
    { code:'fw', title:'Food & Water', subtitle:'Preferred to IV', state:'meh' },
    { code:'af', title:'Allergen-Free Environment', state:'meh' },
    { code:'im', title:'Intermittent Monitoring', state:'meh' },
    { code:'im', title:'Internal Monitoring', state:'meh' },
    { code:'ap', title:'Alternative Pushing Positions', state:'meh' },
    { code:'fm', title:'Free Movement', state:'meh' },
    { code:'ld', title:'Lights Dim', state:'meh' },
    { code:'qd', title:'Quiet During Delivery', state:'meh' },
    { code:'dc', title:'Delayed Cord Clamping', state:'meh' },
    { code:'pc', title:'Partner to Cut Cord', state:'meh' },
    { code:'ss', title:'Immediate Skin to Skin', state:'meh' },
    { code:'bf', title:'Breastfeeding ASAP', state:'meh' },
    { code:'de', title:'Delay Exams for Bonding', state:'meh' },
    { code:'sp', title:'Save Placenta', state:'meh' },
    { code:'ib', title:'Immediate Bathing', state:'meh',
        subtitle:'of baby' },
    { code:'wv', title:'Wiping off Vernix', state:'meh' },
    { code:'er', title:'Exam In Room', state:'meh' },
    { code:'br', title:'Bathe in Room', state:'meh' },
    { code:'pc', title:'Pacifiers', state:'meh' },
    { code:'eo', title:'Eye Ointment', state:'meh' },
    { code:'hb', title:'Hepatitus B shot', state:'meh' },
    { code:'vk', title:'Vitamin K', state:'meh' },
    { code:'cs', title:'Circumcision', state:'meh' },
    { code:'pk', title:'PKU Test', state:'meh' },
    { code:'gv', title:'Give Vaccinations', state:'meh' },
    { code:'vi', title:'Visitors After Birth', state:'meh' },

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
