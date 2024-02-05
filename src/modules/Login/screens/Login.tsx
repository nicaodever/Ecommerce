/* eslint-disable prettier/prettier */

import Input from '../../../shared/Input';
import { Title, FullContainer, ContainerLogin } from '../styles/login.style';
import { View, StyleSheet } from 'react-native';


const Login = () => {
  return (
    <FullContainer>
      <ContainerLogin>
        <Title>
          Welcome a SocialSecret
        </Title>

        <View style={{ marginTop: '20%' }}>
          <Input />
          <Input />
        </View>
      </ContainerLogin>
      </FullContainer>


  );
};

export default Login;

