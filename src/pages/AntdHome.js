import React from 'react'
import {Typography, Row, Col, List} from 'antd'
import Item from 'antd/lib/list/Item'

const {Title, Text} = Typography // This is equivalent to: const Title = Typography.Title
export default function AntdHome(){
    const data = [
        "Todo 1",
        "Second Task",
        "Third Task, not relevant"
    ]
    return(
        <>
        <Row justify="center">
            <Col span={5} style={{textAlign:'center'}}>
                <Title level={3}>Simple ToDo App</Title>
            </Col>
        </Row>
            <Row justify="center">
                <Col span={16}>
                    <List 
                        header="My To-Dos"
                        dataSource={data}
                        bordered
                        renderItem={ (item, idx) => (
                            <List.Item>
                                <Text>{idx + ": " + item}</Text>
                            </List.Item>
                        )
                        }
                    />
                </Col>
            </Row>
        </>
    )
}