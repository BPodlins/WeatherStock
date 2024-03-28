'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context with an interface.
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// Create the context with a default undefined value but explicitly state its type.
// This helps TypeScript understand what the context will look like.
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props interface for the AuthProvider component.
interface AuthProviderProps {
    children: ReactNode;
}

// AuthProvider component that provides auth-related state and functions to its children.
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Functions to modify the authentication state.
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    // Provide the isAuthenticated state, and the login and logout functions to children.
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context.
// It ensures the context is used within a provider and provides helpful TypeScript errors.
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
