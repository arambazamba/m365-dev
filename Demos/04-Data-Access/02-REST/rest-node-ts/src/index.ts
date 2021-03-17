import { SPRestClient } from "./SPRestClient";

(<any>window).runSample = runSample;

export async function runSample() {
  const client = await authClient();

  const title = await client.query("/web/title");
  console.log("Title of the web", title);

  const lists = await client.query("/web/lists");
  console.log("Lists of the web", lists);
}

(<any>window).authClient = authClient;

export async function authClient() {
  const spTenant = "integrationsonline";
  const config = {
    auth: {
      clientId: "024bf89c-83e1-45b5-8797-f013cf920cc5",
      authority: "https://login.microsoftonline.com/common/",
      redirectUri: "http://localhost:8080",
    },
  };

  const client = new SPRestClient(spTenant, config);
  (<any>window).spRest = client;
  client.logInfo();
  await client.logIn();
  return client;
}
