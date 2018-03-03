# Oxygen Game Engine Deferred Default Shader Assets

## Install
```bash
npm install --save oxygen-deferred-default-shader-assets
```

## Usage
**webpack.config.js** - *config.plugins* section:
```javascript
new PackWebpackPlugin([
  { input: [
    'static/assets',
    // include assets into generated assets.pack
    '<oxygen-deferred-default-shader-assets>/assets'
  ] }
])
```
