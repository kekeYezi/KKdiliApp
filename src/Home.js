import React ,{PureComponent} from 'react'
import {StyleSheet, View, Image , Text , TouchableOpacity, Dimensions ,ListView} from 'react-native'
import { StackNavigator } from 'react-navigation';
import HomeHead from './HomeHead'
import HomeCell from './HomeCell'

class HomeScene extends PureComponent {

    static navigationOptions = ({navigation}: any) => ({
        headerTitle: (
            <TouchableOpacity>
                <Text style={{fontSize:20 , color:'white'}}>追番</Text>
                <View style={{height:2 , backgroundColor:'white', top:3}}/>>
            </TouchableOpacity>
        ),
        headerStyle: {backgroundColor: "#EA7A98"},
    })

    // 初始化模拟数据
  constructor(props) {
    super(props);
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var ds = new ListView.DataSource({  
        /*判断这两行是否相同，就是是否发生变化，决定渲染哪些行组件，避免全部渲染，提高渲染效率*/  
        rowHasChanged: (oldRow, newRow) => oldRow !== newRow  
    });  
    this.state = {
        /*不使用原始数据，有一个拷贝的过程*/  
        /*使用复制后的数据源实例化ListView。优势：当原始数据发生变化时，那ListView组件的DataSource不会改变*/  
        /*是一个数组*/ 
        dataSource: ds.cloneWithRows([
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
        ])
        // dataSource: ds.cloneWithRows(this.dataSource1)
    };
  }

    render () {
        return (
            <View style={{flex:1}}>
                <HomeHead />
                <View style={{height:10 , backgroundColor:"#F4F4F4" , width:Dimensions.get('window').width}}>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                    <HomeCell style={{backgroundColor:"white"}} onPress={()=>{
                        alert(111)
                        // this.props.navigation.navigate('Home');
                    }}>
                    {rowData}
                    </HomeCell >}
                />
            </View>
            
        );
    }
}


export default HomeScene