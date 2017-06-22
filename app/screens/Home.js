import React, {Component} from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'AUD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '80.22';

class Home extends Component {

  handlePressBaseCurerncy = () => {
    console.log('fdsfsd');
  }

  handlePressQuoteCurerncy = () => {
    console.log('quote');
  }

  render(){
    return(
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurerncy}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurerncy}
          editable={false}
        />
      </Container>
    )
  }
}

export default Home
