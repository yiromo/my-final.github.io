
document.getElementById("subscription-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Play the sound
  var sound = document.getElementById("submit-sound");
  sound.play();

  // Apply the animation to the form
  var form = document.getElementById("subscription-form");
  form.classList.add("disappear-animation");

  // Optionally, you can add a delay to remove the form after the animation
  setTimeout(function () {
    form.style.display = "none";
  }, 1000); // Adjust the delay (in milliseconds) as needed
});

$(document).ready(function () {
  // Function to filter articles based on search input
  function filterArticles(query) {
    query = query.toLowerCase();
    $('.card').each(function () {
      const articleText = $(this).text().toLowerCase();
      if (articleText.includes(query)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // Search input keyup event listener
  $('#search-input').on('keyup', function () {
    const query = $(this).val();
    filterArticles(query);
  });

  // Search button click event listener
  $('#search-button').on('click', function () {
    const query = $('#search-input').val();
    filterArticles(query);
  });
});


function getDayOfWeek(dateString) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
}


document.getElementById("date1").textContent += ` (${getDayOfWeek("September 29, 2023")})`;
document.getElementById("date2").textContent += ` (${getDayOfWeek("September 29, 2023")})`;
document.getElementById("date3").textContent += ` (${getDayOfWeek("September 29, 2023")})`;
document.getElementById("date4").textContent += ` (${getDayOfWeek("September 29, 2023")})`;

document.getElementById("subscription-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const successAlert = document.getElementById("success-alert");
  const errorAlert = document.getElementById("error-alert");

  // Simulate subscription success (you can replace this with your subscription logic)
  const isSubscriptionSuccessful = Math.random() < 0.5;

  if (isSubscriptionSuccessful) {
    // Show success alert and hide error alert
    successAlert.style.display = "block";
    errorAlert.style.display = "none";
    emailInput.value = ""; // Clear email input on success
  } else {
    // Show error alert and hide success alert
    errorAlert.style.display = "block";
    successAlert.style.display = "none";
  }
});

$(document).ready(function() {
  $("#subscription-form").submit(function(e) {
    e.preventDefault(); // Prevent the form from submitting (for demonstration purposes)
    $("#subscription-form").fadeOut("slow", function() {
      // Animation complete, you can add any additional actions here
    });
  });
});


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


//real time date
function updateDateTime() {
  const dateTimeElement = document.getElementById("date-time");
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  dateTimeElement.textContent = `Current Date and Time: ${formattedDate} ${formattedTime}`;
}

setInterval(updateDateTime, 1000);


const UserPreferences = {
  theme: 'light',
};

function applyTheme() {
  if (UserPreferences.theme === 'light') {
    document.body.style.backgroundColor = '#ffffff'; // Light theme background color
  } else if (UserPreferences.theme === 'dark') {
    document.body.style.backgroundColor = '#383c44'; // Dark theme background color
  }
}

// Initial theme application
applyTheme();


const toggleThemeButton = document.getElementById('toggle-theme-button');

toggleThemeButton.addEventListener('click', function () {
  // Toggle between 'light' and 'dark' themes
  UserPreferences.theme = UserPreferences.theme === 'light' ? 'dark' : 'light';
  applyTheme(); // Apply the selected theme
});
