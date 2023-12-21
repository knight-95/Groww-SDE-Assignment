import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import CartPage from "@/components/CartPage";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <CartPage />
    </>
  );
}
