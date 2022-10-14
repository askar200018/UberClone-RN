import { useNavigation } from '@react-navigation/native'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const data = [
  {
    id: 1,
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/550/550907.png',
    title: 'Get a ride',
    screen: 'MapScreen',
  },
  {
    id: 2,
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/1037/1037762.png',
    title: 'Order food',
    screen: 'OrderFoodScreen',
  },
]

function NavOptions() {
  const navigation = useNavigation()

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
          <Image
            style={{ resizeMode: 'contain', marginBottom: 16 }}
            source={{
              uri: item.imgSrc,
              height: 60,
              width: 60,
            }}
          />
          <Text style={{ color: 'white' }}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    padding: 32,
    margin: 16,
    borderRadius: 8,
  },
})
