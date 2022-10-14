import { Image, SafeAreaView, StyleSheet, View } from 'react-native'

import NavOptions from '../components/NavOptions'

function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 16 }}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://pngimg.com/uploads/uber/uber_PNG30.png',
            height: 100,
            width: 100,
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  image: {},
})
