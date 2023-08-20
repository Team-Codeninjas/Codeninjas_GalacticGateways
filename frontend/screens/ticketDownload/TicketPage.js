import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import backgroundImage from "../../images/background.jpg";
import ModalPopup from "../../components/ModalPopup";
import Data from "../../api/Data";

const TicketPage = () => {
  const [visible, setVisible] = useState(false);
  const [cardData, setCardData] = useState(Data);
  const navigation = useNavigation();


  useEffect(() => {
    setCardData(Data);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        <Image source={require("../../assets/jet.png")} style={styles.jetImg} />
        <StatusBar style="auto" />
        <View style={styles.textBackground}>
          <Text style={styles.subtitleText}>Transaction Completed</Text>
        </View>
        <View style={styles.ticketContainer}>
          <View style={styles.cardContainer}>
            <Text
              style={{
                marginBottom: 20,
                fontSize: 25,
                textDecorationLine: "underline",
                textAlign: "center",
              }}>
              Invoice
            </Text>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  color: "#0C0337",
                  textAlign: "center",
                  fontWeight: 700,
                }}>
                Depature
              </Text>
              <FlatList
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=>(
                  <Text
                style={{ fontSize: 18, fontWeight: "900", textAlign: "center" }}>
                {item.Depature}
              </Text>
                )}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  color: "#0C0337",
                  textAlign: "center",
                  fontWeight: 700,
                }}>
                Arrival
              </Text>
              <FlatList
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=>(
                  <Text
                style={{ fontSize: 18, fontWeight: "900", textAlign: "center" }}>
                {item.Arrival}
              </Text>
                )}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  color: "#0C0337",
                  textAlign: "center",
                  fontWeight: 700,
                }}>
                Seats
              </Text>
              <FlatList
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=>(
                  <Text
                style={{ fontSize: 18, fontWeight: "900", textAlign: "center" }}>
                {item.seatCount} seats - {item.seatCategory[0]}
              </Text>
                )}
              />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  color: "#0C0337",
                  textAlign: "center",
                  fontWeight: 700,
                }}>
                Date and Time of Depature
              </Text>
              <FlatList
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=>(
                  <Text
                style={{ fontSize: 18, fontWeight: "900", textAlign: "center" }}>
                {item.date}
              </Text>
                )}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TouchableOpacity
                onPress={() => {
navigation.navigate("Details");
                }}
              >
                <Text
                  style={{
                    textAlign: "right",
                    paddingRight: 30,
                    fontSize: 17,
                    fontWeight: "800",
                  }}>
                  more details...
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=>(
                  <Text>Order No: {item.orderNo}</Text>
                )}
              />
              <FlatList
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=>(
                  <Image
                source={item.barCodeSrc}
                style={{ width: 300, height: 60 }}/>
                )}
              />
            </View>
          </View>
        </View>
        <ModalPopup visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={require("../../assets/x.png")}
                  style={{ height: 30, width: 30 }}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                alert("Download successful.");
              }}
            >
              <Image
                source={require("../../assets/download.gif")}
                style={{ height: 150, width: 150, marginVertical: 10 }}/>
            </TouchableOpacity>
          </View>
          <Text
            style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
          >
            Click Here to download
          </Text>
        </ModalPopup>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisible(true)}
          >
            <View>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 18,
                  textTransform: "uppercase",
                  fontWeight: "900",
                }}>
                Download Ticket
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#0C0337",
            width: "100%",
            position: "relative",
            height: "100%",
            borderRadius: 10,
          }}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
            MENU
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  textBackground: {
    backgroundColor: "rgba(38, 29, 41,0.6)",
    paddingTop: 30,
    width: "100%",
    height: 150,
    borderColor: "#BD00FF",
    borderBottomWidth: 2,
  },
  subtitleText: {
    paddingLeft: 15,
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  ticketContainer: {
    position: "relative",
    width: "100%",
    height: "65%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: "95%",
    height: 450,
    backgroundColor: "#fff",
    borderRadius: 20,
    display: "flex",
    paddingTop: 20,
  },
  buttonContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  button: {
    width: "80%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#0C0337",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BD00FF",
  },
  header: {
    width: "100%",
    height: 30,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  jetImg: {
    position: "absolute",
    zIndex: 100,
    height: 200,
    display: "flex",
    right: 10,
    top: "-500px",
  },
});
export default TicketPage;
