import React from "react"
import { Button, Divider, Popup } from "semantic-ui-react"

const CustomEvent = (props) => (
    <Popup
        trigger={<Button
            fluid
            inverted
            content={props.title}
            size="mini"
        />}
        on='click'
        position='right center'
        size='large'
    >
        <Popup.Header>{props.title}</Popup.Header>
        <Divider />
        <Popup.Content>
            Start: {props.event.start.toString()}
            <Divider hidden />
            End: {props.event.end.toString()}
        </Popup.Content>
    </Popup>
)

export default CustomEvent