import { Input } from "@/components/Input";
import { Label } from "@/components/Label";

export default function FormAdress() {
  return (
    <form className="flex flex-col items-start">
      <Label labelHtmlFor="text">CEP</Label>
      <Input placeholder="ex: (99) 98989-9898" name="cep" />
      <Label labelHtmlFor="name">Endereço</Label>
      <Input placeholder="Digite seu nome completo" name="endereco" />
      <Label labelHtmlFor="text">Município</Label>
      <Input placeholder="ex: (99) 98989-9898" name="municipio" />
      <Label labelHtmlFor="text">Estado</Label>
      <Input placeholder="ex: (99) 98989-9898" name="estado" />
    </form>
  );
}
