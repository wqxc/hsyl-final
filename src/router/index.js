import Vue from 'vue'
import Router from 'vue-router'
import CompanyBusiness from '@/components/companyBusiness'
import Case from '@/components/case'
import myFirst from '@/components/FirstPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: myFirst
    },
    {
      path: '/companyBusiness',
      name: 'CompanyBusiness',
      component: CompanyBusiness
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    }
  ]
})
