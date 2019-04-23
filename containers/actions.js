export const WELCOME_MSG_REACT_NATIVE = 'WELCOME_MSG_REACT_NATIVE'

export const welcomeMsgReactNative = (welcomeMsg) => {
    return {
        type: WELCOME_MSG_REACT_NATIVE,
        payload: welcomeMsg
    }
}

export const CREATE_AUTHOR_CONFIRM = 'CREATE_AUTHOR_CONFIRM'

export const createAuthorConfirm = ({isCreated, message}) => {
   return {
      type: CREATE_AUTHOR_CONFIRM,
      payload: {isCreated, message}
   }
}