import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export default () => {
  const middleware = []
  middleware.push(sagaMiddleware)

  return applyMiddleware(...middleware)
}
