import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const CadastroMotorista2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cadastroMotorista03}>
      <View style={styles.dadosPessoais}>
        <Text style={[styles.titulo, styles.tituloTypo]}>BEM-VINDO!</Text>
        <Text style={[styles.subtitulo, styles.tituloTypo]}>
          DADOS DE CORRESPONDÊNCIA
        </Text>
        <View style={styles.setas}>
          <Pressable
            style={[styles.image7, styles.imageLayout]}
            onPress={() => navigation.navigate("CadastroMotorista1")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-7.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image8, styles.imageLayout]}
            onPress={() => navigation.navigate("CadastroMotorista3")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/seta2.png")}
            />
          </Pressable>
        </View>
        <View style={styles.titulosCaixaTexto}>
          <Text style={[styles.bairro, styles.bairroTypo]}>BAIRRO</Text>
          <Text style={[styles.complemento, styles.bairroTypo]}>
            COMPLEMENTO
          </Text>
          <Text style={[styles.nmero, styles.nmeroTypo]}>NÚMERO</Text>
          <Text style={[styles.estado, styles.bairroTypo]}>ESTADO</Text>
          <Text style={[styles.cidade, styles.nmeroTypo]}>CIDADE</Text>
          <Text style={[styles.endereo, styles.bairroTypo]}>ENDEREÇO</Text>
        </View>
        <Image
          style={styles.caixasTextoIcon}
          contentFit="cover"
          source={require("../assets/caixas-texto.png")}
        />
        <View style={styles.passos}>
          <Image
            style={[styles.passosChild, styles.passosLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
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
          <Text style={[styles.text, styles.textTypo]}>1</Text>
          <Text style={[styles.text1, styles.textTypo]}>{`2
`}</Text>
          <Text style={[styles.text2, styles.textTypo]}>3</Text>
          <Text style={[styles.text3, styles.textTypo]}>{`4
`}</Text>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.passosChild1, styles.lineViewLayout]} />
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
  bairroTypo: {
    height: 12,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  nmeroTypo: {
    top: 65,
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
  lineViewLayout: {
    height: 3,
    width: 46,
    borderTopWidth: 3,
    borderColor: Color.colorDodgerblue_200,
    borderStyle: "solid",
    top: 19,
    position: "absolute",
  },
  titulo: {
    left: 9,
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
    top: 90,
    left: 15,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.7,
    lineHeight: 16,
    color: Color.colorGray_600,
    width: 228,
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
    width: 334,
    height: 28,
    left: 1,
    position: "absolute",
  },
  bairro: {
    width: 57,
    left: 186,
    top: 0,
  },
  complemento: {
    top: 130,
    left: 185,
    width: 168,
  },
  nmero: {
    width: 57,
    left: 186,
  },
  estado: {
    width: 57,
    left: 0,
    top: 0,
  },
  cidade: {
    width: 82,
    left: 0,
  },
  endereo: {
    top: 129,
    width: 139,
    left: 0,
  },
  titulosCaixaTexto: {
    top: 120,
    width: 353,
    height: 142,
    left: 1,
    position: "absolute",
  },
  caixasTextoIcon: {
    top: 109,
    width: 340,
    height: 212,
    left: 0,
    position: "absolute",
  },
  passosChild: {
    left: 0,
  },
  passosItem: {
    left: 81,
  },
  passosInner: {
    left: 162,
  },
  ellipseIcon: {
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
  lineView: {
    left: 38,
  },
  passosChild1: {
    left: 119,
  },
  passos: {
    top: 37,
    left: 33,
    width: 281,
    height: 38,
    position: "absolute",
  },
  dadosPessoais: {
    top: 314,
    left: 6,
    width: 354,
    height: 326,
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
    top: 95,
    left: 51,
    width: 360,
    height: 187,
    position: "absolute",
  },
  superior: {
    top: -16,
    left: -51,
    width: 462,
    height: 330,
    position: "absolute",
  },
  cadastroMotorista03: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CadastroMotorista2;
