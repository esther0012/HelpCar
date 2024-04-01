import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PerfilPedinte = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.perfilPedinte}>
      <Image
        style={styles.mapaIcon}
        contentFit="cover"
        source={require("../assets/mapa1.png")}
      />
      <View style={[styles.informaes, styles.informaesLayout]}>
        <View style={[styles.informaesChild, styles.informaesLayout]} />
        <Image
          style={[styles.informaesItem, styles.informaesItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.informaesInner, styles.informaesItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.informaesItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.img01Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/img-01.png")}
        />
        <Image
          style={[styles.img02Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/img-01.png")}
        />
        <Image
          style={[styles.img03Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/img-01.png")}
        />
        <Text style={[styles.local01, styles.localLayout]}>
          COLÉGIOS UNIVAP, CENTRO
        </Text>
        <Text style={[styles.local02, styles.localLayout]}>
          INSTITUTO ALPHA LUMEN, JARDIM ESPLANADA
        </Text>
        <Text style={[styles.local03, styles.localLayout]}>
          INSTITUTO TECNOLÓGICO DE AERONAUTICA, VILA DAS ACÁCIAS
        </Text>
        <View style={styles.lineView} />
      </View>
      <View style={[styles.barraPesquisa, styles.barraLayout]}>
        <View style={[styles.barraPesquisaChild, styles.barraLayout]} />
        <Image
          style={[styles.barraPesquisaItem, styles.informaesItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-12.png")}
        />
        <Text style={[styles.ondeVocDeseja, styles.localTypo]}>
          ONDE VOCÊ DESEJA IR?
        </Text>
        <Image
          style={[styles.imgIcon, styles.localLayout]}
          contentFit="cover"
          source={require("../assets/img.png")}
        />
      </View>
      <View style={[styles.fundo, styles.fundoLayout]}>
        <View style={[styles.fundoChild, styles.fundoLayout]} />
        <Text style={[styles.mensagens, styles.mensagensTypo]}>MENSAGENS</Text>
        <Image
          style={styles.fundoItem}
          contentFit="cover"
          source={require("../assets/line-28.png")}
        />
      </View>
      <View style={[styles.superior, styles.superiorLayout]}>
        <View style={[styles.superiorChild, styles.opesPosition]} />
        <Image
          style={[styles.superiorItem, styles.superiorLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-25.png")}
        />
        <Image
          style={styles.perfilIcon}
          contentFit="cover"
          source={require("../assets/perfil.png")}
        />
        <Text
          style={[styles.alexFernandesHb20, styles.desconectar1Typo]}
        >{`ALEX FERNANDES
HB20 SEDAN 2020
`}</Text>
      </View>
      <View style={[styles.opes, styles.opesPosition]}>
        <Image
          style={[styles.icon01, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-011.png")}
        />
        <Image
          style={[styles.icon02, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-021.png")}
        />
        <Image
          style={[styles.icon03, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-03.png")}
        />
        <Image
          style={[styles.icon04, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-041.png")}
        />
        <Image
          style={[styles.icon05, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-05.png")}
        />
        <View style={[styles.opesChild, styles.opesChildBorder]} />
        <Image
          style={styles.opesItem}
          contentFit="cover"
          source={require("../assets/line-25.png")}
        />
        <View style={[styles.opesInner, styles.opesChildBorder]} />
        <View style={[styles.opesChild1, styles.opesChildBorder]} />
        <View style={[styles.opesChild2, styles.opesChildBorder]} />
        <Text style={[styles.mensagens1, styles.mensagensTypo]}>MENSAGENS</Text>
        <Text style={[styles.portugus, styles.mensagensTypo]}>PORTUGUÊS</Text>
        <Text style={[styles.braslia, styles.mensagensTypo]}>BRASÍLIA</Text>
        <Text style={[styles.corridas, styles.mensagensTypo]}>SERVIÇOS</Text>
        <Text style={[styles.avaliaes, styles.mensagensTypo]}>AVALIAÇÕES</Text>
        <Pressable
          style={styles.desconectar}
          onPress={() => navigation.navigate("TelaInicial")}
        >
          <Text style={[styles.desconectar1, styles.desconectar1Typo]}>
            DESCONECTAR
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.seta, styles.informaesItemLayout]}
        onPress={() => navigation.navigate("LocalizaoPedinte")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  informaesLayout: {
    height: 183,
    width: 360,
    left: 0,
    position: "absolute",
  },
  informaesItemLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  iconLayout1: {
    height: 23,
    width: 25,
    left: 37,
    position: "absolute",
  },
  localLayout: {
    height: 16,
    position: "absolute",
  },
  barraLayout: {
    height: 40,
    width: 300,
    position: "absolute",
  },
  localTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },
  fundoLayout: {
    width: 224,
    position: "absolute",
  },
  mensagensTypo: {
    color: Color.colorGray_600,
    lineHeight: 14,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  superiorLayout: {
    height: 172,
    width: 223,
    left: 0,
    position: "absolute",
  },
  opesPosition: {
    width: 223,
    left: 0,
    position: "absolute",
  },
  desconectar1Typo: {
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
  },
  iconLayout: {
    height: 27,
    left: 17,
    width: 30,
    position: "absolute",
  },
  opesChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  mapaIcon: {
    height: 505,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  informaesChild: {
    borderRadius: Border.br_21xl,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  informaesItem: {
    top: 38,
    left: 35,
    width: 30,
  },
  informaesInner: {
    top: 84,
    left: 35,
    width: 30,
  },
  ellipseIcon: {
    top: 130,
    left: 35,
    width: 30,
  },
  img01Icon: {
    top: 42,
  },
  img02Icon: {
    top: 88,
  },
  img03Icon: {
    top: 134,
  },
  local01: {
    top: 45,
    width: 179,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    left: 76,
    height: 16,
  },
  local02: {
    top: 91,
    width: 270,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    left: 76,
    height: 16,
  },
  local03: {
    top: 135,
    width: 278,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    left: 76,
    height: 16,
  },
  lineView: {
    top: 21,
    left: 129,
    borderColor: "#fab810",
    borderTopWidth: 3,
    width: 103,
    height: 3,
    borderStyle: "solid",
    position: "absolute",
  },
  informaes: {
    top: 457,
  },
  barraPesquisaChild: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  barraPesquisaItem: {
    top: 5,
    left: 16,
  },
  ondeVocDeseja: {
    top: 14,
    width: 210,
    height: 20,
    left: 53,
    position: "absolute",
  },
  imgIcon: {
    top: 12,
    left: 23,
    width: 16,
  },
  barraPesquisa: {
    top: 398,
    left: 30,
  },
  fundoChild: {
    top: 4,
    backgroundColor: "#f5f5f5",
    left: 0,
    height: 640,
  },
  mensagens: {
    top: 120,
    left: 48,
  },
  fundoItem: {
    left: 218,
    width: 1,
    top: 0,
    position: "absolute",
    height: 640,
  },
  fundo: {
    left: 5,
    height: 644,
    top: 0,
  },
  superiorChild: {
    backgroundColor: Color.colorDodgerblue_100,
    height: 82,
    top: 0,
  },
  superiorItem: {
    borderRadius: Border.br_11xl,
    top: 0,
  },
  perfilIcon: {
    top: 26,
    left: 71,
    width: 80,
    height: 80,
    position: "absolute",
  },
  alexFernandesHb20: {
    top: 116,
    left: 41,
    color: Color.colorWhite,
    textAlign: "center",
    width: 140,
    height: 26,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  superior: {
    top: -3,
  },
  icon01: {
    top: 0,
  },
  icon02: {
    top: 57,
  },
  icon03: {
    top: 114,
  },
  icon04: {
    top: 173,
  },
  icon05: {
    top: 232,
  },
  opesChild: {
    top: 100,
    width: 222,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    left: 2,
  },
  opesItem: {
    top: 158,
    maxHeight: "100%",
    width: 221,
    left: 2,
    position: "absolute",
  },
  opesInner: {
    top: 218,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    width: 224,
    left: 0,
  },
  opesChild1: {
    top: 275,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    width: 224,
    left: 0,
  },
  opesChild2: {
    width: 222,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    left: 2,
    top: 42,
  },
  mensagens1: {
    top: 123,
    left: 54,
  },
  portugus: {
    top: 7,
    left: 53,
  },
  braslia: {
    top: 65,
    left: 53,
  },
  corridas: {
    top: 179,
    left: 53,
  },
  avaliaes: {
    top: 237,
    left: 53,
  },
  desconectar1: {
    color: Color.colorBlack,
    letterSpacing: 1.2,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  desconectar: {
    left: 10,
    top: 414,
    position: "absolute",
  },
  opes: {
    top: 194,
    height: 428,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  seta: {
    left: 181,
    top: 602,
  },
  perfilPedinte: {
    flex: 1,
    overflow: "hidden",
    height: 640,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default PerfilPedinte;
