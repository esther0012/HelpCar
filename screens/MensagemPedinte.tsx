import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MensagemPedinte = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mensagemPedinte}>
      <View style={styles.fundo}>
        <View style={[styles.fundoChild, styles.fundoPosition]} />
        <View style={[styles.fundoItem, styles.fundoPosition]} />
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
        <Text style={styles.claudioBernardo}>CLAUDIO BERNARDO</Text>
        <Image
          style={[styles.informaesBtndireitoIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/informaes-btndireito1.png")}
        />
      </View>
      <Image
        style={[styles.emojisIcon, styles.emojisIconLayout]}
        contentFit="cover"
        source={require("../assets/emojis.png")}
      />
      <View style={styles.mensagem}>
        <Image
          style={[styles.caixaMsg01Icon, styles.caixaIconLayout]}
          contentFit="cover"
          source={require("../assets/caixa-msg-01.png")}
        />
        <Image
          style={[styles.caixaMsg02Icon, styles.caixaIconLayout]}
          contentFit="cover"
          source={require("../assets/caixa-msg-02.png")}
        />
        <Image
          style={[styles.caixaMsg03Icon, styles.caixaIconLayout]}
          contentFit="cover"
          source={require("../assets/caixa-msg-03.png")}
        />
        <View style={[styles.caixaDgtMsg, styles.emojisIconLayout]} />
        <Text style={[styles.olAlex, styles.olAlexTypo]}>Olá, Alex!</Text>
        <Text
          style={[styles.chegoEm5, styles.olAlexTypo]}
        >{`Chego em 5 minutos, preparei o cabo de chupeta para você!
Aguarde no mesmo local em que pediu a viagem.`}</Text>
        <Text style={[styles.boaTardeEstou, styles.boaTardeEstouTypo]}>
          Boa tarde, estou no aguardo.
        </Text>
        <Text style={[styles.digiteUmaMensagem, styles.boaTardeEstouTypo]}>
          Digite uma mensagem
        </Text>
        <Image
          style={[styles.fotoPerfilIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/foto-perfil1.png")}
        />
        <Image
          style={styles.btnEnviarIcon}
          contentFit="cover"
          source={require("../assets/btn-enviar.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fundoPosition: {
    backgroundColor: Color.colorWhite,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  emojisIconLayout: {
    width: 300,
    position: "absolute",
  },
  caixaIconLayout: {
    width: 216,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  olAlexTypo: {
    color: Color.colorGray_600,
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  boaTardeEstouTypo: {
    width: 208,
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  fundoChild: {
    borderRadius: 50,
    height: 488,
  },
  fundoItem: {
    height: 136,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  seta: {
    left: 9,
    top: 13,
    width: 25,
    height: 25,
    position: "absolute",
  },
  claudioBernardo: {
    top: 14,
    left: 48,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    color: Color.colorBlack,
    width: 211,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  informaesBtndireitoIcon: {
    top: 8,
    left: 320,
    overflow: "hidden",
  },
  fundo: {
    height: 488,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  emojisIcon: {
    top: 501,
    left: 30,
    height: 119,
  },
  caixaMsg01Icon: {
    height: 42,
    left: 34,
    width: 216,
    borderRadius: Border.br_lg,
    top: 0,
  },
  caixaMsg02Icon: {
    top: 59,
    height: 117,
    left: 34,
    width: 216,
    borderRadius: Border.br_lg,
  },
  caixaMsg03Icon: {
    top: 202,
    left: 108,
    height: 44,
  },
  caixaDgtMsg: {
    top: 347,
    left: 24,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSilver_200,
    height: 35,
  },
  olAlex: {
    top: 12,
    left: 41,
    width: 178,
  },
  chegoEm5: {
    top: 73,
    width: 209,
    left: 39,
  },
  boaTardeEstou: {
    top: 215,
    left: 116,
    color: Color.colorWhite,
  },
  digiteUmaMensagem: {
    top: 356,
    color: "#beb9b9",
    left: 39,
  },
  fotoPerfilIcon: {
    top: 141,
    borderRadius: Border.br_473xl,
    left: 0,
    width: 30,
  },
  btnEnviarIcon: {
    top: 355,
    left: 286,
    width: 20,
    height: 20,
    position: "absolute",
  },
  mensagem: {
    top: 78,
    left: 6,
    width: 324,
    height: 382,
    position: "absolute",
  },
  mensagemPedinte: {
    backgroundColor: Color.colorDodgerblue_100,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default MensagemPedinte;
