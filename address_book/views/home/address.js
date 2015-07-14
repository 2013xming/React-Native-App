/**
 * Created by lihua on 15/7/12.
 */

var React = require('react-native');
var Util = require('../util');
var ActionSheetIOS = require('ActionSheetIOS');
var Service = require('./../service');


var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  LinkingIOS,
  AlertIOS,
} = React;


var Address = React.createClass({
  componentDidMount: function(){
    var key = Util.key;
    var tag = this.props.type;
    var path = Service.host + Service.getUser;
    Util.post(path, {
      key: key,
      tag: '前端框架组'
    }, function(data){
      console.log(data);
    });
  },
  render: function(){
    var items = [];
    for(var i = 0; i < 15; i++){
      var uri = 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=50';
      if(i % 4 === 0){
        uri = 'http://img1.gtimg.com/13/1309/130992/13099292_200x200_0.jpg';
      }
      if(i % 4 === 1){
        uri = 'http://tp1.sinaimg.cn/5396425536/180/5718431393/0';
      }
      if(i % 4 === 2){
        uri = 'http://tp2.sinaimg.cn/1904769205/180/5728293682/1';
      }

      items.push(
        <View style={styles.row}>
          <View>
            <Image style={styles.avatar} source={{uri:uri}}/>
          </View>
          <View style={styles.part}>
            <Text>
              王利华
            </Text>
            <Text style={styles.unColor}>
              框架研发部前端框架
            </Text>
          </View>
          <View style={{flex:1}}>
            <TouchableHighlight underlayColor="#fff" onPress={this.showActionSheet}>
              <Text style={styles.link}>
                131-2764-4932
              </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff" onPress={this.showActionSheet}>
              <Text style={styles.link}>
                wlhmyit@126.com
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
    return (
      <ScrollView>
        {items}
      </ScrollView>
    );
  },

  _renderRow: function(type){

  },

  _openUrl: function(url, tips){
    LinkingIOS.canOpenURL('tel://13127644932', (supported) => {
      if (!supported) {
        AlertIOS.alert('不能打开未安装的应用程序');
      } else {
        LinkingIOS.openURL(url);
      }
    });
  },

  showActionSheet() {
    var options = [];
    options.push('拨打电话');
    options.push('发送短信');
    options.push('发送邮件');
    options.push('取消');

    var events = [];
    events.push(function(){
      LinkingIOS.openURL('tel://');
    });
    events.push(function(){
      LinkingIOS.openURL('sms://');
    });
    events.push(function(){
      LinkingIOS.openURL('mailto://');
    });


    ActionSheetIOS.showActionSheetWithOptions({
        options: options,
        cancelButtonIndex: options.length - 1 ,
      },
      function(index){
      events[index] && events[index]();
    }
    );
  }
});

var styles = StyleSheet.create({
  row:{
    height:80,
    borderBottomWidth: Util.pixel,
    borderBottomColor:'#ccc',
    flexDirection:'row',
    alignItems:'center'
  },
  avatar:{
    width:50,
    height:50,
    borderRadius:4,
    marginLeft:10,
  },
  part:{
    marginLeft:5,
    flex:1,
  },
  link:{
    color:'#1BB7FF',
    marginTop:2,
  },
  unColor:{
    color: '#575656',
    marginTop:8,
    fontSize:12,
  }
});


module.exports = Address;