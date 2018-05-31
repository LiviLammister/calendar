import React, { Component } from "react"
import { Button, Divider, Popup } from "semantic-ui-react"

const PopupStyle = {
    backgroundColor: 'light grey'
}

const CustomEvent = (props) => {
    console.log(props)
    return(
    <Popup
        trigger={<Button content={props.title}/>}
        on='click'
        position='right'
        size='large'
        style={PopupStyle}
    >
        <Popup.Header>User Rating</Popup.Header>
        <Divider />
        <Popup.Content>
            hello!
      </Popup.Content>
    </Popup>
)}

export default CustomEvent