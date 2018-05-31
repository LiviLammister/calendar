import React, { Component } from "react"
import {Button, Popup} from "semantic-ui-react"

const Event = (
    <div>
        Hello
    </div>
)

const CustomEvent = () => (
    <Popup trigger={Event} on='click' position='right'>
      <Popup.Header>User Rating</Popup.Header>
      <Popup.Content>
        hello!
      </Popup.Content>
    </Popup>
  )

export default CustomEvent