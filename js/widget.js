var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

var room = new XMLHttpRequest();
room.onreadystatechange = function () {
  if(room. readyState === 4 && room.status === 200){
    var roomm = JSON.parse(room.responseText);
    var roomHTML = '<ul class = "rooms">';
      for (var i = 0; i < roomm.length; i ++){
        if(roomm[i].available === true){
        roomHTML += '<li class="empty">';
        }else {
          roomHTML += '<li class="full">';
      }
        roomHTML += roomm[i].room;
        roomHTML += '</li>';
  }
    roomHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomHTML;
  }
};
room.open('GET', '../data/rooms.json');
room.send();