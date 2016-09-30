angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {
  $scope.cadastrarData = {};

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.doCadastrar = function(){
    console.log('Cadastrar', $scope.cadastrarData);
    console.log($scope.cadastrarData.horario);
    var teste = {'nome': 'fgfdgfdg'};
    console.log(teste.nome);
    $state.go("app.index");
  }
})

.controller('TarefasCtrl', function($scope) {
  $scope.tarefas = [
    { 'tarefa': 'Lava Roupa', 'descricao': 'Apenas as Jeans', 'horario' : '13:50'},
    { 'tarefa': 'Formatar Notebook', 'descricao': 'Apple', 'horario' : '14:20'},
    { 'tarefa': 'Caminhar', 'descricao': 'No parque', 'horario' : '15:40' },
    { 'tarefa': 'Jogar LOL', 'descricao': 'Com o Franklin', 'horario' : '16:50'},
    { 'tarefa': 'Comprar maçã', 'descricao': 'da branca', 'horario' : '18:40'},
  ];
  console.log($scope.tarefas);
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    /*{ title: 'Cadastrar', id: 1 },
    { title: 'Consultar', id: 2 },
    /*{ title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }*/
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
