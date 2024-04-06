import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import Loading from "@/components/Loading";
import viaCep from "@/server/api-viacep";
import { useState } from "react";
import { ChangeEvent } from "react";
import Image from "next/image";

export default function FormAdress() {
  const [formValues, setFormValues] = useState({
    cep: "",
    endereco: "",
    municipio: "",
    estado: "",
  });
  const [isLoad, setIsLoad] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isNotChecked, setIsNotChecked] = useState(false);

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const valueCep = value.replace(/\D/g, "");

    if (name === "cep" && value.length < 8) {
      setIsNotChecked(false);
      setIsChecked(false);
    }

    if (name === "cep" && valueCep.length === 8) {
      setIsLoad(true);
      try {
        const data = await viaCep(valueCep);
        setFormValues({
          cep: valueCep,
          endereco: data.endereco,
          municipio: data.municipio,
          estado: data.estado,
        });

        if (!data.endereco) {
          setIsNotChecked(true);
        } else {
          setIsChecked(true);
        }

        localStorage.setItem(
          "formValues",
          JSON.stringify({
            cep: valueCep,
            endereco: data.endereco,
            municipio: data.municipio,
            estado: data.estado,
          })
        );
      } catch (error) {
        console.error("Erro ao obter dados do CEP:", error);
      }
    } else {
      setFormValues({ ...formValues, [name]: valueCep });

      localStorage.setItem(
        "formValues",
        JSON.stringify({
          ...formValues,
          [name]: valueCep,
        })
      );
    }
    setIsLoad(false);
  };

  return (
    <form className="flex flex-col items-start h-[48vh] overflow-y-auto gap-3 pb-6">
      <Label labelHtmlFor="text">CEP</Label>
      <div className="relative w-full">
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
      <div className="relative w-full">
        <Input
          placeholder="Digite aqui o seu endereço"
          onChange={handleChangeInput}
          name="endereco"
          value={formValues.endereco}
        />
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
      <Label labelHtmlFor="text">Município</Label>
      <div className="relative w-full">
        <Input
          placeholder="Digite aqui o nome da sua cidade"
          onChange={handleChangeInput}
          name="municipio"
          value={formValues.municipio}
        />
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
      <Label labelHtmlFor="text">Estado</Label>
      <div className="relative w-full">
        <Input
          placeholder="Digite aqui o Estado onde mora"
          onChange={handleChangeInput}
          name="estado"
          value={formValues.estado}
        />
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
    </form>
  );
}
