import React, { useState } from "react";
import { Modal, ModalProps, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { View, ViewProps, XStack, YStack } from "tamagui";
import { Typography } from "../Typography/Typography";

type StyledAlertDialogProps = {
  children?: React.ReactNode;
  triggerButton?: (toggleModal: () => void) => React.ReactNode;
  cancelButton?: (untoggleModal: () => void) => React.ReactNode;
  actionButton?: (action: () => void) => React.ReactNode;
  description?: string;
  modalProps?: ModalProps;
} & ViewProps;
export function StyledAlertDialog({
  children,
  triggerButton,
  cancelButton,
  actionButton,
  description,
  modalProps,
  ...props
}: StyledAlertDialogProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const untoggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const someAction = () => {
    console.log("some action");
  };
  const TriggerButton = triggerButton ? triggerButton(toggleModal) : "";
  const CancelButton = cancelButton ? cancelButton(untoggleModal) : "";
  const ActionButton = actionButton ? actionButton(someAction) : "";
  return (
    <View style={styles.centeredView} zIndex="$1" position="relative">
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        {...modalProps}
      >
        <View
          style={styles.centeredView}
          backgroundColor={"rgba(255,255,255,0.9)"}
          {...props}
        >
          <View style={styles.modalView}>
            <YStack space={s(15)} width="100%">
              <Typography type="large" whiteSpace="pre-wrap" textAlign="center">
                {description}
              </Typography>
              {children}
              <XStack space={s(30)} justifyContent="center">
                {CancelButton}
                {ActionButton}
              </XStack>
            </YStack>
          </View>
        </View>
      </Modal>
      {TriggerButton}
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: s(30),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
    borderRightColor: "rgba(3, 10, 18, 0.81)",
    borderLeftColor: "rgba(3, 10, 18, 0.81)",
    borderBlockColor: "rgba(3, 10, 18, 0.81)",
    borderStyle: "solid",
    maxWidth: s(300),
  },
});
