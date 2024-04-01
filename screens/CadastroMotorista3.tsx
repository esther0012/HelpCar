import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const CadastroMotorista3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cadastroMotorista02}>
      <View style={styles.dadosLogin}>
        <Text style={[styles.titulo, styles.tituloTypo]}>BEM-VINDO!</Text>
        <Text style={[styles.subtitulo, styles.tituloTypo]}>
          DADOS DE LOGIN
        </Text>
        <View style={styles.setas}>
          <Pressable
            style={[styles.image7, styles.imageLayout]}
            onPress={() => navigation.navigate("CadastroMotorista2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-71.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image8, styles.imageLayout]}
            onPress={() => navigation.navigate("CadastroMotorista4")}
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
          source={require("../assets/caixa-texto1.png")}
        />
        <View style={styles.titulosCaixaTexto}>
          <Text style={[styles.email, styles.senhaTypo]}>EMAIL</Text>
          <Text style={[styles.senha, styles.senhaTypo]}>SENHA</Text>
          <Text style={[styles.confirmarSenha, styles.senhaTypo]}>
            CONFIRMAR SENHA
          </Text>
        </View>
        <View style={styles.passos}>
          <View style={[styles.passosChild, styles.passosLayout]} />
          <View style={[styles.passosItem, styles.passosLayout]} />
          <View style={[styles.passosInner, styles.passosLayout]} />
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
        <Text style={[styles.subtitulo1, styles.tituloTypo]}>
          <Text style={styles.eTenhaAssistncia}>
            E tenha assistência a todo e qualquer momento
          </Text>
          <Text style={styles.text4}>!</Text>
        </Text>
        <Image
          style={styles.fundo02Icon}
          contentFit="cover"
          source={require("../assets/fundo-02.png")}
        />
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
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  passosLayout: {
    height: 3,
    width: 46,
    borderTopWidth: 3,
    borderColor: Color.colorCornflowerblue,
    borderStyle: "solid",
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
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  titulo: {
    color: Color.colorBlack,
    width: 223,
    height: 31,
    lineHeight: 30,
    letterSpacing: 2.5,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    top: 0,
    left: 8,
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
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  senha: {
    top: 64,
    width: 57,
    height: 12,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
  },
  confirmarSenha: {
    top: 128,
    height: 12,
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
    left: 38,
  },
  passosItem: {
    left: 114,
  },
  passosInner: {
    left: 197,
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
    color: "rgba(0, 0, 0, 0.76)",
  },
  text1: {
    left: 94,
    color: Color.colorGray_300,
  },
  text2: {
    left: 175,
    color: Color.colorGray_300,
  },
  text3: {
    left: 256,
    color: Color.colorGray_300,
  },
  passos: {
    top: 41,
    width: 281,
    height: 38,
    left: 12,
    position: "absolute",
  },
  dadosLogin: {
    top: 314,
    height: 326,
    width: 334,
    left: 8,
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
  eTenhaAssistncia: {
    color: Color.colorGray_300,
  },
  text4: {
    color: Color.typographyText1,
  },
  subtitulo1: {
    top: 89,
    left: 68,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    width: 241,
  },
  fundo02Icon: {
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
    left: 67,
    color: Color.colorWhite,
    lineHeight: 30,
    letterSpacing: 2.5,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
  },
  img02Icon: {
    top: 109,
    left: 11,
    width: 360,
    height: 187,
    position: "absolute",
  },
  superior: {
    top: -16,
    left: -11,
    width: 462,
    height: 330,
    position: "absolute",
  },
  cadastroMotorista02: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CadastroMotorista3;
