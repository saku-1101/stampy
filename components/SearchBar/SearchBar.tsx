import { Search } from "@tamagui/lucide-icons";
import { router, useLocalSearchParams } from "expo-router";
import { s, vs } from "react-native-size-matters";
import { Input, Label, View, ViewProps, YStack } from "tamagui";
import { useDebouncedCallback } from "use-debounce";
import { Typography } from "../Typography/Typography";

export const SearchBar = ({
  placeholder,
  ...props
}: { placeholder: string } & ViewProps) => {
  const searchParams = useLocalSearchParams<{ query?: string }>();

  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      console.log("term", term);
      router.setParams({ query: term });
    } else {
      router.setParams({ query: "" });
    }
  }, 300);

  return (
    <View
      width="100%"
      height={vs(40)}
      display="flex"
      flexShrink={0}
      justifyContent="space-between"
      {...props}
    >
      <YStack space={vs(5)} width="100%">
        <Label htmlFor="search" color="$text--dark">
          <Typography>Search</Typography>
        </Label>
        <Search
          style={{
            width: vs(18),
            height: vs(18),
            position: "absolute",
            zIndex: 1,
            top: "60%",
            right: s(10),
          }}
          color="#9CA3AF"
        />
        <Input
          id="search"
          style={{
            width: "100%",
            borderRadius: s(5),
            borderWidth: 1,
            borderColor: "#9CA3AF",
            padding: s(10),
            fontSize: s(14),
            color: "#9CA3AF",
            backgroundColor: "#fff",
          }}
          placeholder={placeholder}
          onChangeText={(term) => handleSearch(term)}
          defaultValue={searchParams.query}
        />
      </YStack>
    </View>
  );
};