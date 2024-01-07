import { StyleSheet } from "react-native";

import { StyledInput } from "@/components/StyledInput";
import EditScreenInfo from "../../components/EditScreenInfo";
import { StyledAlertDialog } from "../../components/StyledAlertDialog/StyledAlertDialog";
import { StyledButton } from "../../components/StyledButton";
import { Text, View } from "../../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <StyledAlertDialog
        triggerButton={<StyledButton>Trigger</StyledButton>}
        // @ts-ignore
        cancelButton={<StyledButton type="secondary">キャンセル</StyledButton>}
        // @ts-ignore
        actionButton={<StyledButton type="primary">はい</StyledButton>}
        // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
        description={`スタンプをもらう\n準備ができましたか？`}
      >
        <StyledInput
          id="message"
          label="ひとことメッセージ"
          defaultValue="お疲れさま！"
        />
      </StyledAlertDialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
