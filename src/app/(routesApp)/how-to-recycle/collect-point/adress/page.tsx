"use client";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { Input } from "@/components/Input/index";
import { Label } from "@/components/Label";
import viaCep from "@/server/api-viacep";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Image from "next/image";

export default function Adress() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    cep: "",
    endereco: "",
    municipio: "",
    estado: "",
  });
  const [message, setMessage] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isNotChecked, setIsNotChecked] = useState(false);
  const [typeButtonClass, setTypeButtonClass] = useState(false);

  useEffect(() => {
    const adressStorageJson = localStorage.getItem("formValues");
    if (adressStorageJson !== null) {
      const adressStorage = JSON.parse(adressStorageJson);
      setFormValues({
        cep: adressStorage.cep,
        endereco: adressStorage.endereco,
        municipio: adressStorage.municipio,
        estado: adressStorage.estado,
      });
      setTypeButtonClass(true)
    }
  }, []);
  
  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "cep" && value.length < 8) {
      setIsNotChecked(false);
      setIsChecked(false)
    }

    if (name === "cep" && value.length === 8) {
      setIsLoad(true);
      try {
        const data = await viaCep(value);
        setFormValues({
          cep: value,
          endereco: data.endereco,
          municipio: data.municipio,
          estado: data.estado,
        });

        if (!data.endereco) {
          setIsNotChecked(true);
        } else {
          setIsChecked(true);
          setTypeButtonClass(true)
        }
      } catch (error) {
        console.error("Erro ao obter dados do CEP:", error);
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
    setIsLoad(false);
  };

  const handleSubmit = () => {
    if (
      formValues.cep &&
      formValues.endereco &&
      formValues.municipio &&
      formValues.estado
    ) {
      localStorage.setItem(
        "formValues",
        JSON.stringify({
          cep: formValues.cep,
          endereco: formValues.endereco,
          municipio: formValues.municipio,
          estado: formValues.estado,
        })
      );
      router.push("near-trash");
    } else {
      setMessage("Preencha todos os campos");
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar typeAvatar="sm" />
        </Header>
        <main style={{ height: "calc(100vh - 200px" }}>
          <h1 className="font-workSans font-title text-xl leading-6 mt-2 mb-7">
            Digite seu endereço
          </h1>
          <form className="flex flex-col justify-center gap-4">
            <Label labelHtmlFor="text">CEP</Label>
            <div className="relative">
              <Input
                placeholder="Digite aqui seu CEP"
                onChange={handleChangeInput}
                name="cep"
                value={formValues.cep}
              />
              {isLoad && <Loading />}
              {isNotChecked && (
                <Image
                  className="absolute right-6 top-[13px]"
                  src="/icons/not-checked.svg"
                  height={24}
                  width={24}
                  alt="como reciclar"
                />
              )}
              {isChecked && (
                <Image
                  className="absolute right-6 top-[13px]"
                  src="/icons/checked.svg"
                  height={24}
                  width={24}
                  alt="como reciclar"
                />
              )}
            </div>
            <Label labelHtmlFor="text">Endereço</Label>
            <div className="relative">
              <Input
                placeholder="Digite aqui o seu endereço"
                onChange={handleChangeInput}
                name="endereco"
                value={formValues.endereco}
              />
               {isChecked && (
                <Image
                  className="absolute right-6 top-[13px]"
                  src="/icons/checked.svg"
                  height={24}
                  width={24}
                  alt="como reciclar"
                />
              )}
            </div>
            <Label labelHtmlFor="text">Município</Label>
            <div className="relative">
              <Input
                placeholder="Digite aqui o nome da sua cidade"
                onChange={handleChangeInput}
                name="municipio"
                value={formValues.municipio}
              />
               {isChecked && (
                <Image
                  className="absolute right-6 top-[13px]"
                  src="/icons/checked.svg"
                  height={24}
                  width={24}
                  alt="como reciclar"
                />
              )}
            </div>
            <Label labelHtmlFor="text">Estado</Label>
            <div className="relative">
              <Input
                placeholder="Digite aqui o Estado onde mora"
                onChange={handleChangeInput}
                name="estado"
                value={formValues.estado}
              />
               {isChecked && (
                <Image
                  className="absolute right-6 top-[13px]"
                  src="/icons/checked.svg"
                  height={24}
                  width={24}
                  alt="como reciclar"
                />
              )}
            </div>
          </form>
        </main>
        <div className="flex flex-col justify-between">
          {message && (
            <span className="block text-red-700 text-center mb-1">
              {message}
            </span>
          )}
          <Button onClick={() => handleSubmit()} typeButton={typeButtonClass ? "primary" : "quinary"}>
            Continuar
          </Button>
        </div>
      </div>
    </>
  );
}
