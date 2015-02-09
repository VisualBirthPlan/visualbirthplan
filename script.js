var app = angular.module("VisualBirthPlan", ['ui.sortable']);

intro = "This is our ideal birth plan. We understand that not all labors go according to plan, and that we may need to change from this plan based on medical neccessity as things progress. This is our wishlist for an ideal experience for us. If you can help us achieve as much of these as possible, we appreciate it.";

choices = [
    { code:'vd', title:'Vaginal Delivery', state:'meh',
        desc:'Vaginal delivery preferred over C-Section' },
    { code:'cd', title:'Cesarean Delivery', state:'meh',
        desc:'Vaginal delivery preferred over C-Section' },
    { code:'nb', title:'Natural Birth', state:'meh' },
    { code:'wb', title:'Water Birth', state:'meh' },
    { code:'vb', title:'VBAC', state:'meh' },
    { code:'ep', title:'Epidural', state:'meh' },
    { code:'ub', title:'Un-medicated Birth', state:'meh' },
    { code:'om', title:'Other Medication', state:'meh' },
    { code:'si', title:'Scheduled Induction', state:'meh' },
    { code:'sc', title:'Scheduled Cesarean', state:'meh' },
    { code:'pi', title:'Pitocin Induction', state:'meh' },
    { code:'pl', title:'Pitocin During Labor', state:'meh' },
    { code:'sm', title:'Sweep Membranes', state:'meh' },
    { code:'bw', title:'Break Water', state:'meh' },
    { code:'bw', title:'Episiotomy', state:'meh' },
    { code:'pa', title:'Pitocin After Birth', state:'meh' },
    { code:'pm', title:'Pain Medication', state:'meh' },
    { code:'fw', title:'Food & Water (not just IV)', state:'meh' },
    { code:'iv', title:'IV Fluids', state:'meh' },
    { code:'mu', title:'Music', state:'meh' },
    { code:'la', title:'Latex Allergy', state:'meh' },
    { code:'la', title:'Medicine Allergies', state:'meh' },
    { code:'af', title:'Allergen-Free Environment', state:'meh' },
    { code:'fm', title:'Fetal Monitoring', state:'meh' },
    { code:'wf', title:'Wireless Fetal Monitoring', state:'meh' },
    { code:'in', title:'Intermittent Monitoring', state:'meh' },
    { code:'im', title:'Internal Monitoring', state:'meh' },
    { code:'ap', title:'Alternative Pushing Positions', state:'meh' },
    { code:'fm', title:'Free Movement', state:'meh' },
    { code:'st', title:'Shower/Tub During Labor', state:'meh' },
    { code:'bb', title:'Birthing Ball', state:'meh' },
    { code:'bs', title:'Birthing Stool', state:'meh' },
    { code:'sb', title:'Squatting Bar', state:'meh' },
    { code:'ld', title:'Lights Dim', state:'meh' },
    { code:'qd', title:'Quiet During Delivery', state:'meh' },
    { code:'dc', title:'Delayed Cord Clamping', state:'meh' },
    { code:'pc', title:'Partner to Cut Cord', state:'meh' },
    { code:'ss', title:'Immediate Skin to Skin', state:'meh' },
    { code:'bf', title:'Breastfeeding', state:'meh' },
    { code:'ba', title:'Breastfeeding ASAP', state:'meh' },
    { code:'bo', title:'Bottlefeeding', state:'meh' },
    { code:'pa', title:'Pacifiers', state:'meh' },
    { code:'pa', title:'Rooming In with Baby', state:'meh' },
    { code:'bn', title:'Baby May Stay in Nursery', state:'meh' },
    { code:'bn', title:'Prefer Baby in Nursery', state:'meh' },
    { code:'kb', title:'Keep baby with you', state:'meh' },
    { code:'bl', title:'Baby may leave room', state:'meh' },
    { code:'de', title:'Delay Exams', state:'meh' },
    { code:'ib', title:'Immediate Baby Bathing', state:'meh' },
    { code:'wv', title:'Wiping off Vernix', state:'meh' },
    { code:'sp', title:'Save Placenta', state:'meh' },
    { code:'er', title:'Exam In Room', state:'meh' },
    { code:'br', title:'Bathe in Room', state:'meh' },
    { code:'pc', title:'Pacifiers', state:'meh' },
    { code:'eo', title:'Eye Ointment', state:'meh' },
    { code:'hb', title:'Hepatitus B shot', state:'meh' },
    { code:'vk', title:'Vitamin K', state:'meh' },
    { code:'cs', title:'Circumcision', state:'meh' },
    { code:'pk', title:'PKU Test', state:'meh' },
    { code:'gv', title:'Give Vaccinations', state:'meh' },
    { code:'vi', title:'Visitors Before Labor', state:'meh' },
    { code:'vl', title:'Visitors During Labor', state:'meh' },
    { code:'vb', title:'Visitors During Birth', state:'meh' },
    { code:'va', title:'Visitors After Birth', state:'meh' },
    { code:'cb', title:'Save Cord Blood', state:'meh' },
    { code:'fr', title:'Video Birth', state:'meh' },

];

app.controller("choiceController", function($scope) {
    $scope.choices = choices;
    $scope.intro = intro;
    $scope.rotateStates = function($index, $state) {
        // Cycle through all three states (yes/no/meh)
        if ($state == 'meh') {
            $scope.choices[$index].state = 'yes';
        } else if ($state == 'yes') {
            $scope.choices[$index].state = 'no';
        } else if ($state == 'no') {
            $scope.choices[$index].state = 'na';
        } else {
            $scope.choices[$index].state = 'meh';
        }
    }

});

$('ul').draggable({
    stop: function(event, ui) {
        // event.toElement is the element that was responsible
        // for triggering this event. The handle, in case of a draggable.
        $( event.toElement ).one('click', function(e){ e.stopImmediatePropagation(); } );
    }
});
