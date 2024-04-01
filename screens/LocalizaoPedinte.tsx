import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LocalizaoPedinte = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.localizaoPedinte, styles.informaesItemBorder]}>
      <Image
        style={styles.mapaIcon}
        contentFit="cover"
        source={require("../assets/mapa2.png")}
      />
      <Pressable
        style={[styles.menu, styles.menuLayout]}
        onPress={() => navigation.navigate("PerfilPedinte")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/menu.png")}
        />
      </Pressable>
      <View style={[styles.barraPesquisa, styles.barraLayout]}>
        <View style={[styles.barraPesquisaChild, styles.barraLayout]} />
        <Text style={[styles.oQueEst, styles.oQueEstTypo]}>
          O QUE ESTÁ PROCURANDO?
        </Text>
        <View style={[styles.pesquisa, styles.pesquisaLayout]}>
          <Image
            style={[styles.pesquisaChild, styles.pesquisaLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={styles.imgIcon}
            contentFit="cover"
            source={require("../assets/img.png")}
          />
        </View>
      </View>
      <View style={[styles.informaes, styles.informaesLayout]}>
        <View style={[styles.informaesChild, styles.informaesLayout]} />
        <View style={[styles.bolinha01, styles.bolinhaPosition]}>
          <Image
            style={[styles.pesquisaChild, styles.pesquisaLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.img01Icon, styles.menuLayout]}
            contentFit="cover"
            source={require("../assets/img-01.png")}
          />
        </View>
        <View style={[styles.bolinha02, styles.bolinhaPosition]}>
          <Image
            style={[styles.pesquisaChild, styles.pesquisaLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.img01Icon, styles.menuLayout]}
            contentFit="cover"
            source={require("../assets/img-01.png")}
          />
        </View>
        <View style={[styles.bolinha03, styles.bolinhaPosition]}>
          <Image
            style={[styles.pesquisaChild, styles.pesquisaLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.img01Icon, styles.menuLayout]}
            contentFit="cover"
            source={require("../assets/img-01.png")}
          />
        </View>
        <Pressable
          style={[styles.local01, styles.localPosition]}
          onPress={() => navigation.navigate("InformaesPedinte")}
        >
          <Text style={[styles.lavaJato, styles.oQueEstTypo]}>LAVA-JATO</Text>
        </Pressable>
        <Pressable
          style={[styles.local02, styles.localPosition]}
          onPress={() => navigation.navigate("InformaesPedinte")}
        >
          <Text style={[styles.oficinaMecnica, styles.oQueEstTypo]}>
            OFICINA MECÂNICA
          </Text>
        </Pressable>
        <Pressable
          style={[styles.local03, styles.localPosition]}
          onPress={() => navigation.navigate("InformaesPedinte")}
        >
          <Text
            style={[styles.postoDeGasolina, styles.oQueEstTypo]}
          >{`POSTO DE GASOLINA 
`}</Text>
        </Pressable>
        <View style={[styles.informaesItem, styles.informaesItemBorder]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  informaesItemBorder: {
    borderColor: Color.colorDodgerblue_100,
    borderStyle: "solid",
  },
  menuLayout: {
    width: 25,
    position: "absolute",
  },
  barraLayout: {
    height: 40,
    width: 300,
    position: "absolute",
  },
  oQueEstTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },
  pesquisaLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  informaesLayout: {
    height: 183,
    width: 360,
    left: 0,
    position: "absolute",
  },
  bolinhaPosition: {
    left: 35,
    height: 30,
    width: 30,
    position: "absolute",
  },
  localPosition: {
    left: 76,
    position: "absolute",
  },
  mapaIcon: {
    height: 505,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  menu: {
    left: 15,
    top: 10,
    height: 25,
  },
  barraPesquisaChild: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  oQueEst: {
    top: 14,
    left: 53,
    width: 210,
    height: 20,
    position: "absolute",
  },
  pesquisaChild: {
    left: 0,
    top: 0,
  },
  imgIcon: {
    top: 7,
    left: 7,
    width: 16,
    height: 16,
    position: "absolute",
  },
  pesquisa: {
    top: 5,
    left: 16,
  },
  barraPesquisa: {
    top: 398,
    left: 30,
  },
  informaesChild: {
    borderRadius: Border.br_21xl,
    top: 0,
    height: 183,
    backgroundColor: Color.colorWhite,
  },
  img01Icon: {
    top: 4,
    left: 2,
    height: 23,
  },
  bolinha01: {
    top: 41,
  },
  bolinha02: {
    top: 84,
  },
  bolinha03: {
    top: 130,
  },
  lavaJato: {
    width: 179,
    height: 16,
  },
  local01: {
    top: 45,
  },
  oficinaMecnica: {
    width: 270,
    height: 16,
  },
  local02: {
    top: 91,
  },
  postoDeGasolina: {
    width: 278,
    height: 16,
  },
  local03: {
    top: 135,
  },
  informaesItem: {
    top: 21,
    left: 129,
    borderTopWidth: 3,
    width: 103,
    height: 3,
    position: "absolute",
  },
  informaes: {
    top: 457,
  },
  localizaoPedinte: {
    borderWidth: 1,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LocalizaoPedinte;
