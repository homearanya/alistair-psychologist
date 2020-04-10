const React = require("react")
const { CookiesProvider } = require("react-cookie")

const WrapRootElement = ({ element }) => {
  return <CookiesProvider>{element}</CookiesProvider>
}

exports.wrapRootElement = WrapRootElement
