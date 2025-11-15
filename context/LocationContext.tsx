import useLocation from "@/hooks/useLocation";

import React, { createContext, useContext, useState } from "react";

interface LocationData {
  city: string;
  district: string;
  state: string;
  pincode: string;
}

interface LocationContextType {
  finalLocation: LocationData;
  manualLocation: LocationData;
  setManualLocation: (data: LocationData) => void;
  loading: boolean;
}

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: any) => {
  const { location: autoLocation, loading } = useLocation();

  const [manualLocation, setManualLocation] = useState<LocationData>({
    city: "",
    district: "",
    state: "",
    pincode: "",
  });

  const finalLocation: LocationData = {
    city: manualLocation.city || autoLocation.city,
    district: manualLocation.district || autoLocation.district,
    state: manualLocation.state || autoLocation.state,
    pincode: manualLocation.pincode || autoLocation.pincode,
  };

  return (
    <LocationContext.Provider
      value={{
        finalLocation,
        manualLocation,
        setManualLocation,
        loading,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
