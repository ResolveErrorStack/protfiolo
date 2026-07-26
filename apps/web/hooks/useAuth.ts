"use client";

import { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};


export default function useAuth() {

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(false);


  async function login(
    email: string,
    password: string
  ) {

    setLoading(true);

    try {

      // Future API integration
      // POST /api/auth/login

      const demoUser = {
        id: "1",
        name: "Developer",
        email,
      };


      setUser(demoUser);

      return demoUser;

    } finally {

      setLoading(false);

    }
  }


  function logout() {

    setUser(null);

  }


  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };
      }
