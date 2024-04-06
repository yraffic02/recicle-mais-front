import { Input } from "@/components/Input";
import { Label } from "@/components/Label";

export default function FormContact() {
  return (
    <form className="flex flex-col items-start gap-3 mb-3 pb-20">
      <Label labelHtmlFor="name">Nome Completo</Label>
      <Input placeholder="Digite seu nome completo" name="nome" />
      <Label labelHtmlFor="text">Número de Celular</Label>
      <Input placeholder="ex: (99) 98989-9898" name="celular" />
    </form>
  );
}
