import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Modal,
  Text,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from "react-native-reanimated";
import Currencyconfirmation from './currencyconfirmation';


import { Link } from "expo-router";
import CurrencyDetails from "./currencyDetails";

// import Pagination from './Pagination';
const CustomImageCarousal = ({ data, pagiation }) => {
  const scrollViewRef = useAnimatedRef(null);
  const interval = useRef();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);


  const [curency, setcueency] = useState("");
  const [balance,setbalance]=useState(0);

  // const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.6;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const onModalClose = () => {
    setModalVisible(false);
  };
  const onModalClose2 = () => {
    setModalVisible2(false);
  };

  const handleImagePress = (index,item) => {
    setSelectedImageIndex(index);
    setcueency(item.currency);
    setbalance(item.balance);
    setModalVisible(true);
  };

  const onproceClose=()=>{
    setModalVisible(false);
    setModalVisible2(true);

  }

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        // onScrollBeginDrag={() => {
        //   setIsAutoPlay(false);
        // }}
        // onMomentumScrollEnd={e => {
        //   offSet.value = e.nativeEvent.contentOffset.x;
        //   setIsAutoPlay(autoPlay);
        // }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {newData.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.8, 1, 0.8]
            );
            return {
              transform: [{ scale }],
            };
          });
          if (!item.Image) {
            return <View style={{ width: SPACER }} key={index} />;
          }
          return (
           
            <View style={{ width: SIZE }} key={index}>
              
                <Animated.View style={[styles.imageContainer, style]}>
              <TouchableWithoutFeedback onPress={() => handleImagePress(index,item)}>

                  <Image source={item.Image} style={styles.image} />
              </TouchableWithoutFeedback>

                </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>
      
    <CurrencyDetails modalVisible={modalVisible} onClose={onModalClose} currency={curency} balance={balance} onproceClose={onproceClose}>

    </CurrencyDetails>
    <Currencyconfirmation modalVisible={modalVisible2} onClose={onModalClose2} currency={curency} >

</Currencyconfirmation>

    </View>
  );
};

export default CustomImageCarousal;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 14 / 9,
    borderWidth: 2,
    // borderColor:"#AA047C",
    // borderRadius: 34,
  },modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  modalContent: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
  },
  
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
