import { Stack } from "expo-router";
import React, { useEffect } from "react";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import { createUsersTable } from "../database/migrations";
import { createInitialUser } from "../database/seeds";

export default function RootLayout() {
  useEffect(() => {
    createUsersTable();
	createInitialUser();
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}