import { Badge } from "@/components/Badge";
import { AvatarSkeleton } from "@/components/Skeleton/Skeleton";
import { StyledCard } from "@/components/StyledCard";
import { Typography } from "@/components/Typography";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { calculateDaysFromToday } from "@/libs/date";
import { StampCard as StampCardType } from "@/types/StampCard";
import { StampCard } from "@/ui/StampCard";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { s, vs } from "react-native-size-matters";
import { Avatar, XStack } from "tamagui";

export type StampCardListProps = {
  query?: string;
  cards: StampCardType[];
};
export const StampCardList = function StampCardList({
  query,
  cards,
}: StampCardListProps) {
  const [data, setData] = useState<Array<StampCardType>>([]);
  const user = useAppSelector((state) => state.auth.user);
  assertNonNullable(user);

  useEffect(() => {
    const extractedCards = cards
      .filter(
        (item) => item.title.includes(query ?? "") && item.isDeleted === false,
      )
      .sort((a, b) => {
        return a.isCompleted < b.isCompleted ? 1 : -1;
      })
      .sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      });

    setData(extractedCards);
  }, [cards, query]);

  if (data.length === 0) {
    return <Typography>該当するカードは見つかりませんでした</Typography>;
  }
  return data.map((card) => {
    return (
      <Link
        // @ts-ignore
        href={{
          pathname: "/home/[id]",
          params: {
            id: card.id,
          },
        }}
        asChild
      >
        <StyledCard.Card
          margin={s(5)}
          width={s(300)}
          height={vs(500)}
          imageSource={{ uri: card.backgroundUrl }}
        >
          <Badge
            label={card.isCompleted ? "🎉Completed" : "🏃🏻‍♀️Running"}
            position="absolute"
            zIndex="$1"
            top={15}
            left={16}
            backgroundColor={
              card.isCompleted ? "$primary--background" : "$accent--background"
            }
          />
          <StyledCard.Thumbnail>
            <StampCard
              currentDay={calculateDaysFromToday(
                card.startDate.toString().split("T")[0],
              )}
              stampNodes={card.stampNodes}
              letterId={card.letterId}
              fixedWidth={s(300)}
              fixedHeight={vs(500)}
            />
          </StyledCard.Thumbnail>
          <StyledCard.Footer>
            <Typography type="large">{card.title}</Typography>
            <Typography type="ui" color="$text--subtle">
              2人がこのラリーに参加しています
            </Typography>
            <XStack>
              <Avatar circular size="$3">
                <Avatar.Image
                  accessibilityLabel={card.joinedUser.username}
                  src={
                    card.joinedUser.avatarUrl === "https://stampy.com"
                      ? require("../../../assets/images/stampy-icon.png")
                      : card.joinedUser.avatarUrl === ""
                        ? require("../../../assets/images/linerbg.png")
                        : card.joinedUser.avatarUrl
                  }
                />
                <Avatar.Fallback>
                  <AvatarSkeleton />
                </Avatar.Fallback>
              </Avatar>
              <Avatar circular size="$3" marginLeft={s(-10)}>
                <Avatar.Image
                  accessibilityLabel={card.createdBy.username}
                  src={
                    user.avatarUrl === ""
                      ? require("../../../assets/images/linerbg.png")
                      : user.avatarUrl
                  }
                />
                <Avatar.Fallback>
                  <AvatarSkeleton />
                </Avatar.Fallback>
              </Avatar>
            </XStack>
          </StyledCard.Footer>
        </StyledCard.Card>
      </Link>
    );
  });
};
