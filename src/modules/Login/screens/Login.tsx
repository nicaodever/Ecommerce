/* eslint-disable prettier/prettier */

import Button from '../../../shared/Button/button';
import Input from '../../../shared/Input';
import { Title, FullContainer, ContainerLogin } from '../styles/login.style';
import { View} from 'react-native';


const Login = () => {
  const HandleOnPress = () =>{
    console.log('login efetuado');
  };

  return (
    <FullContainer>
      <ContainerLogin>
        <Title>
         Shop BBB
        </Title>
        <View style={{ marginTop: '20%' }}>
          <Input />
        <Button title="ENTRAR" onPress={HandleOnPress}/>
        </View>
      </ContainerLogin>
      </FullContainer>


  );
};

export default Login;

