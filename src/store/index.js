import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import taxonomicData from './modules/taxonomic-data'
import catalogData from './modules/catalog-data'
import termData from './modules/term-data'
import standardData from './modules/standardDoc-data'
import permissionData from './modules/permission-data'
import user from './modules/user'
import getters from './getters'
import dataElementData from './modules/dataElement-data'
import dataSetData from './modules/dataSet-data'
import rangeData from './modules/range-data'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    taxonomicData,
    catalogData,
    termData,
    standardData,
    permissionData,
    user,
    dataElementData,
    dataSetData,
    rangeData
  },
  getters
})

export default store
