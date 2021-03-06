//Quotes service used for quotes REST endpoint
angular.module('mean.quotes').factory("Quotes", ['$resource', function($resource) {
    return $resource('quotes/:quoteId', {
        quoteId: '@_id'
		},
			{
				update: {
					method: 'PUT'
				}
			}
	);
}]);