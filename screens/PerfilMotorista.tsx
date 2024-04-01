import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PerfilMotorista = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.perfilMotorista02}>
      <View style={styles.informaes}>
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
          style={[styles.informaesInner, styles.informaesLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={styles.image27Icon}
          contentFit="cover"
          source={require("../assets/image-27.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>100%</Text>
        <Text
          style={[styles.trabalhosFinalizados, styles.trabalhosFinalizadosTypo]}
        >
          Trabalhos finalizados
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>95%</Text>
        <Text style={[styles.satisfao, styles.horasTypo]}>Satisfação</Text>
        <Text style={[styles.text2, styles.textTypo]}>200</Text>
        <Text style={[styles.horas, styles.horasTypo]}>Horas</Text>
        <Text
          style={[styles.mecanicoProfissionalCom, styles.vectorIconPosition]}
        >{`Mecanico  profissional, com anos de experiência, em atuação desde 2010
e sem nenhuma reclamação.
Entre em contato comigo!`}</Text>
      </View>
      <View style={styles.superior}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.superiorChild, styles.lineIconPosition]} />
        <Text style={[styles.claudioBernardoCampo, styles.textTypo]}>
          Claudio Bernardo Campo
        </Text>
        <Image
          style={styles.fotoPerfilIcon}
          contentFit="cover"
          source={require("../assets/foto-perfil.png")}
        />
        <Image
          style={[styles.image25Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-25.png")}
        />
        <Image
          style={[styles.image24Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <Image
          style={[styles.image23Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-23.png")}
        />
        <Text style={[styles.estrelas, styles.estrelasTypo]}>5 estrelas</Text>
        <Text style={[styles.mensagens, styles.estrelasTypo]}>Mensagens</Text>
        <Text style={styles.sjc}>SJC</Text>
        <Text style={[styles.localizao, styles.estrelasTypo]}>Localização</Text>
        <View style={[styles.superiorItem, styles.superiorLayout]} />
        <View style={[styles.superiorInner, styles.superiorLayout]} />
        <Image
          style={[styles.lineIcon, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-31.png")}
        />
        <Pressable
          style={styles.icon04}
          onPress={() => navigation.navigate("CorridasMotorista")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon-04.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.mapa, styles.mapaLayout]}>
        <Image
          style={[styles.mapaIcon, styles.mapaLayout]}
          contentFit="cover"
          source={require("../assets/mapa.png")}
        />
        <Text style={styles.localizaoEmTempo}>LOCALIZAÇÃO EM TEMPO REAL</Text>
      </View>
      <Pressable
        style={styles.seta}
        onPress={() => navigation.navigate("InformaesMotorista")}
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
  informaesLayout: {
    height: 60,
    width: 58,
    top: 99,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  trabalhosFinalizadosTypo: {
    textAlign: "center",
    lineHeight: 12,
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
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
  vectorIconPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  lineIconPosition: {
    left: 154,
    width: 242,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 262,
    position: "absolute",
  },
  estrelasTypo: {
    top: "88.82%",
    height: "4.35%",
    lineHeight: 12,
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
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
  mapaLayout: {
    width: 335,
    position: "absolute",
  },
  informaesChild: {
    left: 92,
  },
  informaesItem: {
    left: 184,
  },
  informaesInner: {
    left: 0,
  },
  image27Icon: {
    top: 35,
    left: 191,
    width: 10,
    height: 10,
    position: "absolute",
  },
  text: {
    width: "18.18%",
    left: "40.91%",
    top: "76.1%",
    height: "9.43%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_mini,
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
    position: "absolute",
  },
  text1: {
    width: "14.05%",
    left: "80.99%",
    top: "76.1%",
    height: "9.43%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_mini,
  },
  satisfao: {
    width: "23.14%",
    top: "50.31%",
    left: "76.45%",
  },
  text2: {
    width: "12.4%",
    left: "5.79%",
    top: "76.1%",
    height: "9.43%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_mini,
  },
  horas: {
    width: "13.64%",
    top: "49.69%",
    left: "4.96%",
  },
  mecanicoProfissionalCom: {
    height: "31.45%",
    textAlign: "center",
    lineHeight: 12,
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    left: "0%",
    color: Color.colorGray_600,
  },
  informaes: {
    top: 275,
    left: 59,
    height: 159,
    width: 242,
    position: "absolute",
  },
  vectorIcon: {
    height: "91.61%",
    right: "0%",
    bottom: "8.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  superiorChild: {
    top: 173,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 149,
  },
  claudioBernardoCampo: {
    height: "7.76%",
    width: "35.04%",
    top: "66.77%",
    left: "30.81%",
  },
  fotoPerfilIcon: {
    top: 138,
    left: 240,
    borderRadius: Border.br_473xl,
    width: 70,
    height: 70,
    position: "absolute",
  },
  image25Icon: {
    left: 265,
  },
  image24Icon: {
    left: 185,
  },
  image23Icon: {
    left: 347,
  },
  estrelas: {
    width: "8.98%",
    left: "43.84%",
  },
  mensagens: {
    width: "10.04%",
    left: "29.23%",
  },
  sjc: {
    width: "3.52%",
    top: "93.17%",
    left: "61.09%",
    color: Color.colorGray_500,
    height: "4.35%",
    lineHeight: 12,
    letterSpacing: 0.5,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  localizao: {
    width: "10.74%",
    left: "57.39%",
  },
  superiorItem: {
    left: 234,
    top: 239,
  },
  superiorInner: {
    top: 240,
    left: 315,
  },
  lineIcon: {
    height: 1,
    top: 239,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icon04: {
    left: 414,
    top: 71,
    width: 30,
    height: 27,
    position: "absolute",
  },
  superior: {
    height: "50.31%",
    width: "157.78%",
    top: "-9.37%",
    right: "-31.39%",
    bottom: "59.06%",
    left: "-26.39%",
    position: "absolute",
  },
  mapaIcon: {
    top: 19,
    borderRadius: Border.br_11xl,
    height: 149,
    left: 0,
  },
  localizaoEmTempo: {
    height: "6.55%",
    width: "60.6%",
    left: "19.7%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.6,
    lineHeight: 14,
    color: Color.colorBlack,
    top: "0%",
    textAlign: "center",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  mapa: {
    top: 460,
    left: 12,
    height: 168,
  },
  seta: {
    left: 9,
    top: 13,
    width: 25,
    height: 25,
    position: "absolute",
  },
  perfilMotorista02: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default PerfilMotorista;
