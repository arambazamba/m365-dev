const msalconfig = {
  auth: {
    clientId: "c6c3cd65-8523-46b9-ac90-4a691e2899ce",
    authority:
      "https://login.microsoftonline.com/d92b247e-90e0-4469-a129-6a32866c0d0a/",
    redirectUri: "http://localhost:8080",
  },
  endpoints: {
    graphApiUri: "https://graph.microsoft.com",
    sharePointUri: "https://integrationsonline.sharepoint.com", // Replace with your Tenant
  },
};

var gc;
window.onload = (event) => {
  // Init GraphClient
  gc = new GraphClient(msalconfig, "integrationsonline", {
    scopes: ["user.read"],
  });
};

async function doRead() {
  await gc.signIn();

  gc.query(
    "/v1.0/me/drive/recent",
    msalconfig.endpoints.graphApiUri,
    (response) => {
      var items = response.value.slice(0, 9);
      console.log("Successfully fetched Recent Top Ten Documents:", items);
      $("#OneDrive").empty();
      items.forEach((item) => {
        $("#OneDrive").append(
          `<li>${moment(item.remoteItem.lastModifiedDateTime).format(
            "MMM Do YY"
          )}, ${item.remoteItem.name}</li>`
        );
      });
    }
  );

  gc.query(
    "/v1.0/me/calendar/events",
    msalconfig.endpoints.graphApiUri,
    (response) => {
      var items = response.value;
      console.log("Successfully fetched Events:", items);
      $("#Events").empty();
      items.forEach((item) => {
        $("#Events").append(
          `<li>${moment(item.start.dateTime).format("MMM Do YY")}, ${
            item.subject
          }</li>`
        );
      });
    }
  );

  gc.query(
    "/v1.0/me/contacts",
    msalconfig.endpoints.graphApiUri,
    (response) => {
      var items = response.value;
      console.log("Successfully fetched Contacts:", items);
      $("#Contacts").empty();
      items.forEach((item) =>
        $("#Contacts").append(`<li>${item.displayName}</li>`)
      );
    }
  );
}

async function createCalEvt() {
  var evt = {
    subject: "A very special Graph Event",
    body: {
      contentType: "HTML",
      content: "Will you attend?",
    },
    start: {
      dateTime: new Date().toISOString(),
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: moment(new Date()).add(2, "days").toISOString(),
      timeZone: "Europe/Berlin",
    },
    location: {
      displayName: "Graph Draculas Castle",
    },
  };

  $("#pResult").empty();
  await gc.signIn();
  gc.create("/v1.0/me/calendar/events", evt);
}

class GraphClient {
  constructor(msalconfig, sptenant, scopes) {
    this.config = msalconfig;
    this.tenant = sptenant;
    this.client = new Msal.UserAgentApplication(msalconfig);
    this.scopes = scopes;
    this.token = "";
  }

  async signIn() {
    const loginResponse = await this.client
      .loginPopup(this.scopes)
      .then((loginResponse) => {
        console.log("id_token acquired at: " + new Date().toString());
        console.log("LoginResponse", loginResponse);

        if (this.client.getAccount()) {
          console.log("Account", this.client.getAccount());
        }
      })
      .catch((error) => {
        console.log(error);
      });

    //Get AccessToken
    this.token = await this.client.acquireTokenSilent(this.scopes);
    console.log("Token received");
  }

  signOut() {
    this.client.signOut();
    window.location.href = cfg.returnUrl;
  }

  async query(qry, endpoint, callback) {
    const uri = endpoint + qry;
    const resp = await fetch(uri, {
      headers: {
        Authorization: "Bearer " + this.token.accessToken,
      },
    });

    resp
      .json()
      .then(callback)
      .catch((err) => console.log("Error:", err));
  }

  async create(collection, event) {
    const uri = this.config.endpoints.graphApiUri + collection;

    fetch(uri, {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        Authorization: "Bearer " + this.token.accessToken,
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("event created", data);
      })
      .catch((err) => console.log("Error:", err));
  }
}
