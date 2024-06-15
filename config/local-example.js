module.exports = {
    production: false,
    server: {
      port: "4000",
      adminPort: "4001",
    },
    jwt: {
      tokenSecret: "",
      tokenExpireTime: "",
      refreshTokenSecret: "",
      refreshTokenExpireTime: "",
      refreshTokenHashSecret: "",
      saltRounds: "2",
    },
    s3: {
      userImages: "",
    },
    aws: {
      accessKeyId: "",
      secretAccessKey: "",
      region: "",
    },
    appVersion: "0.0.1",
  };
  