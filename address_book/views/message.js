/**
 * Created by vczero on 15/7/12.
 */

var React = require('react-native');
var {
  View,
  Text,
  ScrollView,
  StyleSheet,
} = React;


var Message = React.createClass({

  render: function(){
    return (
      <ScrollView style={styles.container}>
        <Text>公告</Text>
      </ScrollView>
    );
  }

});

var styles = StyleSheet.create({
  container:{
    flex:1
  }
});

module.exports = Message;