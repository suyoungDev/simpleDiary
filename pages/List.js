import React from 'react';
import Contaier from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListItem = styled.TouchableOpacity`
  width: 100%;
  padding: 4px 0px;
  border-bottom-color: #aaaaaa;
  border-bottom-width: 1px;
`;
const Label = styled.Text`
  font-size: 20px;
  letter-spacing: 2px;
`;

// 구조분해 할당, Destructuring Assignment
function List( {navigation} ){
  const [ list, setList ] = React.useState( [] );
  const [d] = React.useState('');
  const load = async () => {
    const data = await AsyncStorage.getItem('list');
    if (data !== null){
      setList(JSON.parse(data));
    }
  }


  // 작성한거 바로 목록에서 업데이트 
  // 포커스할 때, 데이터 가져오기
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      load();
    });

    return unsubscribe;
  }, [navigation]);

  return(
    <Contaier>
      <Contents>
        {list.map( item => {
          return (
            <ListItem 
              key={item.date}
              onPress={ ()=> navigation.navigate('Detail', { date:item.date, text:item.text} )}>
              <Label>{item.date}</Label>
            </ListItem>
          )
        })}  
      </Contents>
      <Button onPress={ ()=> navigation.navigate('Form')}>새 일기 작성</Button>
    </Contaier>
  )
}

export default List;
