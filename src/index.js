import React from 'react';
import ReactDOM from 'react-dom';
import { 
  View,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Root,
  Div,
  Group,
  Button
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';
import logo from "./images/logoFull.png";
import OrderForm from "./components/Form/Form";
import Courier from "./components/courier/Courier";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: "main"
    }
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View activePanel="mainPanel" id="main">
          <Panel id="mainPanel">
            <Group style={{textAlign: "center"}}>
              <img width="305" src={logo} alt="logo"></img>
            </Group>
            <Group>
              <Div>
                <Button size="xl" style={{
                  backgroundColor: "#ff5c00"
                }} onClick={() => this.setState({activeView: "customer"})}>
                  Оформить заказ
                </Button>
              </Div>
              <Div>
                <Button size="xl" style={{
                  backgroundColor: "#ff5c00"
                }} onClick={() => this.setState({activeView: "courier"})}>
                  Курьер
                </Button>
              </Div>
            </Group>
          </Panel>
        </View>
        < View activePanel="mainCustomer" id="customer" >
          <Panel id="mainCustomer">
            <PanelHeader 
            left={<PanelHeaderBack onClick={() => this.setState({ activeView: "main" })} />}>
              Оформление заказа
            </PanelHeader>
            <OrderForm />
          </Panel>
        </View>
        <View activePanel="mainCourier" id="courier">
          <Panel id="mainCourier">
              <PanelHeader
              left={<PanelHeaderBack onClick={()=>this.setState({activeView: "main"})} />}
              >Курьер</PanelHeader>
              <Courier />
          </Panel>
        </View>
      </Root>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

bridge
  .send('VKWebAppGetEmail')
  .then(data => {
    // Обработка события в случае успеха
    console.log(data.email);
  })
  .catch(error => {
    // Обработка события в случае ошибки
  });
bridge.subscribe((e) => console.log("vkBridge event", e));