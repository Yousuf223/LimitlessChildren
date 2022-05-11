import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    StatusBar,
    TextInput,
    ScrollView
  } from 'react-native';
  import React, { useState } from 'react';
  import { Input } from 'react-native-elements';
  import { bindActionCreators } from 'redux';
  import { connect } from 'react-redux';
  import { userLogin } from '../../redux/actions';
  import Icon from 'react-native-vector-icons/Feather';
  // import { ButtonView } from '../../components';


function SignUp({ navigation, userInfo, userLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePass1, setHidePass1] = useState(true);
    const [hidePass2, setHidePass2] = useState(true);

    return (
        <KeyboardAvoidingView style={styles.MainContainer}>
           
        <ImageBackground
          style={{ height: '100%', width: '100%' }}
          source={require('../../assets/loginbg.jpg')}>
              
          <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height:"20%",marginTop:"20%",marginBottom:"10%"}}>
              <Image style={styles.logoImage} source={require('../../assets/login-logo.png')} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#a7b0b6"
            />
                       <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#a7b0b6"
            />
            <TextInput
              style={styles.input}
              placeholder="Email Id"
              placeholderTextColor="#a7b0b6"
            />
                       <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#a7b0b6"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#a7b0b6"
            />
            <TouchableOpacity 
            activeOpacity={0.9}
             onPress={() => navigation.navigate('MainDrawer')}
            style={styles.btn}>
              <Text style={{color:"#ffffff",fontFamily:"Poppins-Bold"}}>SIGNUP</Text>
            </TouchableOpacity>
            <Text style={styles.orLoginText}>OR LOGIN WITH</Text>
            <View style={styles.logoRow}>
            <Image style={styles.logoImageFG} source={require('../../assets/loginFb.png')} />
            <Image style={styles.logoImageFG} source={require('../../assets/googleLogo.png')} />
            </View>  
            <TouchableOpacity 
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Login')}
            >
            <Text style={styles.accountText}>Don't have an account? <Text style={{color:"#699494", fontFamily:"Poppins-Bold",}}>Login</Text></Text>
            </TouchableOpacity>
            <View style={{paddingBottom:"50%"}}></View>
            </ScrollView>
          </View>
       
        </ImageBackground>
      </KeyboardAvoidingView>
    );
}


const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ userLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
const styles = StyleSheet.create({
    input: {
      height: 56,
      margin: 12,
      padding: 10,
      backgroundColor: "#ffffff",
      borderRadius: 30,
      paddingLeft:"8%",
     fontWeight:"bold"
    },
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal:20
    },
    btn:{
      backgroundColor:"#e6aea1",
      paddingVertical:20,
      alignItems:"center",
      borderRadius:30,
      marginHorizontal:14,
      marginVertical:20
    },
    forgot:{
      textAlign:"center",
      paddingVertical:10,
      color:"#699494",
      fontFamily:"Poppins-Bold",
    },
    orLoginText:{
      color:"#4d585b",
      textAlign:"center",
      paddingVertical:10,
      fontWeight:"bold"
    },
    accountText:{
      textAlign:"center",
      color:"#4d585b",
      paddingVertical:10,
      fontWeight:"bold",
      marginTop:15,
      fontFamily:"Poppins-Bold"
    },
    logoImage:{
      width:"75%",
      height:"75%",
      resizeMode:"contain",
      alignSelf:"center",
      margin:"10%"
    },
    logoImageFG:{
      resizeMode:"contain",
      width:50,
      height:50,
      marginHorizontal:10
    },
    logoRow:{
      height:"5%",
      flexDirection:"row",
      justifyContent:"center",
      marginVertical:20,
  
    }
  });