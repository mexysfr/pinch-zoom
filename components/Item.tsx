import { Image } from "expo-image";
import { Dimensions, StyleSheet, View } from "react-native";
import { SnapbackZoom } from "react-native-zoom-toolkit";

export const Item = ({ item }: { item: { uri: string; aspectRatio: number } }) => (
	<View style={styles.container}>
		<View style={styles.header} />
		<SnapbackZoom>
			<Image
				source={{ uri: item.uri }}
				style={{
					width: Dimensions.get('window').width - 32,
					height: (Dimensions.get('window').width - 32) / item.aspectRatio
				}}
			/>
		</SnapbackZoom>
		<View style={styles.footer} />
	</View>
)

const styles = StyleSheet.create({
	container: {
		margin: 16
	},
	header: {
		height: 24,
		width: '100%',
		backgroundColor: 'rgba(255, 0, 0, 0.5)'
	},
	footer: {
		height: 24,
		width: '100%',
		backgroundColor: 'rgba(0, 0, 255, 0.5)'
	}
})