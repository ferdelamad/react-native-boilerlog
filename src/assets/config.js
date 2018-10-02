import { Platform, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
const IS_ANDROID = Platform.OS === 'android'

export default {
  ANDROID_STATUSBAR: 24,
  DEVICE_HEIGHT: IS_ANDROID ? height - 24 : height,
  DEVICE_WIDTH: width
}
