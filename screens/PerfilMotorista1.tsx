import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const PerfilMotorista1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.perfilMotorista01}>
      <View style={styles.superior}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={[styles.superiorChild, styles.lineIconLayout]} />
        <Text style={styles.claudioBernardoCampo}>Claudio Bernardo Campo</Text>
        <Image
          style={styles.fotoPerfilIcon}
          contentFit="cover"
          source={require("../assets/foto-perfil.png")}
        />
        <Text style={[styles.estrelas, styles.sjcLayout]}>5 estrelas</Text>
        <Image
          style={[styles.image25Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-25.png")}
        />
        <Text style={[styles.mensagem, styles.sjcLayout]}>Mensagem</Text>
        <Pressable
          style={[styles.image24, styles.iconLayout]}
          onPress={() => navigation.navigate("MensagemPedinte")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
        </Pressable>
        <Text style={[styles.sjc, styles.sjcLayout]}>SJC</Text>
        <Text style={[styles.localizao, styles.sjcLayout]}>Localização</Text>
        <Image
          style={[styles.image23Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-23.png")}
        />
        <View style={[styles.superiorItem, styles.superiorLayout]} />
        <View style={[styles.superiorInner, styles.superiorLayout]} />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-31.png")}
        />
      </View>
      <View style={[styles.informaes, styles.lineIconLayout]}>
        <Image
          style={[styles.informaesChild, styles.informaesLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
        <Image
          style={[styles.informaesItem, styles.informaesLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={[styles.informaesInner, styles.mapaIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>200</Text>
        <Text style={[styles.text1, styles.textTypo]}>100%</Text>
        <Text style={[styles.text2, styles.textTypo]}>95%</Text>
        <Text
          style={[styles.trabalhosFinalizados, styles.localizaoEmTempoTypo]}
        >
          Trabalhos finalizados
        </Text>
        <Text style={[styles.satisfao, styles.horasTypo]}>Satisfação</Text>
        <Text style={[styles.horas, styles.horasTypo]}>Horas</Text>
        <Text
          style={[styles.mecanicoProfissionalCom, styles.localizaoEmTempoTypo]}
        >{`Mecanico  profissional, com anos de experiência, em atuação desde 2010
e sem nenhuma reclamação.
Entre em contato comigo!`}</Text>
      </View>
      <View style={styles.mapa}>
        <Text style={[styles.localizaoEmTempo, styles.localizaoEmTempoTypo]}>
          LOCALIZAÇÃO EM TEMPO REAL
        </Text>
        <Image
          style={[styles.mapaIcon, styles.mapaIconPosition]}
          contentFit="cover"
          source={require("../assets/mapa.png")}
        />
      </View>
      <Pressable
        style={styles.seta}
        onPress={() => navigation.navigate("FinalizaoPedinte1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/seta1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    width: 242,
    position: "absolute",
  },
  sjcLayout: {
    lineHeight: 12,
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 270,
    position: "absolute",
  },
  superiorLayout: {
    height: 83,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    position: "absolute",
  },
  informaesLayout: {
    height: 60,
    width: 58,
    top: 99,
  },
  mapaIconPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo: {
    top: "76.1%",
    height: "9.43%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  localizaoEmTempoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  horasTypo: {
    height: "6.29%",
    textAlign: "center",
    color: Color.colorGray_400,
    lineHeight: 12,
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon: {
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  superiorChild: {
    top: 181,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 149,
    left: 192,
    width: 242,
  },
  claudioBernardoCampo: {
    height: "7.29%",
    width: "38.42%",
    top: "65.01%",
    left: "41.12%",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_600,
    position: "absolute",
  },
  fotoPerfilIcon: {
    top: 146,
    left: 278,
    borderRadius: Border.br_473xl,
    width: 70,
    height: 70,
    position: "absolute",
  },
  estrelas: {
    width: "9.85%",
    left: "55.41%",
    top: "85.71%",
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    height: "4.08%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  image25Icon: {
    left: 303,
  },
  mensagem: {
    width: "11%",
    left: "39.38%",
    top: "85.71%",
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    height: "4.08%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image24: {
    left: 223,
  },
  sjc: {
    width: "3.86%",
    top: "89.8%",
    left: "74.32%",
    color: Color.colorGray_500,
    height: "4.08%",
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  localizao: {
    width: "11.78%",
    left: "70.27%",
    top: "85.71%",
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    height: "4.08%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  image23Icon: {
    left: 385,
  },
  superiorItem: {
    left: 272,
    top: 247,
  },
  superiorInner: {
    top: 248,
    left: 353,
  },
  lineIcon: {
    height: 1,
    top: 247,
    left: 192,
    width: 242,
  },
  superior: {
    height: "53.59%",
    width: "143.89%",
    top: "-10.62%",
    right: "-6.94%",
    bottom: "57.03%",
    left: "-36.94%",
    position: "absolute",
  },
  informaesChild: {
    left: 92,
    position: "absolute",
  },
  informaesItem: {
    left: 184,
    position: "absolute",
  },
  informaesInner: {
    height: 60,
    width: 58,
    top: 99,
  },
  text: {
    width: "12.4%",
    left: "5.79%",
  },
  text1: {
    width: "18.18%",
    left: "40.91%",
  },
  text2: {
    width: "14.05%",
    left: "80.99%",
  },
  trabalhosFinalizados: {
    height: "18.87%",
    width: "28.1%",
    top: "46.54%",
    left: "35.95%",
    color: Color.colorGray_400,
    textAlign: "center",
    lineHeight: 12,
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
  },
  satisfao: {
    width: "23.14%",
    top: "50.31%",
    left: "76.45%",
  },
  horas: {
    width: "13.64%",
    top: "49.69%",
    left: "4.96%",
  },
  mecanicoProfissionalCom: {
    height: "31.45%",
    lineHeight: 12,
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_600,
    textAlign: "center",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  informaes: {
    top: 275,
    left: 59,
    height: 159,
  },
  localizaoEmTempo: {
    height: "6.55%",
    width: "60.6%",
    left: "19.7%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.6,
    lineHeight: 14,
    color: Color.colorBlack,
    textAlign: "center",
    top: "0%",
  },
  mapaIcon: {
    top: 19,
    borderRadius: Border.br_11xl,
    width: 335,
    height: 149,
  },
  mapa: {
    height: "26.25%",
    width: "93.06%",
    top: "71.88%",
    right: "3.61%",
    bottom: "1.88%",
    left: "3.33%",
    position: "absolute",
  },
  seta: {
    left: 9,
    top: 13,
    width: 25,
    height: 25,
    position: "absolute",
  },
  perfilMotorista01: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default PerfilMotorista1;
