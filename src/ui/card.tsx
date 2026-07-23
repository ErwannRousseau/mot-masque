import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";

import { colors, radii, spacing } from "@/constants/theme";

type CardProps = ViewProps & {
  children: ReactNode;
  tone?: "default" | "accent" | "violet" | "success" | "danger" | "dark";
};

export function Card({ children, tone = "default", style, ...props }: CardProps) {
  return (
    <View style={[styles.base, toneStyles[tone], style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    padding: spacing.lg,
    borderRadius: radii.large,
    borderCurve: "continuous",
    borderWidth: 2,
    borderColor: colors.dark,
    gap: spacing.md,
  },
});

const toneStyles = StyleSheet.create({
  default: {
    backgroundColor: colors.surface,
  },
  accent: {
    backgroundColor: colors.accent,
  },
  violet: {
    backgroundColor: colors.violet,
  },
  success: {
    backgroundColor: colors.successSoft,
  },
  danger: {
    backgroundColor: colors.dangerSoft,
  },
  dark: {
    backgroundColor: "#23213D",
    borderColor: colors.violet,
  },
});
