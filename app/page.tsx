import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/button/Button";
import { useState } from "react";
import { Form } from "@/components/form/Form";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Salary Predictor: An AI to predict your salary in data science job.",
  description: "a page where you can predict your salary in any data science job"
}

export default function Home() {

  return (
    <>
      <div className="mx-auto relative">
        <Navbar/>
        <main>
          <Form/>
        </main>
        <Footer/>
      </div>
    </>
  );
}
