import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState({
    city: "",
    district: "",
    state: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Location permission denied");
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = loc.coords;

      const geo = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (geo.length > 0) {
        const place = geo[0];
        setLocation({
          city: place.city || place.subregion || "Unknown",
          district: place.district || "",
          state: place.region || "",
        });
      }

      setLoading(false);
    })();
  }, []);

  return { location, loading };
}
