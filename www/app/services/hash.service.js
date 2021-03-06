angular.module("HashService", [])

.service("HashService", function() {
	var that = this;
	var hashes = { 3159615086: 'glimmer', 1415355184: 'crucible marks', 1415355173: 'vanguard marks', 898834093: 'exo', 3887404748: 'human', 2803282938: 'awoken', 3111576190: 'male', 2204441813: 'female', 671679327: 'hunter', 3655393761: 'titan', 2271682572: 'warlock', 3871980777: 'new monarchy', 529303302: 'cryptarch', 2161005788: 'iron banner', 452808717: 'queen', 3233510749: 'vanguard', 1357277120: 'crucible', 2778795080: 'dead orbit', 1424722124: 'future war cult' };
	that.getHashValue = getHashValue;

	function getHashValue(value) {
		return hashes[value];
	}

	return that;
});