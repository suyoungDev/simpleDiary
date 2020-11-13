import React from 'react';
import {Button, Text, View} from 'react-native';

function Detail( {navigation} ){
  return(
    <View>
      <Text>Detail</Text>
      <Button 
        title="목록으로"
        onPress={()=>navigation.goBack()}
        // 이전 페이지로 가는 goBack() 메소드
        // navigation.navigate({List}) 해도 괜찮
         />
    </View>
  )
}

export default Detail;