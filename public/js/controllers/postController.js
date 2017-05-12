app.controller("postController", function($scope) {
 
  $scope.foo = [];//ng-repeat uses 'foo'
    $scope.add = function(){
    $scope.foo.push($scope.title);//add things to the tadalist//ng-model is called'foo'
    $scope.title = ''; //clear the input field
  }

  $scope.delete= function(){
    $scope.foo.splice(this.$index, 1);//remove from the index by one on the delete click
  
  }
  
});