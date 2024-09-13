// Components/Avatar.js

import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { connect } from 'react-redux'




class Avatar extends React.Component {

    constructor(props) {
        super(props)
        // this.setState est appelé dans un callback dans showImagePicker, pensez donc bien à binder la fonction _avatarClicked
        this._avatarClicked = this._avatarClicked.bind(this)
    }

    _avatarClicked() {

        launchImageLibrary({}, (response) => {
            console.log(response.assets[0].uri)
            if (response.didCancel) {
                console.log('L\'utilisateur a annulé')
            }
            else if (response.error) {
                console.log('Erreur : ', response.error)
            }
            else {
                console.log('Photo : ', response.assets[0].uri)
                let requireSource = { uri: response.assets[0].uri }
                // On crée une action avec l'image prise et on l'envoie au store Redux
                const action = { type: "SET_AVATAR", value: requireSource }
                this.props.dispatch(action)
            }
        })
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={this._avatarClicked}>
                <Image style={styles.avatar} source={this.props.avatar} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchableOpacity: {
        margin: 5,
        width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2
    }
})

// On mappe l'avatar aux props de notre component
const mapStateToProps = state => {
    return {
      avatar: state.setAvatar.avatar
    }
  }
  
  export default connect(mapStateToProps)(Avatar)