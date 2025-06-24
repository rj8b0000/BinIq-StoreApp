// src/store/index.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const useStore = create(
  persist(
    (set) => ({
      isFirstOpen: true,
      setFirstOpen: () => {
        console.log("Setting isFirstOpen to false");
        set({ isFirstOpen: false });
      },
      user: null,
      login: async ({ email, password }) => {
        try {
          console.log(
            "Login API call:",
            `https://binq.paywin24.com/api/sign-in`
          );
          const response = await axios.post(
            `https://binq.paywin24.com/api/sign-in`,
            {
              email,
              password,
            }
          );

          const data = response.data;
          console.log("Login response:", data);

          if (!data.success) {
            throw new Error(data.message || "Login failed");
          }

          set({ user: data.user });
          return data;
        } catch (error) {
          console.error("Login error:", error.message);
          throw new Error(
            error.response?.data?.message || error.message || "Login failed"
          );
        }
      },
      forgotPassword: async ({ email }) => {
        try {
          console.log(
            "Forgot Password API call:",
            `https://binq.paywin24.com/api/forget-password`
          );
          const response = await axios.post(
            `https://binq.paywin24.com/api/forget-password`,
            {
              email,
            }
          );

          const data = response.data;
          console.log("Forgot Password response:", data);

          if (data.success) {
            set({ user: data.user });
          }

          return data;
        } catch (error) {
          console.error("Forgot Password error:", error.message);
          throw new Error(
            error.response?.data?.message || error.message || "Request failed"
          );
        }
      },
      logout: () => {
        set({ user: null });
      },
      fetchCategories: async () => {
        try {
          const { user } = useStore.getState();
          if (!user || !user.api_key) {
            throw new Error("User not logged in or API key missing");
          }
          const response = await axios.post(
            `https://binq.paywin24.com/api/get-category`,
            {},
            {
              headers: {
                apiToken: user.api_key,
                "Content-Type": "application/json",
              },
            }
          );

          const data = response.data;
          if (!data.success) {
            throw new Error(data.message || "Failed to fetch categories");
          }

          return data.product_categories.map((cat) => ({
            label: cat.category_name,
            value: cat.id,
          }));
        } catch (error) {
          console.error("Fetch categories error:", error.message);
          if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
          }
          throw error;
        }
      },
      addProduct: async (productData) => {
        try {
          const { user } = useStore.getState();
          if (!user || !user.api_key) {
            throw new Error("User not logged in or API key missing");
          }
          console.log(
            "Adding product:",
            `https://binq.paywin24.com/api/store-product`
          );

          const formData = new FormData();
          formData.append("category_id", productData.category_id);
          formData.append("title", productData.title);
          formData.append("description", productData.description);
          formData.append("price", productData.price);
          formData.append("offer_price", productData.offer_price);
          formData.append("type", productData.type);
          if (productData.pic) {
            formData.append("pic", {
              uri: productData.pic,
              type: "image/jpeg",
              name: `product_image_${Date.now()}.jpg`,
            });
          }

          const response = await axios.post(
            `https://binq.paywin24.com/api/store-product`,
            formData,
            {
              headers: {
                apiToken: user.api_key,
                "Content-Type": "multipart/form-data",
              },
            }
          );

          const data = response.data;
          console.log("Add product response:", data.product);

          if (data.success) {
            await AsyncStorage.setItem(
              "store-details",
              JSON.stringify(data.product)
            );
          }

          return data;
        } catch (error) {
          console.error("Add product error:", error.message);
          if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
          }
          throw error;
        }
      },
      fetchStoreDetails: async () => {
        try {
          const { user } = useStore.getState();
          if (!user || !user.api_key) {
            throw new Error("User not logged in or API key missing");
          }
          console.log("API Key used:", user.api_key);

          const response = await axios.post(
            `https://binq.paywin24.com/api/get-store-details`,
            {},
            {
              headers: {
                apiToken: user.api_key,
                "Content-Type": "application/json",
              },
            }
          );

          const data = response.data;
          console.log(
            "Full Store details response:",
            JSON.stringify(data, null, 2)
          );

          if (!data.success) {
            throw new Error(data.message || "Failed to fetch store details");
          }

          await AsyncStorage.setItem(
            "store-details",
            JSON.stringify(data.store)
          );
          return data.store;
        } catch (error) {
          console.error("Fetch store details error:", error.message);
          if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
          }
          throw error;
        }
      },
      saveStoreDetails: async (storeData) => {
        try {
          const { user } = useStore.getState();
          if (!user || !user.api_key) {
            throw new Error("User not logged in or API key missing");
          }

          console.log(
            "Saving store details:",
            `https://binq.paywin24.com/api/add-store-details`
          );
          const response = await axios.post(
            `https://binq.paywin24.com/api/add-store-details`,
            storeData,
            {
              headers: {
                apiToken: user.api_key,
                "Content-Type": "application/json",
              },
            }
          );

          const data = response.data;
          console.log("Save store details response:", data.message);

          if (data.success) {
            // Update AsyncStorage with the new store object
            await AsyncStorage.setItem(
              "store-details",
              JSON.stringify(data.store)
            );
          }

          return data;
        } catch (error) {
          console.error("Save store details error:", error.message);
          throw error;
        }
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;
