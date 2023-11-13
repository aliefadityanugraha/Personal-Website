/** @format */

var xhr = new XMLHttpRequest();
const authInfo = document.getElementById("auth");
const profile = document.querySelector(".profile");
const dashboardMenu = document.getElementById("ajax-menu");

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

const isRoleOne = `<li class="nav-item">
              <a class="nav-link" href="/admin">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/insert-post">Posts</a>
            </li>`;

const isRoleTwo = `<li class="nav-item">
              <a class="nav-link" href="/admin">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/insert-post">Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/insert-category">Category</a>
            </li>`;

const isRoleThree = `<li class="nav-item">
              <a class="nav-link" href="/admin">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/insert-post">Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/insert-category">Category</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/administrator/insert-role">Roles</a>
            </li>`;
const isRoleFour = `<li class="nav-item">
              <a class="nav-link" href="/admin">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/insert-post">Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/insert-category">Category</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/administrator/insert-role">Roles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/administrator/user-management"
                >Users</a
              >
            </li>`;

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let resultSearch = JSON.parse(xhr.responseText);
    if (resultSearch == false) {
      authInfo.innerHTML = notLogin;
    } else {
      authInfo.innerHTML = isLogin(resultSearch.user.name);
      profile.src = resultSearch.user.profilePicture;
    }

    if (resultSearch.user.role == 4) {
      dashboardMenu.innerHTML = isRoleOne;
    } else if (resultSearch.user.role == 1) {
      dashboardMenu.innerHTML = isRoleTwo;
    } else if (resultSearch.user.role == 3) {
      dashboardMenu.innerHTML = isRoleThree;
    } else {
      dashboardMenu.innerHTML = isRoleFour;
    }
  }
};

xhr.open("POST", "/auth-info", true);
xhr.send();
