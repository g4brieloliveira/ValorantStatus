import { View, Text, FlatList } from "react-native";
import React from "react";

const Maps = ({ content }) => {
  const renderItem = (item) => {
    return <Text>{item.item.name}</Text>;
  };

  return (
    <View>
      <FlatList data={content?.maps} renderItem={(item) => renderItem(item)} />
    </View>
  );
};

export default Maps;
