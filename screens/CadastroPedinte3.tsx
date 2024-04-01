import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const CadastroPedinte3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cadastroPedinte02}>
      <View style={styles.dadosLogin}>
        <Text style={[styles.titulo, styles.tituloTypo]}>BEM-VINDO!</Text>
        <Text style={[styles.subtitulo, styles.tituloTypo]}>
          DADOS DE LOGIN
        </Text>
        <View style={styles.setas}>
          <Pressable
            style={[styles.image7, styles.imageLayout]}
            onPress={() => navigation.navigate("CadastroPedinte2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-73.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image8, styles.imageLayout]}
            onPress={() => navigation.navigate("CadastroPedinte4")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/seta2.png")}
            />
          </Pressable>
        </View>
        <Image
          style={styles.caixaTextoIcon}
          contentFit="cover"
          source={require("../assets/caixa-texto3.png")}
        />
        <View style={styles.titulosCaixaTexto}>
          <Text style={[styles.email, styles.senhaTypo]}>EMAIL</Text>
          <Text style={[styles.senha, styles.senhaTypo]}>SENHA</Text>
          <Text style={[styles.confirmarSenha, styles.senhaTypo]}>
            CONFIRMAR SENHA
          </Text>
        </View>
        <View style={styles.passos}>
          <View style={styles.passosChild} />
          <Image
            style={[styles.passosItem, styles.passosLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.passosInner, styles.passosLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.passosLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.passosChild1, styles.passosLayout]}
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
          source={require("../assets/fundo-01.png")}
        />
        <Text style={[styles.subtitulo1, styles.tituloTypo]}>
          E tenha assistência a todo e qualquer momento!
        </Text>
        <Text style={[styles.titulo1, styles.tituloTypo]}>JUNTE-SE A NÓS</Text>
        <Image
          style={styles.img02Icon}
          contentFit="cover"
          source={require("../assets/img-02.png")}
        />
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
  senhaTypo: {
    height: 12,
    color: Color.colorGray_300,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  passosLayout: {
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
  titulo: {
    left: 8,
    color: Color.colorBlack,
    width: 223,
    height: 31,
    lineHeight: 30,
    letterSpacing: 2.5,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
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
    left: 12,
    position: "absolute",
  },
  email: {
    width: 57,
    height: 12,
    color: Color.colorGray_300,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  senha: {
    top: 64,
    width: 57,
    height: 12,
    color: Color.colorGray_300,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
  },
  confirmarSenha: {
    top: 128,
    height: 12,
    color: Color.colorGray_300,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    width: 122,
  },
  titulosCaixaTexto: {
    top: 118,
    height: 140,
    width: 122,
    left: 12,
    position: "absolute",
  },
  passosChild: {
    top: 19,
    left: 38,
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue,
    borderTopWidth: 3,
    width: 46,
    height: 3,
    position: "absolute",
  },
  passosItem: {
    left: 0,
  },
  passosInner: {
    left: 81,
  },
  ellipseIcon: {
    left: 162,
  },
  passosChild1: {
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
    height: "29.94%",
    width: "94.98%",
    top: "70.06%",
    right: "0%",
    bottom: "0%",
    left: "5.02%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  subtitulo1: {
    top: 92,
    left: 64,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    color: Color.typographyText1,
    width: 241,
  },
  titulo1: {
    top: 49,
    left: 67,
    color: Color.colorWhite,
    lineHeight: 30,
    letterSpacing: 2.5,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
  },
  img02Icon: {
    top: 108,
    left: 53,
    width: 360,
    height: 187,
    position: "absolute",
  },
  superior: {
    top: -26,
    left: -53,
    width: 458,
    height: 324,
    position: "absolute",
  },
  cadastroPedinte02: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CadastroPedinte3;
