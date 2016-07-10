(function() {
    'use strict';

    angular
	.module('app')
	.factory('permissionsService',permissionsService);

    function permissionsService(localStorageService,userService){
        var rolesKey = 'loggedInUserRoles';

	var factory = {
	    get: get,
	    set: set,
	    hasRolePermissions: hasRolePermissions,
	    clear: clear
	};
	return factory;
	
	function get(){
	    return JSON.parse(window.localStorage.get(rolesKey));
	}	
	function set(roles){
	    window.localStorage.setItem(rolesKey,JSON.stringify(roles));
	}
	function clear(){
	    return window.localStorage.remove(rolesKey);
	}
	function hasRolePermissions(role,permission){
	    var roles = get();
	    
	    var hasRole = _.find(roles,{name: role});
	    if(!hasRole){
	    	return false;
	    }
	    var hasPermission = _.find(hasRole.permissions,{
	    	codename: permission
	    });
	    if(!hasPermissions){
		return false;
	    }
	    return true;
	
	}
    }

})();
