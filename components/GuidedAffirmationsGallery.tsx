import { Image, View, Text, FlatList, Pressable } from "react-native";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";
import "../global.css";

interface GuidedAffirmationsGalleryProps {
  title: string;
  products: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  products,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={products}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-10">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
