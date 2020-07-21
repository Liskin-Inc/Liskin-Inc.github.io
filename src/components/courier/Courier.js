import React from 'react';
import orders from '../../orders/orders.json';
import {
    View,
    Panel,
    Card,
    CardGrid,
    Text,
    Div,
    ModalRoot,
    ModalPage,
    ModalPageHeader,
    PanelHeaderButton,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function CardItem(props) {
    return(
        <CardGrid style={{marginTop: 5}}>
            <Text>Заказ №{props.count.id}</Text>
            <Card size="l" mode="shadow">
                <div style={{
                    minHeight: 96,
                    display: "flex",
                    padding: 10
                }}>
                    <div style={{
                        borderRight: "1px solid #ccc",
                        paddingRight: 10,
                        flex: "0 0 25%",
                        color: "#ff5c00",
                        fontSize: 14,
                        fontWeight: "bold"
                    }}>
                        {props.count.price} Руб.
                    </div>
                    <div style={{
                        padding: "0 0 0 10px"
                    }}>
                        <Text style={{color: "#c6c6c6"}}>
                            Приехать до <span style={{fontWeight: "bold", color: "#ff5c00"}}>
                                {props.count.timeFrom}
                            </span>
                        </Text>
                        <div style={{margin: "15px 0"}}>
                            <Text style={{
                                color: "#c6c6c6"
                            }}>От: <span style={{
                                color: "#ff5c00"
                            }}>{props.count.addressFrom}</span></Text>
                            <Text style={{
                                color: "#c6c6c6"
                            }}>До: <span style={{
                                color: "#ff5c00"
                            }}>{props.count.addressTo}</span></Text>
                        </div>
                        <Text style={{
                            color: "#ff5c00",
                        }}>
                            {props.count.carry} до {props.count.weight} кг.
                        </Text>
                    </div>
                </div>
            </Card>
        </CardGrid>
    );
}

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeModal: null,
            index: null
        }

        this.modalBack = () => {
            this.setState({activeModal: null, index: null});
        }
    }

    setActiveModal(activeModal, arr, index) {
        let orderID = arr[index].id;
        this.setState({activeModal: activeModal, index: orderID});
        orderID = 0;
    }

    render() {
        let orderArr = [];
        for (let i = 0; i < orders.length; i++) {
            orderArr.push(
                <CardItem 
                    count={orders[i]}
                />
            );
        }

        const modal = (
            <ModalRoot
                activeModal={this.state.activeModal}
                onClose={this.modalBack}
            >
                <ModalPage
                    id="orderCard"
                    onClose={this.modalBack}
                    header={
                        <ModalPageHeader
                            right={<PanelHeaderButton onClick={this.modalBack}>{'Готово'}</PanelHeaderButton>}
                        >Заказ №{this.state.index}</ModalPageHeader>
                    }
                >
                    <Div>
                        <Text>Hi!</Text>
                    </Div>
                </ModalPage>
            </ModalRoot>
        );

        return(
            <View activePanel="orders" modal={modal}>
                <Panel id="orders">
                    <Div style={{
                            fontSize: 26,
                            fontWeight: "bold",
                            borderBottom: "1px solid #ccc"
                        }}
                    >
                        Сегодня
                    </Div>
                    {orderArr.map((order, index) => (
                        <div
                            key={index}
                            onClick={()=>this.setActiveModal("orderCard", orders, index)}
                        >
                            {order}
                        </div>
                    ))}
                </Panel>
            </View>
        );
    }
}

// function Courier() {
//     let orderArr = [];
//     for (let i = 0; i < orders.length; i++) {
//         orderArr.push(
//             <CardItem count={orders[i]} />
//         );
//     }

//     return(
//         <div className="orderBody">
//             <Div style={{
//                 fontWeight: "bold",
//                 fontSize: 20,
//                 borderBottom: "1px solid #ccc"
//             }}>Сегодня</Div>
//             {orderArr}
//             {/* <View modal={modal}>
//                 {orderArr}
//             </View> */}
//         </div>
//     );
// }

export default Order;