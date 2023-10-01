/** @format */

var xhr = new XMLHttpRequest();
const authInfo = document.getElementById("auth");
const profile = document.querySelector(".profile");

const notLogin = `<ul class="options">
            <li class="option">
              <a href="/signup" class="option-text">Signup</a>
            </li>
            <li class="option">
              <a href="/login" class="option-text">Login</a>
            </li>
          </ul>`;

const isLogin = `<ul class="options">
            <li class="option">
              <a href="/account" class="option-text">Account</a>
            </li>
            <li class="option">
              <a href="/login" class="option-text">Linkedin</a>
            </li>
            <li class="option">
              <a href="/logout" class="option-text">Logout</a>
            </li>
          </ul>`;

const isLoginAdmin = `<ul class="options">
            <li class="option">
              <a href="/account" class="option-text">Account</a>
            </li>
            <li class="option">
              <a href="/admin" class="option-text">Admin Panel</a>
            </li>
            <li class="option">
              <a href="/logout" class="option-text">Logout</a>
            </li>
          </ul>`;

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var resultSearch = JSON.parse(xhr.responseText);
    console.log(resultSearch);
    if (resultSearch == false) {
      authInfo.innerHTML = notLogin;
    } else if (resultSearch.user.role == 2) {
      authInfo.innerHTML = isLoginAdmin;
      profile.src = resultSearch.user.profilePicture;
    } else {
      authInfo.innerHTML = isLogin;
      profile.src = resultSearch.user.profilePicture;
    }
  }
};

xhr.open("POST", "/auth-info", true);
xhr.send();
