import path from 'path'
import axios from 'axios'
export default {
  basePath:'',
  getRoutes: async () => {
    const backend_url = process.env.BACKEND_URL || "localhost";
    const backend_port = process.env.BACKEND_PORT || "5000";
    const url = "http://"+backend_url+":"+backend_port;
    console.log(url)
    //新闻页面信息
    const { data: detail_news } = await axios.get(
      url+'/home/detail_news'
    )
    //people页面信息
    const { data: people } = await axios.get(
      url+'/home/people'
    )
    // //publication页面信息
    const { data: publication } = await axios.get(
      url+'/home/publication'
    )
    //competition页面信息
    const { data: competition } = await axios.get(
      url+'/home/competition'
    )
    //grants页面信息
    const { data: grants } = await axios.post(
      url+'/home/project', 
    )
    // console.log(publication)
    const { data: patent } = await axios.get(
      url+'/home/patent',
    )

    // const { data: monograph } = await axios.get(
    //   url+'/home/monograph'
    // )

   
    const { data: softwareCopyright } = await axios.get(
      url+'/home/softwareCopyright'
    )

    const {data: honor} = await axios.get(
      url+"/home/honor"
    )


    //Faculty and Associated_Faculty的个人主页信息，例如发表的论文等
    const userPage = [];
    for(let i = 0; i < people['Faculty'].length; ++ i){
      // console.log(people['Faculty'][i]['account']);
      const { data: resp } = await axios.post(
        url+'/home/user_page/' + encodeURI(people['Faculty'][i]['account']), 
      )
      // console.log(people['Faculty'][i]['account'])
      // console.log(resp)
      userPage.push({'id': people['Faculty'][i]['account'], 'info': resp});
    }
    for(let i = 0; i < people['Associated_Faculty'].length; ++ i){
      const { data: resp } = await axios.post(
        url+'/home/user_page/' + encodeURI(people['Associated_Faculty'][i]['account']), 
      )
      // console.log(people['Faculty'][i]['account'])
      // console.log(resp)
      userPage.push({'id': people['Associated_Faculty'][i]['account'], 'info': resp});
    }
    console.log(userPage)
    const resources=[{'name':'NUS-wide'}]
    
    const news_items=detail_news.news
    return [
      {
        path: '/',
        getData: () => ({
          detail_news,
        }),
      },
      {
        path: '/people',
        template:'src/pages/people',
        getData: () => ({
          people,
        }),
        children: userPage.map(userInfo => ({
          path: `/user/${userInfo.id}`,
          template: 'src/containers/User',
          getData: () => ({
            userInfo,
          })
        }))
      },
      {
        path: '/news',
        getData: () => ({
          detail_news
        }),
        children:news_items.map(newItem=>({
          path:`/info/${newItem.id}`,
          template:'src/containers/newsPage',
          getData:()=>({
            newItem
          })
        }))
      },
      {
        path: '/publication',
        getData: () => ({
          publication
        }),
      },
      {
        path: '/competition',
        getData: () => ({
          competition,
          
        }),
      },
      {
        path: '/grants',
        getData: () => ({
          grants,
        }),
      },
      {
        path: '/resource',
        getData: () => ({
        }),
        children:resources.map(newItem=>({
          path:`/${newItem.name}`,
          template:`src/containers/NUS-wide`,
          getData:()=>({
          })
        }))
      },
      {
        path: '/patent',
        getData: () => ({
          patent,
          softwareCopyright,
        }),
      },
      {
        path: "/honor",
        getData: () => ({
          honor
        })
      }
      // {
      //   path: '/journal',
      //   getData: () => ({
      //     journal,
      //   }),
      // },
      // {
      //   path: '/monograph',
      //   getData: () => ({
      //     monograph,
      //   }),
      // },
      
      
      // {
      //   path: '/software',
      //   getData: () => ({
      //     softwareCopyright,
      //   }),
      // },
    ]
  },
  assetsPath: "",
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-react-router'),
  
  ],
}
