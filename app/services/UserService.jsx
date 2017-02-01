import $ from 'jquery';

class UserService{
    static login(username, password){
        var url = '/authenticate';
        var deferred = $.Deferred();

        $.ajax({
            url: url,
            type: 'POST',
            data: JSON.stringify({username: username, password: password}),
            dataType: 'json',
            contentType: 'application/json',
            success: function(result){
                deferred.resolve(result);
            },
            error: function(error){
                deferred.reject(error);
            }
        });

        return deferred.promise();
    }
}

export default UserService;