var phonecatApp = angular.module('phonecatApp', []);
var scopeObj;
phonecatApp.controller('PhoneListCtrl', function($scope) {
   
    // just keeping the scope reference on a local variable //
	scopeObj = $scope;
	$scope.dataObj='No data';
	$scope.phoneList = []; 

	// adding new contact entries //
	$scope.addContact=function() 
	{  
		if(!$scope.validateNewContact($scope.contactNumber) )
		$scope.phoneList.push(  {name: $scope.contactName,number: $scope.contactNumber }); 
	};

	// doing a simple validation for duplicate mobile number //
	$scope.validateNewContact=function(newNumber) 
	{   
		for(var i = 0; i < $scope.phoneList.length; i++) 
			{
			    if ($scope.phoneList[i].number == newNumber) 
			    {
			    	alert("Number is already existing \n" +"\nExisting Contact : "+$scope.phoneList[i].name+" , Number: "+$scope.phoneList[i].number);
			        return true;
			        break;
			    }
			} 
			return false;
	};
	
	// Local storage save //
	$scope.saveOnDisk = function (data)
	{
		alert( $scope.$localStorage);
		$localStorage.message = data + " updated"; 

	}

	// Local storage read data //
	$scope.readDataFromDisk=function ()
	{
 		$scope.dataObj = $localStorage.message;
	}


});
 





 
 