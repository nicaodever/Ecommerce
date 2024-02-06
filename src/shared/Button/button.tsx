import {Text, TouchableOpacityProps} from 'react-native';
import {ButtonContainer, ButtonTitle} from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({title, ...props}: ButtonProps) => {
  return (
    <ButtonContainer {...props}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

export default Button;
