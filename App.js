import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';

// Phone call Dependency
import call from 'react-native-phone-call'

export default class App extends Component {
  iosCall = () => {
    const args = {
      number: '918424861177', // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
    };

    call(args).catch(err=>{console.log(err.message)});
  };

  //Phone Call function
  dialCall = () => {
    let phoneNumber = ''; 

    if (Platform.OS === 'android') {
      var num = '918424861177';
      phoneNumber = 'tel:${' + num + '}';
    } else {
      phoneNumber = 'telprompt:${' + num + '}'; 
    }
 
    Linking.openURL(phoneNumber);
 
  }; 
// SMS sending function
  sendSMS=(contact)=>{
    var number=contact
    var price='100'
    Linking.openURL("sms:"+number+"?body=Hi, I am interested in buying the product"+ price)
  }
//Send email function
  sendEmail=()=>{
    var emailTo='abc@gmail.com'
    var price='100'
    Linking.openURL("mailTo:"+emailTo+"?subject=Buying Product from Go Cart&body=Hi, I am interested in buying the product "+ price)
  }
//Sedn watsapp function
  sendWhatsapp =()=>{
    var number='8424861177'

     Linking.openURL(
              'http://api.whatsapp.com/send?phone=91' + number +"&text=Hello There how are you?"
            ); 
  }

  render() {
    return (
      //Creating different Buttons
      <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
        <TouchableOpacity
          onPress={this.dialCall}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}>OPEN PHONE NUMBER IN DIAL SCREEN</Text>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={this.iosCall}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}>OPEN PHONE NUMBER IN DIAL SCREEN(Method 2)</Text>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={()=>{this.sendSMS(d.contact)}}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}>Send SMS</Text>
        </TouchableOpacity>

          <TouchableOpacity
          onPress={this.sendEmail}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}>Send Email</Text>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={this.sendWhatsapp}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}>Send Whatsapp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  button: {
    width: '80%',
    padding: 6,
    backgroundColor: '#FF6F00',
    borderRadius: 7,
    marginTop:10
  },
});
