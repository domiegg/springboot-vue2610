import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import chuqin from '@/views/modules/chuqin/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fuli from '@/views/modules/fuli/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jiangcheng from '@/views/modules/jiangcheng/list'
    import kaohe from '@/views/modules/kaohe/list'
    import peixun from '@/views/modules/peixun/list'
    import xizi from '@/views/modules/xizi/list'
    import yuangong from '@/views/modules/yuangong/list'
    import zhaopin from '@/views/modules/zhaopin/list'
    import dictionaryBumen from '@/views/modules/dictionaryBumen/list'
    import dictionaryChuqin from '@/views/modules/dictionaryChuqin/list'
    import dictionaryFuli from '@/views/modules/dictionaryFuli/list'
    import dictionaryGangwei from '@/views/modules/dictionaryGangwei/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHetong from '@/views/modules/dictionaryHetong/list'
    import dictionaryHunyin from '@/views/modules/dictionaryHunyin/list'
    import dictionaryJiangcheng from '@/views/modules/dictionaryJiangcheng/list'
    import dictionaryJiangchengErji from '@/views/modules/dictionaryJiangchengErji/list'
        import dictionaryJiangchengErjiAddOrUpdate from '@/views/modules/dictionaryJiangchengErji/add-or-update'//二级
    import dictionaryKaohe from '@/views/modules/dictionaryKaohe/list'
    import dictionaryKaoheJieguo from '@/views/modules/dictionaryKaoheJieguo/list'
    import dictionaryPeixun from '@/views/modules/dictionaryPeixun/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXueli from '@/views/modules/dictionaryXueli/list'
    import dictionaryZhaopin from '@/views/modules/dictionaryZhaopin/list'
    import dictionaryZhengzhi from '@/views/modules/dictionaryZhengzhi/list'
    import dictionaryZhuanye from '@/views/modules/dictionaryZhuanye/list'
    import dictionaryZhuanyezhiwu from '@/views/modules/dictionaryZhuanyezhiwu/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBumen',
        name: '部门',
        component: dictionaryBumen
    }
    ,{
        path: '/dictionaryChuqin',
        name: '打卡类型',
        component: dictionaryChuqin
    }
    ,{
        path: '/dictionaryFuli',
        name: '福利类型',
        component: dictionaryFuli
    }
    ,{
        path: '/dictionaryGangwei',
        name: '岗位',
        component: dictionaryGangwei
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHetong',
        name: '合同类型',
        component: dictionaryHetong
    }
    ,{
        path: '/dictionaryHunyin',
        name: '婚姻',
        component: dictionaryHunyin
    }
    ,{
        path: '/dictionaryJiangcheng',
        name: '奖惩类型',
        component: dictionaryJiangcheng
    }
    ,{
        path: '/dictionaryJiangchengErji',
        name: '二级类型',
        component: dictionaryJiangchengErji
    }
    ,{
        path: '/dictionaryJiangchengErjiAddOrUpdate',
        name: '二级类型的新增修改页面',
        component: dictionaryJiangchengErjiAddOrUpdate
    }
    ,{
        path: '/dictionaryKaohe',
        name: '考核类型',
        component: dictionaryKaohe
    }
    ,{
        path: '/dictionaryKaoheJieguo',
        name: '考核结果',
        component: dictionaryKaoheJieguo
    }
    ,{
        path: '/dictionaryPeixun',
        name: '培训类型',
        component: dictionaryPeixun
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXueli',
        name: '学历',
        component: dictionaryXueli
    }
    ,{
        path: '/dictionaryZhaopin',
        name: '招聘类型',
        component: dictionaryZhaopin
    }
    ,{
        path: '/dictionaryZhengzhi',
        name: '政治面貌',
        component: dictionaryZhengzhi
    }
    ,{
        path: '/dictionaryZhuanye',
        name: '专业',
        component: dictionaryZhuanye
    }
    ,{
        path: '/dictionaryZhuanyezhiwu',
        name: '专业职务',
        component: dictionaryZhuanyezhiwu
    }


    ,{
        path: '/chuqin',
        name: '考勤',
        component: chuqin
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fuli',
        name: '福利信息',
        component: fuli
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/jiangcheng',
        name: '奖惩信息',
        component: jiangcheng
      }
    ,{
        path: '/kaohe',
        name: '考核信息',
        component: kaohe
      }
    ,{
        path: '/peixun',
        name: '培训信息',
        component: peixun
      }
    ,{
        path: '/xizi',
        name: '薪资信息',
        component: xizi
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }
    ,{
        path: '/zhaopin',
        name: '招聘信息',
        component: zhaopin
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
