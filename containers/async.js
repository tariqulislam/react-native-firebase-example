import {createAuthorConfirm} from './actions'
export const saveAuthorInFirebase = (author) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const fireStore = getFirestore();
        fireStore.collection('authors').add({
            ...author
        }).then(() => {
            alert('author created successfully')
            dispatch(createAuthorConfirm({
                isCreated: true, 
                message: 'Author Create Successfully'
            }))
        }).catch((err) => {
            alert('Something went wrong during create the Author')
            dispatch(createAuthorConfirm({
                isCreated: false,
                message: err.message.toString()
            }))
        })
    }
}