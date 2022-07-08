import { StatusBar, Text } from "react-native";
import { getContent } from "./src/services/getContent";
import { useEffect, useState } from "react";
import Maps from "./src/modules/home/Maps";

export default function App() {
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetData = async () => {
    setIsLoading(true);
    const data = await getContent();
    setContent(data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      {isLoading ? <Text>Loading</Text> : <Maps content={content} />}
    </>
  );
}
