import app from '../index'
import { routerRedux } from 'dva/router';

const router = {
  dispatch(...args) {
    app._store.dispatch(...args)
  },
  push() {
    routerRedux.push('/console')
  },
  go(...args) {
    router.dispatch(routerRedux.go(...args))
  },
  goBack(...args) {
    router.dispatch(routerRedux.goBack(...args))
  }
}

export default router