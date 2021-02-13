import data from './data.json'
import React from 'react'
import {View, Text} from 'react-native'


export default function FileTree() {
  return (
    <>
      <Text>(should render expandable tree here instead of that json)</Text>
      <Text>{JSON.stringify(data)}</Text>
    </>
  )
}