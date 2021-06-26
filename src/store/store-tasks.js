const state = {
    tasks: {
        'ID1': {
          title:'Study General Front-End Concepts',
          done:false,
          dueTime: '10:30'
        },
        'ID2': {
          title:'Learn Vue.js',
          done:false,
          dueTime: '11:30'
        },
        'ID3': {
          title:'Study Quasar ',
          done:true
        },
        'ID4': {
          title:'Apply ',
          done:false,
          dueTime: '09:00'
        }
    }

}

const mutations = {

}

const actions = {

}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}