import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  visible: boolean;
  initialData: {
    city: string;
    district: string;
    state: string;
    pincode: string;
  };
  onClose: () => void;
  onSave: (data: any) => void;
}

export default function ManualLocationModal({
  visible,
  onClose,
  onSave,
  initialData,
}: Props) {
  const [form, setForm] = useState(initialData);

  const updateField = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        style={styles.fullScreenWrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.fullModal}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeBtn}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Set Your Location</Text>
            <View style={{ width: 30 }} />
          </View>

          <View style={styles.formContainer}>
            <TextInput
              placeholder="City"
              style={styles.input}
              value={form.city}
              onChangeText={(t) => updateField("city", t)}
            />

            <TextInput
              placeholder="District"
              style={styles.input}
              value={form.district}
              onChangeText={(t) => updateField("district", t)}
            />

            <TextInput
              placeholder="State"
              style={styles.input}
              value={form.state}
              onChangeText={(t) => updateField("state", t)}
            />

            <TextInput
              placeholder="Pincode"
              style={styles.input}
              keyboardType="numeric"
              maxLength={6}
              value={form.pincode}
              onChangeText={(t) =>
                updateField("pincode", t.replace(/[^0-9]/g, ""))
              }
            />

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => {
                onSave(form);
                onClose();
              }}
            >
              <Text style={styles.saveBtnText}>Save Location</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fullScreenWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  fullModal: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 80,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  closeBtn: {
    fontSize: 22,
    fontWeight: "700",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  formContainer: {
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 15,
  },

  saveBtn: {
    backgroundColor: "#2D6AE7",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  saveBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  cancelBtn: {
    marginTop: 12,
    alignItems: "center",
  },

  cancelText: {
    fontSize: 15,
    color: "#555",
  },
});
