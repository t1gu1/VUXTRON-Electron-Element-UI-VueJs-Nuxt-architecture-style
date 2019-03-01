# 🔥 Vuxtron 🔥

## 🔥 Electron + Element UI + VueJS + Nuxt architecture like 🔥

- ⚠️ Only the folder architecture, routing automatisation and layout automatisation is like nuxt. (But it's not nuxt)
- [Element UI](https://element.eleme.io/#/en-US/component/installation) just cause we just ❤️ it!
- Electron to make a desktop your app. ⚡️
- You can use this link to know more about electron-vue: <https://simulatedgreg.gitbooks.io/electron-vue/content/en/>

------------------------------

## Demo of an Electron app

<p align="center"><img src="https://github.com/t1gu1/Electron-Element-UI-VueJs-Nuxt-architecture-style/raw/master/src/renderer/assets/images/electron-element-ui-vue-demo.gif"></p>

------------------------------

## Build Setup 🐣

``` bash
git clone https://github.com/t1gu1/electron-nuxt-style.git

# Go in the project repository
npm install

# Developement
npm run dev
```

## Good to know ✨

### Absolute path

The caracter `@` in an import will be equal to `renderer` folder.

Example: `@/components/test.vue`

And you should always try to do this. (This is like nuxt too)

### Routing ⭐️

I use [vue-auto-routing](https://github.com/ktsn/vue-auto-routing) to make the autorouting like nuxt

### Layout ⭐️

I use [vue-extend-layout](https://github.com/ktquez/vue-extend-layout#readme) to make it a bit like nuxt.

The difference is that you have to use tag `<route-meta>` in the top of your page components to define the layout.

BUT it will use the `layout/default.vue` by default if you add nothing! 😃

```html
<route-meta>
  {
    "layout": "test"  
  }
</route-meta>

<template>
  <div>
    ...
```

### Element UI ❤️

You really should go check [Element UI](https://element.eleme.io/#/en-US/component/installation) components.
A really nice documentation is present with a ton of examples!

- You can edit all element variables here: `@/assets/scss/element-ui.scss`. An external link to these variables is present.

### Working directory

- You should only need to work in `src/renderer/`.
- The electron build on `npm run build` will output in the folder `/build`.

## Most used commands 🐱

⚠️ If you are on windows and you use WSL, you have to `npm install electron` with windows CMD to be able to build the app.

- `npm run dev`
- `npm run build`
- `npm run build:web`

For other commands check the package.json file under the script key.

It should look like that :

```json
{
  "scripts": {
    "build": "node .electron-vue/build.js && electron-builder",
    "build:dir": "node .electron-vue/build.js && electron-builder --dir",
    "build:clean": "cross-env BUILD_TARGET=clean node .electron-vue/build.js",
    "build:web": "cross-env BUILD_TARGET=web node .electron-vue/build.js",
    "dev": "node .electron-vue/dev-runner.js",
    "pack": "npm run pack:main && npm run pack:renderer",
    "pack:main": "cross-env NODE_ENV=production webpack --progress --colors --config .electron-vue/webpack.main.config.js",
    "pack:renderer": "cross-env NODE_ENV=production webpack --progress --colors --config .electron-vue/webpack.renderer.config.js",
    "postinstall": ""
  },
}
```

## Build Configuration 🐣

Edit package.json#build properties for custom build configuration.

```json
{
  "build": {
    "productName": "YourAppName",
    "appId": "com.example.yourapp",
    "directories": {
      "output": "build"
    },
    "files": [
      "dist/electron/**/*"
    ],
    "dmg": {
      "contents": [
        {
          "x": 410,
          "y": 150,
          "type": "link",
          "path": "/Applications"
        },
        {
          "x": 130,
          "y": 150,
          "type": "file"
        }
      ]
    },
    "mac": {
      "icon": "build/icons/icon.icns"
    },
    "win": {
      "icon": "build/icons/icon.ico"
    },
    "linux": {
      "icon": "build/icons"
    }
  },
}
```

## TODO 👷

- Add Cordova to build mobile app
- ⭐️ Try to make a npm package of this repo to let user only have the `renderer` folder and make the project maintenable/updatable ⭐️ (A lot of work to achieve that, but it's the nicest feature to do for the one who use this)

## Know issues 💩

- build:web doesn't seems working

If you have questions of suggestion I invite you to create an issue on Github! ✌️

<br/><br/>
<div align="center">

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

</div>