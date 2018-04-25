import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header/header'
import footer from '@/components/footer/footer'
import main from '@/components/main/main'
import festival from '@/components/festival/festival'
import newslist from '@/components/newslist/newslist'
import review from '@/components/review/review'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/cinext/',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      components: {
        header: header,
        main: main,
        footer: footer
      }
    },
    {
      path: '/festival',
      components: {
        header: header,
        main: festival,
        footer: footer
      }
    },
    {
      path: '/newslist',
      components: {
        header: header,
        main: newslist,
        footer: footer
      }
    },
    {
      path: '/review',
      components: {
        header: header,
        main: review,
        footer: footer
      }
    }
  ],
})

export default router
