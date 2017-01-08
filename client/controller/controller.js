
app.controller('mainCtrl', function($scope,$timeout, $state){
    $scope.description='Main Controller';
    $scope.menu=[{"route":"trasporti"}, {"label":"Trasporti"}]
      $timeout(function () { $state.go('profilo') });
});

app.controller('profCtrl', function($scope){
  
    $scope.nome="Stefania";
    $scope.cognome="Ditta";
    $scope.info=['Tel : 3280163130', 'via: viale borri 163', 'città: varese', 'nata: 13/03/84'];
    $scope.posizione1=["Autoware S.r.l", " da settembre a dicembre 2016" ]
    $scope.posizione2=[ "Scuola pubblica provincia Varese", "da febbraio 2012 a dicembre 2016"];
    
   
});
app.controller('buttonCtrl',function($scope, $mdBottomSheet){
  $scope.openBottom= function() {
              $mdBottomSheet.show({
                 template: '<md-bottom-sheet>Learn <b>Angular Material</b> @ TutorialsPoint.com!</md-bottom-sheet>'
              });
           };
});
app.controller('progCtrl', function($scope){
     $scope.nomeprog=['progettoTrasporti',
    'progettoPoste',
    'progettoFacedoor',
    'progettoRubrica'];
})



