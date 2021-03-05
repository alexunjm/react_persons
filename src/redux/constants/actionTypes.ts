export default {
  global: {
    loading: {
      SHOW: 'global/LOADER_SHOW',
      HIDE: 'global/LOADER_HIDE',
    },
    router: {
      REDIRECT: 'global/ROUTER_REDIRECT',
    },
  },
  person: {
    request: {
      save: {
        START: 'person/REQUEST_SAVE_START',
        SUCCESS: 'person/REQUEST_SAVE_SUCCESS',
        FAILURE: 'person/REQUEST_SAVE_FAILURE',
      },
      update: {
        START: 'person/REQUEST_UPDATE_START',
        SUCCESS: 'person/REQUEST_UPDATE_SUCCESS',
        FAILURE: 'person/REQUEST_UPDATE_FAILURE',
      },
      delete: {
        START: 'person/REQUEST_DELETE_START',
        SUCCESS: 'person/REQUEST_DELETE_SUCCESS',
        FAILURE: 'person/REQUEST_DELETE_FAILURE',
      },
      get: {
        by: {
          id: {
            START: 'person/REQUEST_GET_BY_ID_START',
            SUCCESS: 'person/REQUEST_GET_BY_ID_SUCCESS',
            FAILURE: 'person/REQUEST_GET_BY_ID_FAILURE',
          },
        },
        all: {
          START: 'person/REQUEST_GET_ALL_START',
          SUCCESS: 'person/REQUEST_GET_ALL_SUCCESS',
          FAILURE: 'person/REQUEST_GET_ALL_FAILURE',
        },
      },
    },
    form: {
      FILL: 'person/FORM_FILL',
      PRINT_ERROR: 'person/FORM_PRINT_ERROR',
      CLEAN_ERROR: 'person/FORM_CLEAN_ERROR',
    },
    ADD: 'person/ADD',
    UPDATE: 'person/UPDATE',
  },
}
