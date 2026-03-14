import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import Ornament from "./Ornament";

const RSVPSection = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    attending: "yes",
    adultCount: 1,
    childCount: 0,
    notes: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    setLoading(true);
    // Simulated submission — will connect to Lovable Cloud later
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Presença confirmada com sucesso! 🎉");
    setForm({
      fullName: "",
      email: "",
      phone: "",
      attending: "yes",
      adultCount: 1,
      childCount: 0,
      notes: "",
    });
    setLoading(false);
  };

  return (
    <section id="confirmacao" className="py-20 md:py-28 bg-wedding-cream">
      <div className="max-w-lg mx-auto px-6">
        <Ornament />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground mb-10 font-light text-center"
        >
          Confirmação de presença
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
              Nome completo *
            </Label>
            <Input
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="mt-2 bg-background border-border"
              required
            />
          </div>

          <div>
            <Label className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
              E-mail *
            </Label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-2 bg-background border-border"
              required
            />
          </div>

          <div>
            <Label className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
              WhatsApp *
            </Label>
            <div className="flex gap-2 mt-2">
              <span className="flex items-center px-3 bg-muted rounded-sm text-sm text-muted-foreground font-sans">
                +55
              </span>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="bg-background border-border"
                required
              />
            </div>
          </div>

          <div>
            <Label className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-3 block">
              Você comparecerá ao evento?
            </Label>
            <RadioGroup
              value={form.attending}
              onValueChange={(v) => handleChange("attending", v)}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="font-sans text-sm cursor-pointer">Sim</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="font-sans text-sm cursor-pointer">Não</Label>
              </div>
            </RadioGroup>
          </div>

          {form.attending === "yes" && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
                    Adultos (incluindo você)
                  </Label>
                  <Input
                    type="number"
                    min={1}
                    max={10}
                    value={form.adultCount}
                    onChange={(e) => handleChange("adultCount", parseInt(e.target.value) || 1)}
                    className="mt-2 bg-background border-border"
                  />
                </div>
                <div>
                  <Label className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
                    Crianças (até 7 anos)
                  </Label>
                  <Input
                    type="number"
                    min={0}
                    max={10}
                    value={form.childCount}
                    onChange={(e) => handleChange("childCount", parseInt(e.target.value) || 0)}
                    className="mt-2 bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
                  Observações
                </Label>
                <Textarea
                  value={form.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  maxLength={250}
                  className="mt-2 bg-background border-border resize-none"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground mt-1 text-right font-sans">
                  {form.notes.length}/250
                </p>
              </div>
            </>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans tracking-widest uppercase text-xs py-6"
          >
            {loading ? "Enviando..." : "Confirmar Presença"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
