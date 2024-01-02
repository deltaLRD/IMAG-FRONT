// Imports
import plugin0 from '__react_static_root__/node_modules/react-static-plugin-reach-router/browser.api.js'
import plugin1 from '__react_static_root__/node_modules/react-static-plugin-react-router/browser.api.js'

// Plugins
const plugins = [{
        location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
        plugins: [],
        hooks: {}
      },
{
        location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
        plugins: [],
        hooks: plugin0({})
      },
{
        location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
        plugins: [],
        hooks: {}
      },
{
        location: "__react_static_root__/node_modules/react-static-plugin-react-router",
        plugins: [],
        hooks: plugin1({})
      },
{
        location: "__react_static_root__/",
        plugins: [],
        hooks: {}
      }]

// Export em!
export default plugins