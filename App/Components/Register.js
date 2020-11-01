import React from 'react'
import {Text, View, Image} from 'react-native'
import {Container, Form, Button, Item, Input, Label} from 'native-base'

const Register = () => {
  return (
    <Container style={{backgroundColor: '#2E8581', padding: 20}}>
      <View style={{alignItems: 'center', margin: 20}}>
        <Image
          source={require('../../logo.png')}
          style={{width: 210, height: 100}}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 36,
            fontWeight: '700',
            lineHeight: 42,
          }}>
          Sign Up
        </Text>
      </View>
      <Form>
        <Label
          style={{
            color: '#fff',
            fontWeight: '700',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 18,
          }}>
          Email
        </Label>
        <Item regular style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          <Input />
        </Item>
        <Label
          style={{
            color: '#fff',
            fontWeight: '700',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 18,
          }}>
          Create Password
        </Label>
        <Item regular style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          <Input secureTextEntry={true} />
        </Item>
        <Label
          style={{
            color: '#fff',
            fontWeight: '700',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 18,
          }}>
          Confirm Password
        </Label>
        <Item regular style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          <Input secureTextEntry={true} />
        </Item>
        <Button block style={{backgroundColor: '#fff', marginTop: 50}}>
          <Text style={{color: '#2E8581', fontWeight: '700', fontSize: 18}}>
            Sign Up
          </Text>
        </Button>
        <Text style={{color: '#fff', fontWeight: '700', marginTop: 10}}>
          Already have an account? Log In
        </Text>
      </Form>
    </Container>
  )
}

export default Register
