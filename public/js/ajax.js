/** @format */

var xhr = new XMLHttpRequest();
const authInfo = document.getElementById("auth");
const profile = document.querySelector(".profile");

const notLogin = `<ul class="options">
            <li class="option">
              <a href="/auth/signup" class="option-text">Signup</a>
            </li>
            <li class="option">
              <a href="/auth/login" class="option-text">Login</a>
            </li>
          </ul>`;

const isLogin = (user) => {
  return `<ul class="options">
<li class="option username">${user}</li>
            </hr>
            <li class="option">
              <a href="/account" class="option-text">Account</a>
            </li>
            <li class="option">
              <a href="/admin" class="option-text">Dashboard</a>
            </li>
            <li class="option">
              <a href="/auth/logout" class="option-text">Logout</a>
            </li>
          </ul>`;
};

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let resultSearch = JSON.parse(xhr.responseText);

    const username = document.querySelector(".username");
    // if dropdown menu
    if (resultSearch == false) {
      authInfo.innerHTML = notLogin;
    } else {
      authInfo.innerHTML = isLogin(resultSearch.user.name);
      profile.src = resultSearch.user.profilePicture;
      // username.innerHTML = resultSearch.user.name;
    }
  }
};

xhr.open("POST", "/auth-info", true);
xhr.send();
