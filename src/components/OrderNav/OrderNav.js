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
    Epic,
    Tabbar,
    TabbarItem,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class OrderNav extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            activeStory: 'profile',
            price: '96'
        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }

    onStoryChange (e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    render() {
        return (
            <Epic activeStory={this.onStoryChange} tabbar={
                <Tabbar>
                    <TabbarItem
                    onClick={this.onStoryChange}
                    selected={this.state.activeStory === 'price'}
                    data-story="price"
                    text={this.state.price + ' руб.'}
                    ></TabbarItem>
                    <TabbarItem
                    onClick={this.onStoryChange}
                    selected={this.state.activeStory === 'feed'}
                    data-story="feed"
                    text="Отправить"
                    ></TabbarItem>
                </Tabbar>
            }></Epic>
        )
    }
}

export default OrderNav;