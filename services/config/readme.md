# Config setup

Temporary solution for configuration files and setup uses a config file that is not versioned.
(File look)[https://stackoverflow.com/a/22365674/1771644]

## Sample file template

```
module.exports = {
  dev: {
    mongodb: {
      url: "space.mlab.com:11441/sample_db",
      username: "user",
      password: "pass"
    },
    server: {
      port: 8000,
      host: "localhost"
    }
  }
};
```
