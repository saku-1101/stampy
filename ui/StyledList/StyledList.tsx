import { StyledAlertDialog } from "@/components/StyledAlertDialog";
import { Typography } from "@/components/Typography/Typography";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { Pressable, SectionList } from "react-native";
import { Separator, YStack } from "tamagui";
import { StampForm } from "../StampForm/StampForm";
import { LinkListItem, TextListItem } from "./ListItem";

type StyledListProps = {
  data: Array<Letter | Notification>;
};
export const StyledList = ({ data }: StyledListProps) => {
  return (
    <SectionList
      sections={[
        {
          title: "未開封",
          data: data.filter((item) => item.read === false),
        },
        {
          title: "開封済み",
          data: data.filter((item) => item.read === true),
        },
      ]}
      renderSectionHeader={({ section }) => (
        <Typography
          width="100%"
          backgroundColor={"$secondary--background"}
          type="medium"
          marginVertical={15}
          padding={6}
        >
          {section.title}
        </Typography>
      )}
      renderItem={({ item }) => resolveListItem(item)}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <Separator
          marginVertical={10}
          borderBottomColor="$stroke--light"
          borderLeftColor="$stroke--light"
          borderRightColor="$stroke--light"
          borderTopColor="$stroke--light"
          borderColor="$stroke--light"
          style={{
            color: "#E2E8F0",
          }}
        />
      )}
    />
  );
};

type RenderItemParams = Letter | Notification;

const resolveListItem = (item: RenderItemParams) => {
  if (item.type === "notification") {
    switch (item.listType) {
      case "link":
        return (
          <LinkListItem
            title={item.title}
            stamp={item.stamp}
            // @ts-ignore
            href={{
              pathname: `${item.hrefPrefix}/[id]`,
              params: {
                id: item.id,
              },
            }}
            // 完走レター一覧の場合は、contentを表示しない
            content={item.hrefPrefix?.startsWith("/letter") ? "" : item.content}
          />
        );
      case "dialog":
        assertNonNullable(item.currentDay);
        return (
          <StyledAlertDialog
            triggerButton={(toggleModal) => (
              <Pressable onPress={toggleModal}>
                <TextListItem title={item.title} content={item.content} />
              </Pressable>
            )}
            cancelButton={(untoggleModal) => (
              <Typography type="small" underlined onPress={untoggleModal}>
                今はやめておく
              </Typography>
            )}
            description={`${item.receiver.username}へ\n${item.currentDay}日目のスタンプ\nを送りますか？`}
          >
            <YStack>
              <StampForm user={item.receiver} currentDay={item.currentDay} />
            </YStack>
          </StyledAlertDialog>
        );
      default:
        return <TextListItem title={item.title} content={item.content} />;
    }
  }
  return (
    <LinkListItem
      title={item.title}
      stamp={item.stamp}
      // @ts-ignore
      href={{
        pathname: `${item.hrefPrefix}/[id]`,
        params: {
          id: item.id,
        },
      }}
      // 完走レター一覧の場合は、contentを表示しない
      content={item.hrefPrefix?.startsWith("/letter") ? "" : item.content}
    />
  );
};
