import React from 'react';
import {Button, Text, View} from 'react-native';


// 구조분해 할당, Destructuring Assignment
function List( {navigation} ){
  return(
    <View>
      <Text>List</Text>
      <Button 
        title="디테일 페이지로"
        onPress={ () => navigation.navigate("Detail") }
        // Stack.Screen name 이 Detail인 파일로 이동
        />
        <Button 
        title="작성 페이지로"
        onPress={ () => navigation.navigate("Form") }
        // Stack.Screen name 이 Detail인 파일로 이동
        />
    </View>
  )
}

export default List;
