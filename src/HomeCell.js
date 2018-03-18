import React ,{PureComponent} from 'react'
import {StyleSheet, View, Image , Text , Dimensions, TouchableWithoutFeedback} from 'react-native'

type Props = {
    onPress: any,
}

class HomeCell extends PureComponent {
    render () {
        return (
            <TouchableWithoutFeedback onPress={this.onPressKv.bind(this)}>
                <View>
                    <View style={{top:10 ,left:10 ,width:Dimensions.get('window').width - 20 , height :160 ,flex: 1 ,borderRadius:10, borderWidth:1, borderColor:'white', backgroundColor:"white"}}> 
                        <Image style={{width:Dimensions.get('window').width - 20 ,height:125}} source={require('../img/cell1.png')}/>
                        <Text style={{top:10}}>春节档新番介绍 </Text>
                    </View>
                    <View style={{height:10}} />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    onPressKv () {
        this.props.onPress()
    }
}



const styles = StyleSheet.create({
    
})

export default HomeCell