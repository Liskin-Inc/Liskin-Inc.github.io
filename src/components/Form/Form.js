import React from 'react';
import {
    Group,
    FormLayout,
    Input,
    Select,
    Textarea,
    Radio,
    Button,
    Epic,
    Tabbar,
    TabbarItem
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import orders from '../../orders/orders.json';

class SelectW extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        1: "1 кг",
        5: "5 кг",
        10: "10 кг",
        15: "15 кг",
    }
  }

  render() {
    return(
      <Select top="Вес посылки">
        <option name="weight" value="1">До {this.state[1]}</option>
        <option name="weight" value="5">До {this.state[5]}</option>
        <option name="weight" value="10">До {this.state[10]}</option>
        <option name="weight" value="15">До {this.state[15]}</option>
      </Select>
    )
  }
}

class SelectA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      50: "50 кг",
      100: "100 кг",
      150: "150 кг",
      200: "200 кг",
    }
  }

  render() {
    return (
      <Select top="Вес посылки">
        <option name="weight" value="1">До {this.state[50]}</option>
        <option name="weight" value="5">До {this.state[100]}</option>
        <option name="weight" value="10">До {this.state[150]}</option>
        <option name="weight" value="15">До {this.state[200]}</option>
      </Select>
    )
  }
}

class Radios extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectW = this.handleSelectW.bind(this);
    this.handleSelectA = this.handleSelectA.bind(this);
    this.state = {isWalk: true};
  }

  handleSelectW() {
    this.setState({isWalk: true});
  }
  handleSelectA() {
    this.setState({isWalk: false});
  }

  render() {
    const isWalk = this.state.isWalk;
    let out = '';

    if (isWalk) {
      out = <SelectW />;
    } else {
      out = <SelectA />;
    }

    return (
        <div>
          <Radio
            name="radio"
            value="w"
            id="radio-w"
            onClick={this.handleSelectW}
          >Пешком</Radio>
          <Radio
            name="radio"
            value="a"
            id="radio-a"
            onClick={this.handleSelectA}
          >Авто</Radio>
          {out}
        </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addressFrom: '',
      addressTo: '',
      timeFrom: '',
      timeTo: '',
      dayFrom: '',
      dayTo: '',
      telTo: '',
      telFrom: '',
      commentsFrom: '',
      commentsTo: '',
      additionFrom: '',
      additionTo: '',
      carry: '',
      price: '100'
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  render() {
    const { 
      addressFrom,
      addressTo,
      timeFrom,
      timeTo,
      dayFrom,
      dayTo,
      telTo,
      telFrom,
      commentsFrom,
      commentsTo,
      additionFrom,
      additionTo,
      carry
    } = this.state;

    return (
          <FormLayout>
            <Radios />
            <hr style={{
              height: 2,
              background: "#ff5c00",
              border: "none"
            }} />
            <Select
              top="Что везем?"
              name="carry"
              value={carry}
              onChange={this.onChange}
              placeholder="Выберите из списка"
            >
              <option>Документы</option>
              <option>Продукты</option>
              <option>Обувь</option>
              <option>Одежда</option>
              <option>Горячая еда</option>
              <option>Подарок</option>
              <option>Цветы</option>
              <option>Торт</option>
            </Select>
            <hr style={{
              height: 2,
              background: "#ff5c00",
              border: "none"
            }} />
            <Group style={{
              paddingLeft: 16,
              color: "#ff5c00",
              fontSize: 32,
              }}>Откуда</Group>
            <Input
              top="Адрес"
              type="text"
              name="addressFrom"
              value={addressFrom}
              onChange={this.onChange}
            />
            <Input
            type="date"
            top="Когда и до скольки приехать"
            name="dayFrom"
            value={dayFrom}
            onChange={this.onChange}
            placeholder="Выберете день"
            />
            <Input
            type="time"
            name="timeFrom"
            value={timeFrom}
            onChange={this.onChange}
            placeholder="Выберете время"
            />
            <Input
              top="Телефон"
              type="tel"
              name="telFrom"
              value={telFrom}
              onChange={this.onChange}
            />
            <Input
              top="Коментарий: кв., офис и т.д."
              type="text"
              name="commentsFrom"
              value={commentsFrom}
              onChange={this.onChange}
            />
            <Textarea
              top="Дополнительно"
              name="additionFrom"
              value={additionFrom}
              onChange={this.onChange}
            />
            
              <hr style={{
                height: 2,
                background: "#ff5c00",
                border: "none"
              }} />
              <Group style={{
                paddingLeft: 16,
                color: "#ff5c00",
                fontSize: 32,
              }}>Куда</Group>
              <Input
                top="Адрес"
                type="text"
                name="addressTo"
                value={addressTo}
                onChange={this.onChange}
              />
                <Input
                type="date"
                top="Когда и до скольки приехать"
                name="dayTo"
                value={dayTo}
                onChange={this.onChange}
                placeholder="Выберете день"
                />
                <Input
                type="time"
                name="timeTo"
                value={timeTo}
                onChange={this.onChange}
                placeholder="Выберете время"
                />
              <Input
                top="Телефон"
                type="tel"
                name="telTo"
                value={telTo}
                onChange={this.onChange}
              />
              <Input
                top="Коментарий: кв., офис и т.д."
                type="text"
                name="commentsTo"
                value={commentsTo}
                onChange={this.onChange}
              />
              <Textarea
                top="Дополнительно"
                name="additionTo"
                value={additionTo}
                onChange={this.onChange}
                style={{
                  marginBottom: 16
                }}
              />

            <Epic tabbar={
              <Tabbar>
                <TabbarItem
                  onClick={this.onStoryChange}
                  selected={this.state.activeStory === 'price'}
                  data-story="price"
                  text={this.state.price + ' руб.'}
                  style={{
                    fontWeight: "bold"
                  }}
                ></TabbarItem>
                <TabbarItem
                  onClick={this.onStoryChange}
                  selected={this.state.activeStory === 'feed'}
                  data-story="feed"
                  text=""
                >
                    <Button
                        onClick={() => {
                            orders.push(this.state);
                            console.log(orders);
                        }}
                    >Отправить</Button>
                </TabbarItem>
              </Tabbar>
            }></Epic>
          </FormLayout>
    );
  }
}

export default Form;