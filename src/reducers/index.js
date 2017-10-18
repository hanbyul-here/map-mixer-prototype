const defaultState = {
  baseMap: 'bubble-wrap',
  labelDetail: 0
}

const details = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_BASE_MAP': {
      return {
          baseMap: action.val,
          labelDetail: state.labelDetail
        }
    }
    case 'CHANGE_LABEL_DETAIL':
      return {
          baseMap: state.baseMap,
          labelDetail: action.val,
        }

    default:
      return state
  }
}

export default details;