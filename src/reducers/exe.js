import { config } from "./config";

var auth = JSON.parse(localStorage.getItem("bearer"));

if (auth !== null) {
  auth = auth.bearer;
}

export const get = (url, bearer = null) => {
  url = config.baseUrl + "api/" + url;

  if (bearer !== null) {
    auth = bearer;
  }
  return fetch(url, {
    method: "GET",
    // mode : 'no-cors',
    // credentials:'include',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth
    }
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get("Content-Type") || "";

        if (contentType.includes("application/json")) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }

        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

export const get2 = (url, authc) => {
  url = config.baseUrl + "api/" + url;

  console.log(authc);

  return fetch(url, {
    method: "GET",
    // mode : 'no-cors',
    // credentials:'include',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: authc
    }
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get("Content-Type") || "";

        if (contentType.includes("application/json")) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }

        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

// post
export const post = (url, post, metode = "POST") => {
  url = config.baseUrl + "api/" + url;

  return fetch(url, {
    method: metode,
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth
    },
    body: JSON.stringify(post)
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get("Content-Type") || "";

        if (contentType.includes("application/json")) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }
        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

export const postNoAuth = (url, post, metode = "POST") => {
  url = config.baseUrl + "api/" + url;

  return fetch(url, {
    method: metode,
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get("Content-Type") || "";

        if (contentType.includes("application/json")) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }
        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

export const login = param => {
  var form = new FormData();
  form.append("client_id", config.client_id);
  form.append("client_secret", config.client_secret);
  form.append("grant_type", "password");
  form.append("username", param.username);
  form.append("password", param.password);

  let url = config.baseUrl + "oauth/token";

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, application/xml, text/plain, text/html, *.*"
    },
    body: form
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get("Content-Type") || "";

        if (contentType.includes("application/json")) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }
        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

export const loginJWT = param => {
  var form = new FormData();
  form.append("email", param.email);
  form.append("password", param.password);

  let url = config.baseUrl + "api/jwt/login";

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, application/xml, text/plain, text/html, *.*"
    },
    body: form
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get("Content-Type") || "";

        if (contentType.includes("application/json")) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }
        return Promise.resolve([]);
      }

      if (response.status > 200) {
        sessionStorage.setItem("error", response.statusText);
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};

export const printLayout = () => {
  const fs = window.require("fs");
  const remote = window.require("electron").remote;
  let printlay = remote.getCurrentWindow().webContents;
  printlay.print({ silent: true });
};

export const postForm = (param, url) => {
  var form = new FormData();

  Object.keys(param).map(function(value) {
    form.append(value, param[value]);
  });

  url = config.baseUrl + "api/" + url;

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, application/xml, text/plain, text/html, *.*"
    },
    body: form
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get("Content-Type") || "";

        if (contentType.includes("application/json")) {
          return response.json().catch(error => {
            return Promise.resolve([]);
          });
        }
        return Promise.resolve([]);
      }

      if (response.status > 200) {
        return Promise.resolve([]);
      }

      return Promise.resolve([]);
    })
    .catch(error => {
      return Promise.resolve([]);
    });
};
