const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  fixBabelImports,
  addLessLoader
} = require("customize-cra");

module.exports = override(
  disableEsLint(),
  addDecoratorsLegacy(),
  fixBabelImports("import-antd", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  fixBabelImports("import-ant-design-pro", {
    libraryName: "ant-design-pro",
    libraryDirectory: "lib",
    style: true,
    camel2DashComponentName: false
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#0D2438",
      "@info-color": "#31e89f",
      "@success-color": "#63A886",
      "@error-color": "#c54841",
      "@white": "#FFFFFF",
      "@dark-white": "#FBFBFB",
      "@dark-gray": "#494744",
      "@light-gray": "#E3E1E0",
      "@text-color": "#494744",
      "@text-background": "@light-gray",
      "@body-background": "@dark-white",
      "@btn-primary-color": "@light-gray",
      "@component-background": "@dark-white",
      "@link-color": "@primary-color",
      "@background-color-base": "@dark-white",
      "@shadow-color": "@light-gray",
      "@menu-item-color": "@text-color",
      "@btn-default-bg": "@light-gray",
      "@btn-default-color": "@text-color",
      "@card-background": "@dark-white",
      "@border-color-base": "@dark-gray",
      "@layout-font-size": "10px",
      "@layout-body-background": "@light-gray"
    }
  })
);
