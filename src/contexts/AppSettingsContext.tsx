
import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';

type Settings = {
  locale: string;
  darkMode: boolean;
};

type AppSettingsContextType = {
  sidebarCollapsed: boolean;
  toggleSidebarCollapsed: () => void;
  settings: Settings;
  updateSettings: (settings: Partial<Settings>) => void;
};

const defaultSettings: Settings = {
  locale: 'es-ES',
  darkMode: false,
};

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);

export const AppSettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(
    localStorage.getItem('sidebarCollapsed') === 'true'
  );

  // Initialize settings from localStorage or use defaults
  const [settings, setSettings] = useState<Settings>(() => {
    const savedSettings = localStorage.getItem('appSettings');
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }, [settings]);

  const toggleSidebarCollapsed = useCallback(() => {
    setSidebarCollapsed((prev) => {
      const newValue = !prev;
      localStorage.setItem('sidebarCollapsed', String(newValue));
      return newValue;
    });
  }, []);

  const updateSettings = useCallback((newSettings: Partial<Settings>) => {
    setSettings((prev) => ({
      ...prev,
      ...newSettings,
    }));
  }, []);

  const value = useMemo(
    () => ({
      sidebarCollapsed,
      toggleSidebarCollapsed,
      settings,
      updateSettings,
    }),
    [sidebarCollapsed, toggleSidebarCollapsed, settings, updateSettings]
  );

  return (
    <AppSettingsContext.Provider value={value}>
      {children}
    </AppSettingsContext.Provider>
  );
};

export const useAppSettings = (): AppSettingsContextType => {
  const context = useContext(AppSettingsContext);
  if (context === undefined) {
    throw new Error('useAppSettings must be used within an AppSettingsProvider');
  }
  return context;
};
