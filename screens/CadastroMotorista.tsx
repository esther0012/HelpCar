import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const CadastroMotorista = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cadastroMotorista05}>
      <View style={styles.termoscondies}>
        <Text style={[styles.ttulo, styles.ttuloTypo]}>TERMOS E CONDIÇÕES</Text>
        <Pressable
          style={[styles.seta, styles.setaPosition]}
          onPress={() => navigation.navigate("CadastroMotorista1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/seta2.png")}
          />
        </Pressable>
        <View style={[styles.boto, styles.botoLayout]}>
          <Pressable
            style={[styles.botoChild, styles.childPosition]}
            onPress={() => navigation.navigate("InformaesMotorista")}
          />
          <Pressable
            style={styles.enviar}
            onPress={() => navigation.navigate("InformaesMotorista")}
          >
            <Text style={styles.enviar1}>ENVIAR</Text>
          </Pressable>
        </View>
        <View style={[styles.termos, styles.termosLayout]}>
          <View style={[styles.termosChild, styles.termosLayout]} />
          <View style={styles.termosItem} />
          <Text style={styles.cliqueEmAceito}>
            Clique em “Aceito” para confirmar que leu, compreendeu e concorda
            com os termos e condições abaixo
          </Text>
          <Text
            style={[
              styles.permitoQueEsseContainer,
              styles.enviarEssasCredenciaisTypo,
            ]}
          >
            <Text
              style={styles.permitoQueEsse}
            >{`Permito que esse website colete e armazene os dados digitados preenchidos neste formulário. `}</Text>
            <Text style={styles.text}>*</Text>
          </Text>
          <Text
            style={[
              styles.enviarEssasCredenciais,
              styles.enviarEssasCredenciaisTypo,
            ]}
          >
            Enviar essas credenciais via email.
          </Text>
          <View style={[styles.opo01, styles.opoLayout]} />
          <View style={[styles.opo02, styles.opoLayout]} />
        </View>
      </View>
      <View style={styles.superior}>
        <View style={[styles.fundo, styles.setaPosition]} />
        <Text style={[styles.subtitulo, styles.subtituloPosition]}>
          <Text style={styles.eTenhaAssistncia}>
            E tenha assistência a todo e qualquer momento
          </Text>
          <Text style={styles.text1}>!</Text>
        </Text>
        <Image
          style={styles.fundo02Icon}
          contentFit="cover"
          source={require("../assets/fundo-02.png")}
        />
        <Text style={[styles.titulo, styles.ttuloTypo]}>JUNTE-SE A NÓS</Text>
        <Image
          style={[styles.img02Icon, styles.subtituloPosition]}
          contentFit="cover"
          source={require("../assets/img-02.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ttuloTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
  },
  setaPosition: {
    left: 0,
    position: "absolute",
  },
  botoLayout: {
    height: 23,
    width: 84,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  termosLayout: {
    height: 166,
    position: "absolute",
  },
  enviarEssasCredenciaisTypo: {
    height: 29,
    left: 50,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  opoLayout: {
    height: 14,
    width: 14,
    borderWidth: 0.5,
    backgroundColor: Color.colorSilver_300,
    borderRadius: Border.br_8xs,
    left: 13,
    borderColor: Color.colorDodgerblue_100,
    borderStyle: "solid",
    position: "absolute",
  },
  subtituloPosition: {
    top: 89,
    position: "absolute",
  },
  ttulo: {
    left: 48,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    color: Color.colorGray_600,
    width: 247,
    height: 17,
    letterSpacing: 1,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  seta: {
    top: 275,
    width: 27,
    height: 28,
  },
  botoChild: {
    backgroundColor: Color.colorDodgerblue_200,
    height: 23,
    width: 84,
    position: "absolute",
  },
  enviar1: {
    color: Color.colorBlack,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    letterSpacing: 1,
  },
  enviar: {
    left: 20,
    top: 6,
    position: "absolute",
  },
  boto: {
    top: 252,
    left: 130,
  },
  termosChild: {
    backgroundColor: Color.colorSilver_200,
    width: 332,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  termosItem: {
    top: 52,
    borderTopWidth: 2,
    width: 334,
    height: 2,
    borderColor: Color.colorDodgerblue_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  cliqueEmAceito: {
    top: 14,
    left: 18,
    fontSize: FontSize.size_2xs,
    lineHeight: 13,
    textAlign: "center",
    width: 296,
    height: 47,
    color: Color.colorGray_200,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  permitoQueEsse: {
    color: Color.colorGray_200,
  },
  text: {
    color: Color.colorRed,
  },
  permitoQueEsseContainer: {
    top: 79,
    width: 276,
  },
  enviarEssasCredenciais: {
    width: 324,
    top: 126,
    color: Color.colorGray_200,
  },
  opo01: {
    top: 81,
  },
  opo02: {
    top: 126,
  },
  termos: {
    top: 44,
    left: 6,
    width: 374,
  },
  termoscondies: {
    top: 320,
    left: 10,
    width: 380,
    height: 303,
    position: "absolute",
  },
  fundo: {
    backgroundColor: Color.colorDodgerblue_300,
    width: 428,
    height: 287,
    top: 0,
    left: 0,
  },
  eTenhaAssistncia: {
    color: Color.colorGray_300,
  },
  text1: {
    color: Color.typographyText1,
  },
  subtitulo: {
    left: 68,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    width: 241,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
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
  titulo: {
    top: 49,
    left: 67,
    fontSize: FontSize.size_6xl,
    letterSpacing: 2.5,
    lineHeight: 30,
    color: Color.colorWhite,
    position: "absolute",
  },
  img02Icon: {
    left: 51,
    width: 360,
    height: 187,
  },
  superior: {
    top: -16,
    left: -51,
    width: 462,
    height: 330,
    position: "absolute",
  },
  cadastroMotorista05: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CadastroMotorista;
