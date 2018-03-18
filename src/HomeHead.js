import React ,{PureComponent} from 'react'
import {StyleSheet, View, Image , Text , Dimensions} from 'react-native'


class HomeHead extends PureComponent {
    render () {
        return (
            <View style={{backgroundColor:'white', height:175}}> 
                <View style={{height:20}}/>
                <View style={{flexDirection: 'row',}}>
                    <Image style={styles.image} source={require('../img/head_left.png')}/> 
                    <Image style={styles.image2} source={require('../img/head_right.png')}/> 
                </View>
                <View style={{top:10, height:1 ,backgroundColor:"#F2F2F2"}}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width:Dimensions.get('window').width / 2 , flexDirection: 'row' ,top:20 ,left:50}}>
                        <Image style={{width:33 ,height:33}} source={require('../img/calendar.png')}/>
                        <Text style={{fontSize:17 , left:15 , top:7}}>时间表 </Text>
                    </View>
                    <View style={{height:30 , width:1, top:25 , backgroundColor:"#E6E6E6"}}/>
                    <View style={{width:Dimensions.get('window').width / 2 , flexDirection: 'row'   ,top:20 ,left:50}}>
                        <Image style={{width:33 ,height:33}} source={require('../img/index.png')}/>
                        <Text style={{fontSize:17 , left:15 , top:7}}>索引</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width:Dimensions.get('window').width / 2,
        height:90,
    },
    image2: {
        width:Dimensions.get('window').width / 2,
        height:85,
    },
    icon: {
        width: 27,
        height: 27,
    }
})

export default HomeHead