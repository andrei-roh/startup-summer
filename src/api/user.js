const URL = "https://api.github.com/users";

const getUserInfo = (userName) => {
  fetch(`${URL}/${userName}`)
  .then(
  	function(response) {
  		return response.json();
  	}
  )
  .then(
  	function(respData) {
  		console.log(respData);
  	}
  )
}

const getUserRepositoryInfo = (userName) => {
  fetch(`${URL}/${userName}/repos`)
  .then(
  	function(response) {
  		return response.json();
  	}
  )
  .then(
  	function(respData) {
  		console.log(respData);
  	}
  )
}

export { getUserInfo, getUserRepositoryInfo };
