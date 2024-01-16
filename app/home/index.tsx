import { StyleSheet } from "react-native";

import { Badge } from "@/components/Badge";
import { StyledCard } from "@/components/StyledCard";
import { Typography } from "@/components/Typography";
import { StampCard } from "@/ui/StampCard";
import {
  MockStampCards,
  MockStampNodes,
} from "@/ui/StampCard/fixture/mock.data";
import { Link } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
import { Avatar, XStack, YStack } from "tamagui";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Typography type="h3" marginBottom={30}>
          わたしのスタンプカード
        </Typography>
        <Link href="/home/typography">Typography</Link>
        <YStack>
          {MockStampCards.map((card) => (
            <Link
              // @ts-ignore
              href={{
                pathname: "/home/[id]",
                params: {
                  id: card.cardId,
                },
              }}
              asChild
            >
              <StyledCard.Card margin={5} width={300} height={500}>
                <Badge
                  label={card.isCompleted ? "🎉Completed" : "🏃🏻‍♀️Running"}
                  position="absolute"
                  zIndex="$1"
                  top={15}
                  left={16}
                  backgroundColor={
                    card.isCompleted
                      ? "$primary--background"
                      : "$accent--background"
                  }
                />
                <StyledCard.Thumbnail padding={10}>
                  <StampCard
                    currentDay={5}
                    stampNodes={MockStampNodes}
                    fixedWidth={300}
                    fixedHeight={500}
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
                        src={card.joinedUser.avatarUrl}
                      />
                      <Avatar.Fallback backgroundColor="$blue10" />
                    </Avatar>
                    <Avatar circular size="$3" marginLeft={-10}>
                      <Avatar.Image
                        accessibilityLabel={card.createdBy.username}
                        src={card.createdBy.avatarUrl}
                      />
                      <Avatar.Fallback
                        delayMs={600}
                        backgroundColor="$blue10"
                      />
                    </Avatar>
                  </XStack>
                </StyledCard.Footer>
              </StyledCard.Card>
            </Link>
          ))}
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
});
