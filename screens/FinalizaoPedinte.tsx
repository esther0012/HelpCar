import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const FinalizaoPedinte = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.finalizaoPedinte02}>
      <Pressable
        style={styles.seta}
        onPress={() => navigation.navigate("LocalizaoPedinte")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
      <View style={[styles.motorista, styles.motoristaLayout]}>
        <Text style={[styles.claudioBernardoCampo, styles.motoristaLayout]}>
          CLAUDIO BERNARDO CAMPO
        </Text>
        <Image
          style={styles.fotoPerfilIcon}
          contentFit="cover"
          source={require("../assets/foto-perfil2.png")}
        />
      </View>
      <Image
        style={styles.bordasIcon}
        contentFit="cover"
        source={require("../assets/bordas2.png")}
      />
      <Image
        style={styles.image26Icon}
        contentFit="cover"
        source={require("../assets/image-26.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  motoristaLayout: {
    width: 226,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  seta: {
    left: 15,
    top: 505,
    width: 30,
    height: 30,
    position: "absolute",
  },
  claudioBernardoCampo: {
    top: 122,
    left: 0,
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSans12ptBold,
    color: Color.colorGray_600,
    textAlign: "left",
  },
  fotoPerfilIcon: {
    top: 0,
    left: 63,
    borderRadius: Border.br_473xl,
    width: 100,
    height: 100,
    position: "absolute",
  },
  motorista: {
    top: 147,
    left: 74,
    height: 140,
  },
  bordasIcon: {
    height: "118.13%",
    width: "117.78%",
    top: "-8.12%",
    right: "-10.28%",
    bottom: "-10%",
    left: "-7.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image26Icon: {
    top: 269,
    left: 112,
    width: 150,
    height: 150,
    position: "absolute",
  },
  finalizaoPedinte02: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default FinalizaoPedinte;
