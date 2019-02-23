# 🔥 Electron + Element UI + Nuxt architecture like 🔥

- ⚠️ Only the folder architecture, routing automatisation and layout automatisation is like nuxt. (But it's not nuxt)
- [Element UI](https://element.eleme.io/#/en-US/component/installation) just cause we just ❤️ it!
- Electron to make a desktop your app. ⚡️

## Build Setup 🐣

``` bash
git clone https://github.com/t1gu1/electron-nuxt-style.git

# Go in the project repository
npm install

# Developement
npm run dev
```

## Good to know ✨

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

## Most used commands 🐱

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

- Change the import of Element UI with SCSS to change default variables and customise it!
- Upgrade some packages (I upgrade some already!)
- Make a nice demo & take screenshoot for the git depo 💩
- Add i18n

If you have questions of suggestion I invite you to create an issue on Github! ✌️