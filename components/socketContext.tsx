// import { createContext, useContext, useEffect, useRef, ReactNode } from "react";
// import io, { Socket as IOClientSocket } from "socket.io-client";

// Define the context type
// interface SocketContextType {
//   socket: IOClientSocket | null;
// }

// const SocketContext = createContext<SocketContextType | undefined>(undefined);

// export const useSocket = () => {
//   const context = useContext(SocketContext);
//   if (context === undefined) {
//     throw new Error("useSocket must be used within a SocketProvider");
//   }
//   return context.socket;
// };

// export const SocketProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const socket = useRef<IOClientSocket | null>(null);

//   useEffect(() => {
//     // Initialize the socket connection
//     if (!socket.current) {
//       socket.current = io("http://localhost:5000", {
//         withCredentials: true,
//         // Additional configuration can go here
//       });

//       socket.current.on("connect", () => {
//         console.log("Connected to WebSocket server");
//       });

//       socket.current.on("disconnect", () => {
//         console.log("Disconnected from WebSocket server");
//       });
//     }else
//       socket.current.connect();

//     // Clean up on unmount
//     // return () => {
//     //   if (socket.current) {
//     //     socket.current.disconnect();
//     //   }
//     // };
//   }, []);
//   return (
//     <SocketContext.Provider value={{ socket: socket.current }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };
"use client";
import { useQueryClient } from "@tanstack/react-query";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { useCookies } from "next-client-cookies";
// Define the context type
type SocketContextType = {
  socket: Socket | null;
  isConnected: boolean;
};

// Create the context with an initial undefined state
const SocketContext = createContext<SocketContextType | undefined>(undefined);

// The URL of your Socket.IO server
const SOCKET_URL = "http://localhost:5000"; // Replace with your actual server URL
interface MyComponentProps {
  children: React.ReactNode;
}
export const SocketProvider: React.FC<MyComponentProps> = ({
  children,
}: any) => {
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchCookie = async () => {
      const response = await fetch("/app/api/");
      const data = await response.json();
      if (data) localStorage.setItem("islogged", "true");
    };
    fetchCookie();
    if (
      localStorage.getItem("islogged") !== null &&
      localStorage.getItem("islogged") !== undefined
    ) {
      socketRef.current = io(SOCKET_URL, {
        transports: ["websocket"], // Use WebSocket for transport
        withCredentials: true, // Send cookies
      });
    }

    if (socketRef.current) {
      socketRef.current.on("connect", () => {
        setIsConnected(true);
        console.log("Socket.IO connection established");
      });

      socketRef.current.on("disconnect", () => {
        setIsConnected(false);
        console.log("Socket.IO connection disconnected");
      });

      if (socketRef.current.listeners("refetchProdut").length === 0) {
        socketRef.current.on("refetchProdut", () => {
          queryClient.invalidateQueries({ queryKey: ["articles"] });
        });
      }
    }
    // Cleanup on unmount
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook to use the Socket.IO context
export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};
