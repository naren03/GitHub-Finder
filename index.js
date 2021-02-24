const github = new Github();
const ui = new UI();

document.getElementById("usernameInput").addEventListener("keyup", getProfile);


function getProfile(e) {
  github.getProfile(e.target.value)
    .then(data => {
      if (data.resData.message === "Not Found") {
        ui.showAlert();
      } else {
        ui.paintProfile(data.resData);
        ui.paintRepo(data.repoData)
      }


    }).catch(err => console.log(err));

}