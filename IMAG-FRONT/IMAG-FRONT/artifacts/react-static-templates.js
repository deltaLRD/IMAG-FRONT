

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.js'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.js'
      
const t_1 = universal(import('__react_static_root__/src/pages/competition.js'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/competition.js'
      
const t_2 = universal(import('__react_static_root__/src/pages/contact.js'), universalOptions)
      t_2.template = '__react_static_root__/src/pages/contact.js'
      
const t_3 = universal(import('__react_static_root__/src/pages/grants.js'), universalOptions)
      t_3.template = '__react_static_root__/src/pages/grants.js'
      
const t_4 = universal(import('__react_static_root__/src/pages/honor.js'), universalOptions)
      t_4.template = '__react_static_root__/src/pages/honor.js'
      
const t_5 = universal(import('__react_static_root__/src/pages/index.js'), universalOptions)
      t_5.template = '__react_static_root__/src/pages/index.js'
      
const t_6 = universal(import('__react_static_root__/src/pages/news.js'), universalOptions)
      t_6.template = '__react_static_root__/src/pages/news.js'
      
const t_7 = universal(import('__react_static_root__/src/pages/patent.js'), universalOptions)
      t_7.template = '__react_static_root__/src/pages/patent.js'
      
const t_8 = universal(import('__react_static_root__/src/pages/people'), universalOptions)
      t_8.template = '__react_static_root__/src/pages/people'
      
const t_9 = universal(import('__react_static_root__/src/pages/publication.js'), universalOptions)
      t_9.template = '__react_static_root__/src/pages/publication.js'
      
const t_10 = universal(import('__react_static_root__/src/pages/resource.js'), universalOptions)
      t_10.template = '__react_static_root__/src/pages/resource.js'
      
const t_11 = universal(import('__react_static_root__/src/containers/User'), universalOptions)
      t_11.template = '__react_static_root__/src/containers/User'
      
const t_12 = universal(import('__react_static_root__/src/containers/newsPage'), universalOptions)
      t_12.template = '__react_static_root__/src/containers/newsPage'
      
const t_13 = universal(import('__react_static_root__/src/containers/NUS-wide'), universalOptions)
      t_13.template = '__react_static_root__/src/containers/NUS-wide'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.js': t_0,
'__react_static_root__/src/pages/competition.js': t_1,
'__react_static_root__/src/pages/contact.js': t_2,
'__react_static_root__/src/pages/grants.js': t_3,
'__react_static_root__/src/pages/honor.js': t_4,
'__react_static_root__/src/pages/index.js': t_5,
'__react_static_root__/src/pages/news.js': t_6,
'__react_static_root__/src/pages/patent.js': t_7,
'__react_static_root__/src/pages/people': t_8,
'__react_static_root__/src/pages/publication.js': t_9,
'__react_static_root__/src/pages/resource.js': t_10,
'__react_static_root__/src/containers/User': t_11,
'__react_static_root__/src/containers/newsPage': t_12,
'__react_static_root__/src/containers/NUS-wide': t_13
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.js"

