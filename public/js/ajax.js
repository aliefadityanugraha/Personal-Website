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
              <a href="/admin" class="option-text">Dashboard</a>
            </li>
            <li class="option">
              <a href="/logout" class="option-text">Logout</a>
            </li>
          </ul>`;

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var resultSearch = JSON.parse(xhr.responseText);
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

// const _0x56b03d = _0x3585;
// function _0x284a() {
//   const _0x3d49ba = [
//     "responseText",
//     "src",
//     "open",
//     "innerHTML",
//     "1095950XGSvAq",
//     "send",
//     ".profile",
//     "361597qotHMI",
//     "1580872snFPbq",
//     "user",
//     "getElementById",
//     "5DvIoDs",
//     "36fkaRYq",
//     "895286AgyUma",
//     "readyState",
//     "6176958hwUtQA",
//     "auth",
//     "role",
//     "6998341vGOBMn",
//     "status",
//     "807336ZNRbsl",
//     "onreadystatechange",
//     "<ul\x20class=\x22options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/account\x22\x20class=\x22option-text\x22>Account</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/admin\x22\x20class=\x22option-text\x22>Admin\x20Panel</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/logout\x22\x20class=\x22option-text\x22>Logout</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
//     "profilePicture",
//     "/auth-info",
//     "3EDQTss",
//     "POST",
//   ];
//   _0x284a = function () {
//     return _0x3d49ba;
//   };
//   return _0x284a();
// }
// function _0x3585(_0x27c3a7, _0x5c7de2) {
//   const _0x284a4d = _0x284a();
//   return (
//     (_0x3585 = function (_0x35853a, _0x1113cf) {
//       _0x35853a = _0x35853a - 0x108;
//       let _0x434d1a = _0x284a4d[_0x35853a];
//       return _0x434d1a;
//     }),
//     _0x3585(_0x27c3a7, _0x5c7de2)
//   );
// }
// (function (_0x1f008d, _0x3c5957) {
//   const _0x24f5ad = _0x3585,
//     _0x2d49c4 = _0x1f008d();
//   while (!![]) {
//     try {
//       const _0x1e38ec =
//         -parseInt(_0x24f5ad(0x108)) / 0x1 +
//         (-parseInt(_0x24f5ad(0x10e)) / 0x2) *
//           (-parseInt(_0x24f5ad(0x11a)) / 0x3) +
//         -parseInt(_0x24f5ad(0x115)) / 0x4 +
//         (parseInt(_0x24f5ad(0x10c)) / 0x5) *
//           (parseInt(_0x24f5ad(0x110)) / 0x6) +
//         -parseInt(_0x24f5ad(0x113)) / 0x7 +
//         parseInt(_0x24f5ad(0x109)) / 0x8 +
//         (parseInt(_0x24f5ad(0x10d)) / 0x9) * (parseInt(_0x24f5ad(0x120)) / 0xa);
//       if (_0x1e38ec === _0x3c5957) break;
//       else _0x2d49c4["push"](_0x2d49c4["shift"]());
//     } catch (_0xc2c727) {
//       _0x2d49c4["push"](_0x2d49c4["shift"]());
//     }
//   }
// })(_0x284a, 0x8642b);
// var xhr = new XMLHttpRequest();
// const authInfo = document[_0x56b03d(0x10b)](_0x56b03d(0x111)),
//   profile = document["querySelector"](_0x56b03d(0x122)),
//   notLogin =
//     "<ul\x20class=\x22options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/signup\x22\x20class=\x22option-text\x22>Signup</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/login\x22\x20class=\x22option-text\x22>Login</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
//   isLogin =
//     "<ul\x20class=\x22options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/account\x22\x20class=\x22option-text\x22>Account</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/login\x22\x20class=\x22option-text\x22>Linkedin</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/logout\x22\x20class=\x22option-text\x22>Logout</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
//   isLoginAdmin = _0x56b03d(0x117);
// (xhr[_0x56b03d(0x116)] = function () {
//   const _0x5c3ee4 = _0x56b03d;
//   if (xhr[_0x5c3ee4(0x10f)] == 0x4 && xhr[_0x5c3ee4(0x114)] == 0xc8) {
//     var _0x54e0ca = JSON["parse"](xhr[_0x5c3ee4(0x11c)]);
//     if (_0x54e0ca == ![]) authInfo[_0x5c3ee4(0x11f)] = notLogin;
//     else
//       _0x54e0ca[_0x5c3ee4(0x10a)][_0x5c3ee4(0x112)] == 0x2
//         ? ((authInfo[_0x5c3ee4(0x11f)] = isLoginAdmin),
//           (profile[_0x5c3ee4(0x11d)] =
//             _0x54e0ca[_0x5c3ee4(0x10a)][_0x5c3ee4(0x118)]))
//         : ((authInfo[_0x5c3ee4(0x11f)] = isLogin),
//           (profile[_0x5c3ee4(0x11d)] = _0x54e0ca["user"][_0x5c3ee4(0x118)]));
//   }
// }),
//   xhr[_0x56b03d(0x11e)](_0x56b03d(0x11b), _0x56b03d(0x119), !![]),
//   xhr[_0x56b03d(0x121)]();
