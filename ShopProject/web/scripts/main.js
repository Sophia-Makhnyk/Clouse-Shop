function updateConferenceInfo() {

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    let currentYear = currentDate.getFullYear();
    let currentDayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });

    let actionDate = new Date("August 1, 2024 09:00:00 GMT+0000");
    let leftUntil = actionDate - currentDate;
    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor((leftUntil / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((leftUntil / 1000 / 60) % 60);
    let seconds = Math.floor((leftUntil / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateConferenceInfo();
setInterval(updateConferenceInfo, 1000);


document.addEventListener('DOMContentLoaded', function () {
  const heartButtons = document.querySelectorAll('.heart-button');
  heartButtons.forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
});




var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


document.querySelector('form').addEventListener('submit', function (event) {
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirm_password').value;

            if (password !== confirmPassword) {
                alert('Паролі не співпадають');
                event.preventDefault();
            }
        });

        