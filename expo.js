import React from 'react';
import { View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: 'https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/2491353d8fe/1c79e02d1782e90765690/1473635004_image.jpg' }}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />
      <Text style={{ marginTop: 10, fontSize: 20 }}>Gabriel Anderson</Text>
    </View>
  );
}
