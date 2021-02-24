class UI {

  paintProfile(userProfile) {

    document.getElementById("profile").innerHTML = `
    <div class="card card-body mb-3">
					<div class="row">
						<div class="col-md-3">
							<img class="img-fluid mb-2 " src="${userProfile.avatar_url}" alt="" />
							<div class="d-grid gap-2 col-6 mx-auto">
								<a href="${userProfile.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
							</div>
						</div>

						<div class="col-md-9 ">
							<span class="badge fs-6 bg-primary">Public Repos:${userProfile.public_repos}</span>
							<span class="badge fs-6 bg-secondary">Public Gists:${userProfile.public_gists}</span>
							<span class=" badge fs-6 bg-success">Followers:${userProfile.followers}</span>
							<span class=" badge fs-6 bg-info">Following:${userProfile.following}</span>
							<br><br>

							<ul class="list-group">
								<li class="list-group-item">Company:${userProfile.company}</li>
								<li class="list-group-item">
								Website/Blog: ${userProfile.blog}</li>
								<li class="list-group-item">Location:${userProfile.location}</li>
								<li class="list-group-item">Member Since : ${userProfile.created_at}</li>
							</ul>
						</div>
					</div>
				</div>

        <h3 class="page-heading mb-3" >Latest Repos</h3>
        <div id="repoList"></div>`
  }

  showAlert() {
    document.getElementById("alert").innerHTML = `<div class="alert alert-danger" role="alert">User Not Found !!!</div>`

    setTimeout(() => {
      document.getElementById("alert").innerHTML = "";
    }, 2000);
  }

  paintRepo(repos) {
    let output = "";

    repos.forEach(repo => {
      output += `<div class="card card-body  mb-2">
	<div class="row">
		<div class="col-md-6">
			<a href="${repo.html_url}" target="_blank">${repo.name}</a>
		</div>
		<div class="col-md-6">
			<span class="badge fs-6 bg-primary">Stars:${repo.stargazers_count}</span>
			<span class="badge fs-6 bg-secondary">Watchers:${repo.watchers_count}</span>
			<span class="badge fs-6 bg-info">Forks:${repo.forks}</span>
		</div>
	</div>
</div>`

      document.getElementById("repoList").innerHTML = output;


    });
  }


}