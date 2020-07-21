import React from 'react';
import ReactDOM from 'react-dom';
import { 
  View,
  Panel,
  PanelHeader,
  Avatar,
  Group,
  CellButton,
  Root,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class MainView extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        mainPanel: 'panel1',
        modalPanel: 'modal-panel1',
        activeView: 'main'
      }
    }
  
    render() {
      return (
        <Root activeView={this.state.activeView}>
          <View id="main" activePanel={this.state.mainPanel}>
            <Panel id="panel1">
              <PanelHeader>КУРЬЕР.КЕРЧЬ</PanelHeader>
              <Group>
                <CellButton onClick={ () => this.setState({ mainPanel: 'panel2' }) }>
                  Заказчик
                </CellButton>
                <CellButton onClick={ () => this.setState({ mainPanel: 'panel2' }) }>
                  Курьер
                </CellButton>
              </Group>
            </Panel>
          </View>
        </Root>
      )
    }
  }

export default MainView;