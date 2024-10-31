import { FlashList } from "@shopify/flash-list"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { DATA } from "../data"
import { Item } from "./Item"

export const List = () => {
  const insets = useSafeAreaInsets()

  return (
    <FlashList
      showsVerticalScrollIndicator={false}
      overScrollMode={'never'}
      contentContainerStyle={{ paddingTop: insets.top }}
      data={DATA}
      renderItem={Item}
      estimatedItemSize={224}
    />
  )
}