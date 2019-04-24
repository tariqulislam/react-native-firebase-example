import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Button} from 'react-native';
import {welcomeMsgReactNative} from '../containers/actions';
import {saveAuthorInFirebase} from '../containers/async'
import { connect } from 'react-redux';
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


export class Author extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            firstName: '',
            lastName: '',
            articleName: ''
        }
    }
   
    componentDidMount() {
      const {welcomeMsgReactNative} = this.props
      welcomeMsgReactNative('Connect to Redux store')
    }

    onHandleSubmit = () => {
        const {firstName, lastName, articleName} = this.state
        debugger
        if(firstName === '' || lastName === '' || articleName === '') {
            this._simpleAlert('Please fill up all the field')
        } else {
            this.props.saveAuthorInFirebase(this.state);
        }
       
       // const value = this._form.getValue();
       // console.log('value:', value)
    }

    _simpleAlert = (message) => {
        alert(message);
    }

    render() {
        return (
            <View>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                onChangeText={(text) => this.setState({firstName: text})}
                style={styles.textBox}
                value={this.state.firstName}
                />
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                onChangeText={(text) => this.setState({lastName: text})}
                style={styles.textBox}
                value={this.state.lastName}
                />
                <Text style={styles.label}>Article Name</Text>
                <TextInput
                onChangeText={(text) => this.setState({articleName: text})}
                style={styles.textBox}
                value={this.state.articleName}
                />
                <TouchableOpacity onPress={this.onHandleSubmit} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Save Author</Text>
                    </View>
                </TouchableOpacity>
             
             <Text>{this.props.welcomeMsg}</Text>
            </View>
        )
       
    }
}

const styles = StyleSheet.create({
    textBox: {
        height: 40, 
        borderWidth: 1, 
        borderColor: 'lightgray',
        borderStyle: 'solid',
        margin: 5,
        padding: 5,
    },
    label: {
        marginLeft: 5,
        marginBottom: 5,
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        alignSelf: 'center',
    },
    buttonText: {
        padding: 20,
        color: 'white',
    }
})

const mapStateToProps = state => {
    debugger
    return {
        welcomeMsg: state.firebaseExamples.welcomeMsg,
        isCreated: state.firebaseExamples.isCreated,
        message: state.firebaseExamples.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        welcomeMsgReactNative: (welcomeMsg) =>
             dispatch(welcomeMsgReactNative(welcomeMsg)),
        saveAuthorInFirebase: (author) => dispatch(saveAuthorInFirebase(author))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
    {collection: 'authors'}
])) (Author);