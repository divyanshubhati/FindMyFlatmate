import 'bootstrap';

import '../scss/index.scss';

$('#alert').on('click', () => {
  alert('jQuery works!');
});

// Your jQuery code

$('#register').on('click', () => {
  var ek = [];
  $('.form-control').each(function() {
    ek.push($(this).val());
  });
  console.log(ek);
  //   $.ajax({
  //     url: 'http://localhost:8080/api/v1/person',
  //     data: {
  //       name: "Bugs bunny",
  //       first_name: "Bugs",
  //       last_name: "Bunny",
  //       d_o_b: "22/02/1996",
  //       gender: "Male",
  //       university_email: "bunny@uci.edu",
  //       university_name: "UCI",
  //       program: "MSC",
  //       password: "password",
  //       nationality: "Indian",
  //       dietary: "Vegan",
  //       language: "English",
  //       shared_occupancy: "YES",
  //       pet_preference: "YES",
  //       smoking_habit: "NO",
  //       drinking_habit: "NO"
  //       },
  //     type: 'POST',
  //     contentType: "application/javascript; charset=utf-8",
  //     crossDomain: true,
  //     dataType: 'json',
  //     success: function() { alert("Success"); },
  //     error: function() { alert('Failed!'); },
  // });

  $.post(
    'http://localhost:8080/api/v1/person',
    {
      name: 'Bugs bunny',
      first_name: 'Bugs',
      last_name: 'Bunny',
      d_o_b: '22/02/1996',
      gender: 'Male',
      university_email: 'bunny@uci.edu',
      university_name: 'UCI',
      program: 'MSC',
      password: 'password',
      nationality: 'Indian',
      dietary: 'Vegan',
      language: 'English',
      shared_occupancy: 'YES',
      pet_preference: 'YES',
      smoking_habit: 'NO',
      drinking_habit: 'NO',
    },
    function(data, status) {
      alert('Data: ' + data + '\nStatus: ' + status);
    }
  );
});
