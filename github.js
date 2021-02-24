class Github {

  async getProfile(user) {

    const response = await fetch(`https://api.github.com/users/${user}?client_id=d7c395380edf4d91279e&client_secret=997ee00b4fcd73d321efb845358d18ce7903a2b5`);

    const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&&client_id=d7c395380edf4d91279e&client_secret=997ee00b4fcd73d321efb845358d18ce7903a2b5`);

    const resData = await response.json();

    const repoData = await repos.json();

    return {
      resData,
      repoData
    }

  }
}