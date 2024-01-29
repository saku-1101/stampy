import { SimpleList } from "@/components/SimpleList";
import { StyledButton } from "@/components/StyledButton";
import { Typography } from "@/components/Typography";
import {
  AccountSettingsSchema,
  AccountSettingsType,
} from "@/schema/accountSetting";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useToastController } from "@tamagui/toast";
import { useForm } from "react-hook-form";
import { s, vs } from "react-native-size-matters";
import { Spinner, Square, YStack } from "tamagui";
import { AvatarPicker } from "../AvatarPicker/AvatarPicker";
import { listData } from "./fixture/mock.data";

export const AccountForm = () => {
  const toast = useToastController();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isValid },
    setValue,
  } = useForm<AccountSettingsType>({
    resolver: valibotResolver(AccountSettingsSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = async (data: AccountSettingsType) => {
    console.log(data);
    // save card to server
    // await sleep(1000);
    toast.show("✅ 変更を保存しました");
    // clear submitting state
    reset();
    // 作成したカード一覧へ遷移
    // router.push("/cards");
  };
  return (
    <YStack space={vs(30)} alignItems="center" width="100%">
      <AvatarPicker defaultUrl={listData[0].data} setValue={setValue} />
      <SimpleList
        // exept index 0: avatar
        data={listData.slice(1)}
        control={control}
      />
      <Typography
        type="ui"
        underlined
        color={"$destructive--background"}
        onPress={() => {
          console.log("パスワード変更");
        }}
      >
        パスワード変更
      </Typography>
      {Object.keys(errors).length !== 0 ? (
        <Square
          backgroundColor="rgba(232, 230, 227, 0.52)"
          width="100%"
          padding={s(10)}
          borderRadius={6}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          {errors.avatarUrl && (
            <YStack>
              <Typography type="small" color="$text--destructive">
                {errors.avatarUrl.ref?.name}:
              </Typography>
              <Typography type="small" color="$text--destructive">
                😕{errors.avatarUrl.message}
              </Typography>
            </YStack>
          )}
          {errors.username && (
            <YStack>
              <Typography type="small" color="$text--destructive">
                {errors.username.ref?.name}:
              </Typography>
              <Typography type="small" color="$text--destructive">
                😕{errors.username.message}
              </Typography>
            </YStack>
          )}
          {errors.email && (
            <YStack>
              <Typography type="small" color="$text--destructive">
                {errors.email.ref?.name}:
              </Typography>
              <Typography type="small" color="$text--destructive">
                😕{errors.email.message}
              </Typography>
            </YStack>
          )}
        </Square>
      ) : (
        <></>
      )}

      <StyledButton
        onPress={handleSubmit(onSubmit)}
        icon={
          isSubmitting || isSubmitted
            ? () => <Spinner size="small" color={"$secondary--background"} />
            : undefined
        }
        type={!isValid ? "disabled" : "primary"}
        disabled={!isValid || isSubmitting}
      >
        <Typography>変更を保存</Typography>
      </StyledButton>
    </YStack>
  );
};
