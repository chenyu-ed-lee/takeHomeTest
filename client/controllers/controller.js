myApp.controller("appController", function($scope){
	$scope.entries = [];

	$scope.providers = [{
			"first_name":"John",
			"last_name":"Doe",
			"zip":"01234",
			"npi":12345
		},{
			"first_name":"Jane",
			"last_name":"Doe",
			"zip":"93110",
			"npi":23456
		},{
			"first_name":"Bran",
			"last_name":"Doe",
			"zip":"93110",
			"npi":54321
		},{
			"first_name":"Jack",
			"last_name":"Dob",
			"zip":"94101",
			"npi":35467
		},{
			"first_name":"John",
			"last_name":"Doe",
			"zip":"54312",
			"npi":99999
		},{
			"first_name":"Jack",
			"last_name":"Dob",
			"zip":"11002",
			"npi":23556
		},{
			"organization_name":"Johns Hopkins",
			"zip":"01234",
			"npi":22222
		},{
			"organization_name":"Mercy Hospital",
			"zip":"93110",
			"npi":33333
		},{
			"organization_name":"General Hospital",
			"zip":"11002",
			"npi":44533
		}];

	$scope.addNew = function(){
		console.log($scope.newEntry);
		$scope.newEntry = {};
	}

	$scope.showLoading = function(first_name, last_name, organization_name){
		console.log(first_name + " " + last_name);
		console.log(organization_name);
	}

	$scope.quantity = 5;
})