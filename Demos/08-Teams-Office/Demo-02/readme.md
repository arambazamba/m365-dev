### Yeoman Generator for Teams

Installation:

```
npm install -g yo generator-teams
yo teams
```

Interpolate env to manifest & creates ./package/\*.zip:

```
gulp manifest
```

Build your application & Sideload it into Teams

```
gulp build
```

Establish an exposed, secure tunnel to your tab

```
gulp ngrok-serve
```

> Note: ngrok URL is changed every time you run ngrok-serve
