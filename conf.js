const env = {
  prod: {
    spotifyAuthUrl: "https://accounts.spotify.com/authorize",
    scheme: "https",
    base_path: "/v1",
    spotifyHost: "api.spotify.com",
    spotifyClientId: "d5290d3786db4f419832c14038d7a3ef",
    spotifyRedirectUrl: "http://localhost/",
    spotifyClientSecret: "4de3253164a848f0ad996d1d21e8ed26",
    spotifyScopes: "user-read-private user-read-email",
    redirectUrl: "http://localhost:3000/callback"
  }
}

function getConf() {
  const environment = "prod";
  return env[environment];
}

module.exports = {
  getConf
}