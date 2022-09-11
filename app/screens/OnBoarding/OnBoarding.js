import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

// constants
import { images, theme } from "../../constants";
const { onboarding1, onboarding2, onboarding3 } = images;

// theme
const { COLORS, FONTS, SIZES } = theme;

const onBoardings = [
  {
    title: "Let's Travelling",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    img: onboarding1,
  },
  {
    title: "Navigation",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    img: onboarding2,
  },
  {
    title: "Destination",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    img: onboarding3,
  },
];

const OnBoarding = ({navigation}) => {
    const [completed, setCompleted] = React.useState(false);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }else{
                setCompleted(false);
            }
        });
    }, []);
  // Render
  const scrollX = new Animated.Value(0);
  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        decelerationRate={0}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >

        {onBoardings.map((item, index) => (
          <View key={index} style={{ width: SIZES.width }}>
            <StatusBar barStyle="dark-content" backgroundColor="#0682FE" />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{
                  width: 300,
                  height: 300,
                }}
              />
            </View>
            {/* Text */}
            <View
              style={{
                position: "absolute",
                bottom: "10%",
                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{ ...FONTS.h1, color: COLORS.gray, textAlign: "center" }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: "center",
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}
              >
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 150,
                    height: 60,
                    paddingLeft: 20,
                    justifyContent: 'center',
                    borderTopLeftRadius: 30,
                    borderBottomLeftRadius: 30,
                    backgroundColor: COLORS.blue,
                }}
                onPress={()=> navigation.navigate("Login") }>
                <Text style={{...FONTS.h1, color:COLORS.white}}>{completed ? "Begin":"Skip"}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            ></Animated.View>
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  dotContainer: {
    flexDirection: "row",
    height: SIZES.padding,
    justifyContent: "center",
    alignItems: "center",
  },
  dotRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "30%" : "20%",
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});

export default OnBoarding;
