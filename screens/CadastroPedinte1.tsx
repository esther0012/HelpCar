import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const CadastroPedinte1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cadastroPedinte04}>
      <View style={styles.dadosLogin}>
        <Text style={[styles.titulo, styles.tituloTypo]}>BEM-VINDO!</Text>
        <Text style={[styles.subtitulo, styles.tituloTypo]}>PAGAMENTO</Text>
        <View style={styles.setas}>
          <Pressable
            style={[styles.image7, styles.imageLayout]}
            onPress={() => navigation.navigate("CadastroPedinte")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-72.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image8, styles.imageLayout]}
            onPress={() => navigation.navigate("CadastroPedinte2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/seta2.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.caixaTextoIcon, styles.caixaPosition]}
          contentFit="cover"
          source={require("../assets/caixa-texto2.png")}
        />
        <View style={[styles.titulosCaixaTexto, styles.caixaPosition]}>
          <Text style={[styles.nomeCompleto, styles.nomeCompletoTypo]}>
            NOME COMPLETO
          </Text>
          <Text style={[styles.nmeroDoCarto, styles.nomeCompletoTypo]}>
            NÚMERO DO CARTÃO
          </Text>
          <Text style={[styles.dataDeExpirao, styles.cvvTypo]}>
            DATA DE EXPIRAÇÃO
          </Text>
          <Text style={[styles.cvv, styles.cvvTypo]}>{`CVV
`}</Text>
        </View>
        <View style={styles.passos}>
          <View style={styles.passosChild} />
          <Image
            style={[styles.passosItem, styles.passosLayout]}
            contentFit="cover"
            source={require("../assets/line-21.png")}
          />
          <Image
            style={[styles.passosInner, styles.passosLayout]}
            contentFit="cover"
            source={require("../assets/line-21.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.passosChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.passosChild1, styles.passosChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.passosChild2, styles.passosChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.passosChild3, styles.passosChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
          <Text style={[styles.text1, styles.textTypo]}>{`2
`}</Text>
          <Text style={[styles.text2, styles.textTypo]}>3</Text>
          <Text style={[styles.text3, styles.textTypo]}>{`4
`}</Text>
        </View>
      </View>
      <View style={styles.superior}>
        <View style={styles.fundo} />
        <Image
          style={styles.fundo01Icon}
          contentFit="cover"
          source={require("../assets/fundo-02.png")}
        />
        <Text style={[styles.titulo1, styles.titulo1Typo]}>JUNTE-SE A NÓS</Text>
        <Image
          style={[styles.img02Icon, styles.img02IconPosition]}
          contentFit="cover"
          source={require("../assets/img-02.png")}
        />
        <Text style={[styles.subtitulo1, styles.img02IconPosition]}>
          <Text style={styles.eTenhaAssistncia}>
            E tenha assistência a todo e qualquer momento
          </Text>
          <Text style={styles.text4}>!</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tituloTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  imageLayout: {
    width: 27,
    height: 28,
    top: 0,
    position: "absolute",
  },
  caixaPosition: {
    left: 12,
    position: "absolute",
  },
  nomeCompletoTypo: {
    height: 12,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  cvvTypo: {
    width: 128,
    height: 12,
    color: Color.colorGray_300,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  passosLayout: {
    width: 43,
    maxHeight: "100%",
    top: 19,
    position: "absolute",
  },
  passosChildLayout: {
    width: 38,
    height: 38,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    height: 22,
    width: 13,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    top: 7,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  titulo1Typo: {
    left: 67,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
  },
  img02IconPosition: {
    top: 85,
    position: "absolute",
  },
  titulo: {
    left: 8,
    color: Color.colorBlack,
    width: 223,
    height: 31,
    lineHeight: 30,
    letterSpacing: 2.5,
    fontSize: FontSize.size_6xl,
    top: 0,
  },
  subtitulo: {
    top: 88,
    left: 27,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.7,
    lineHeight: 16,
    color: Color.colorGray_600,
    width: 131,
    height: 15,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image7: {
    left: 306,
  },
  image8: {
    left: 0,
  },
  setas: {
    top: 298,
    height: 28,
    left: 0,
    width: 334,
    position: "absolute",
  },
  caixaTextoIcon: {
    top: 136,
    width: 301,
    height: 157,
  },
  nomeCompleto: {
    width: 109,
    top: 0,
  },
  nmeroDoCarto: {
    top: 64,
    width: 139,
  },
  dataDeExpirao: {
    top: 128,
    left: 0,
  },
  cvv: {
    top: 127,
    left: 179,
  },
  titulosCaixaTexto: {
    top: 118,
    width: 307,
    height: 140,
  },
  passosChild: {
    left: 38,
    borderStyle: "solid",
    borderColor: Color.colorDodgerblue_300,
    borderTopWidth: 3,
    width: 46,
    height: 3,
    top: 19,
    position: "absolute",
  },
  passosItem: {
    left: 119,
  },
  passosInner: {
    left: 200,
  },
  ellipseIcon: {
    left: 0,
  },
  passosChild1: {
    left: 81,
  },
  passosChild2: {
    left: 162,
  },
  passosChild3: {
    left: 243,
  },
  text: {
    left: 13,
  },
  text1: {
    left: 94,
  },
  text2: {
    left: 175,
  },
  text3: {
    left: 256,
  },
  passos: {
    top: 37,
    left: 32,
    width: 281,
    height: 38,
    position: "absolute",
  },
  dadosLogin: {
    top: 314,
    left: 7,
    height: 326,
    width: 334,
    position: "absolute",
  },
  fundo: {
    backgroundColor: Color.colorDodgerblue_300,
    width: 428,
    height: 287,
    left: 0,
    top: 0,
    position: "absolute",
  },
  fundo01Icon: {
    height: "29.39%",
    width: "94.16%",
    top: "70.61%",
    right: "0%",
    bottom: "0%",
    left: "5.84%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titulo1: {
    top: 49,
    color: Color.colorWhite,
    lineHeight: 30,
    letterSpacing: 2.5,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  img02Icon: {
    left: 53,
    width: 360,
    height: 187,
  },
  eTenhaAssistncia: {
    color: Color.colorGray_300,
  },
  text4: {
    color: Color.typographyText1,
  },
  subtitulo1: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    width: 241,
    left: 67,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
  },
  superior: {
    top: -26,
    left: -53,
    width: 462,
    height: 330,
    position: "absolute",
  },
  cadastroPedinte04: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CadastroPedinte1;
