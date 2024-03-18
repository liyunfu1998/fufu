import {Link, Stack} from 'expo-router'
import {View, Text, ScrollView} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {AuthWrapper} from '@/components'
import {useUserInfo} from '@/hooks'

export default function ProfileScreen() {
  return (
    <View>
      <Text>个人</Text>
    </View>
  );
}
