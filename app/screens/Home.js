import React, {Component} from 'react';
import { View, StatusBar, Text, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'AUD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '80.22';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

  handlePressBaseCurerncy = () => {
    console.log('fdsfsd');
  }

  handlePressQuoteCurerncy = () => {
    console.log('quote');
  }

  handleTextChange = (text) => {
    console.log('change text', text)
  }

  handleSwapCurrency = () => {
    console.log('press sawap currency')
  }

  handleOptionPress = () => {
    console.log('handleOptionPress')
  }

  render(){
    return(
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header
          onPress={this.handleOptionPress}
        />
        <Logo />
          <KeyboardAvoidingView behavior="padding">
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurerncy}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurerncy}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate = {TEMP_CONVERSION_RATE}
        />
        <ClearButton
          text="Reverse Currencies"
          onPress={this.handleSwapCurrency}
        />
      </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default Home
