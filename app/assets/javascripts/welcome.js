$(document).ready(function(){
  var baseUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/users';
if (location.pathname === '/'){
  $.ajax({
    url: baseUrl,
    type: 'GET',
    dataType: 'JSON',
    success: function(data){
      var tbody = $('#users');
      data.users.forEach(function(user) {
      var row = '<tr><td>' + user.first_name + '</td>';
          row += '<td>' + user.last_name + '</td>';
          row += '<td>' + user.phone_number + '</td>';
          row += '<td><button data-id="' + user.id + '" class="btn btn-primary">Show</button></td></tr>';
        tbody.append(row);
        })
      }
    })
  }


  $(document).on('click', '.btn', function() {
          var id = this.dataset.id;
          location.href = '/welcome/' + id;
        });

        var re = /\/welcome\/\d+/;
          if (location.pathname.match(re)) {
            var panel = $('#panel');
            var id = panel.data('id');
            $.ajax({
              url: baseUrl + '/' + id,
              type: 'GET',
              dataType: 'JSON',
              success: function(data){
                var product = data.user;
                panel.children('#heading').html(user.name);
                var list = '<li>Price: $' + user.base_price + '</li>';
                var description = '<li>Description: ' + user.description + '</li>';
                var remove = '<li><button class="btn btn-danger" id="remove"> Delete</button></li>';
              }
            })
          }
});
