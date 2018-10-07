import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header/header'
import footer from '@/components/footer/footer'
import main from '@/components/main/main'
import festival from '@/components/festival/festival'
import newslist from '@/components/newslist/newslist'
import review from '@/components/comment/comment'
import login from '@/components/login/login'
import register from '@/components/register/register'
import forgetpwd from '@/components/forgetpwd/forgetpwd'
import videoDetails from '@/components/videoDetails/videoDetails'
import articleDetails from '@/components/articleDetails/articleDetails'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/cinext/',
  routes: [
    // 重定向
    {
      path: '/',
      redirect: '/index',
    },
    // 主页
    {
      path: '/index',
      components: {
        header: header,
        main: main,
        footer: footer
      },
    },
    // 登录
    {
      path: '/login',
      components: {
        header: header,
        main: login,
        footer: footer
      },
    },
    // 注册
    {
      path: '/register',
      components: {
        header: header,
        main: register,
        footer: footer
      },
    },
    // 忘记密码
    {
      path: '/forgetpwd',
      components: {
        header: header,
        main: forgetpwd,
        footer: footer
      },
    },
    // 视频详情页
    {
      path: '/video/:vid',
      components: {
        header: header,
        main: videoDetails,
        footer: footer
      },
    },
    // 图文详情页
    {
      path: '/article/:articleId',
      components: {
        header: header,
        main: articleDetails,
        footer: footer,
      },
      props: {
        main: true
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
    // 图文列表页
    {
      path: '/newslist',
      components: {
        header: header,
        main: newslist,
        footer: footer
      }
    },
    {
      path: '/comment',
      components: {
        header: header,
        main: review,
        footer: footer
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
