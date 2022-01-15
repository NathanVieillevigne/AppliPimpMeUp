import React, { Component, ImageBackground } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class ScrollHori extends Component {
    render() {
        return (
           <View style={styles.container}>
            <View style={{ height: 130, width: 130, marginLeft: 0, borderColor: 'black' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'center' }}
                    />
                </View>
            </View>
      </View>
        );
    }
}
export default ScrollHori;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});