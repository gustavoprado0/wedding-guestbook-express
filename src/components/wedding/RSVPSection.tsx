import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Ornament from "./Ornament";

const RSVPSection = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    attending: "yes",
    adultCount: "1",
    childCount: "0",
    notes: "",
  });

  // Arrays of names for additional adults and children
  const [adultNames, setAdultNames] = useState<string[]>([]);
  const [childNames, setChildNames] = useState<string[]>([]);

  const adultCount = Math.max(1, parseInt(form.adultCount) || 1);
  const childCount = Math.max(0, parseInt(form.childCount) || 0);

  // Sync adultNames array size (adultCount - 1 because first adult = fullName)
  useEffect(() => {
    const extra = Math.max(0, adultCount - 1);
    setAdultNames((prev) => {
      if (prev.length === extra) return prev;
      if (prev.length < extra) return [...prev, ...Array(extra - prev.length).fill("")];
      return prev.slice(0, extra);
    });
  }, [adultCount]);

  // Sync childNames array size
  useEffect(() => {
    setChildNames((prev) => {
      if (prev.length === childCount) return prev;
      if (prev.length < childCount) return [...prev, ...Array(childCount - prev.length).fill("")];
      return prev.slice(0, childCount);
    });
  }, [childCount]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdultName = (index: number, value: string) => {
    setAdultNames((prev) => prev.map((n, i) => (i === index ? value : n)));
  };

  const handleChildName = (index: number, value: string) => {
    setChildNames((prev) => prev.map((n, i) => (i === index ? value : n)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    if (form.attending === "yes") {
      const missingAdult = adultNames.some((n) => !n.trim());
      const missingChild = childNames.some((n) => !n.trim());
      if (missingAdult || missingChild) {
        toast.error("Preencha o nome de todos os convidados.");
        return;
      }
    }

    setLoading(true);

    const allGuests = [
      form.fullName.trim(),
      ...adultNames.map((n) => n.trim()),
    ];
    const allChildren = childNames.map((n) => n.trim());

    const { error } = await supabase.from("rsvps").insert({
      full_name: form.fullName.trim(),
      email: "",
      phone: form.phone.trim(),
      attending: form.attending === "yes",
      adult_count: form.attending === "yes" ? adultCount : 0,
      child_count: form.attending === "yes" ? childCount : 0,
      notes: form.notes.trim() || null,
    });

    if (error) {
      console.error("RSVP error:", error);
      toast.error("Erro ao confirmar presença. Tente novamente.");
    } else {
      toast.success("Presença confirmada com sucesso! 🎉");
      setForm({
        fullName: "",
        phone: "",
        attending: "yes",
        adultCount: "1",
        childCount: "0",
        notes: "",
      });
      setAdultNames([]);
      setChildNames([]);
    }
    setLoading(false);
  };

  const showGuestFields = form.attending === "yes";

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
          {/* Nome completo */}
          <div>
            <Label className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
              Seu nome completo *
            </Label>
            <Input
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="mt-2 bg-background border-border"
              required
            />
          </div>

          {/* WhatsApp */}
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
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Um número para todo o grupo
            </p>
          </div>

          {/* Presença */}
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

          <AnimatePresence>
            {showGuestFields && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 overflow-hidden"
              >
                {/* Contagens */}
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
                      onChange={(e) => handleChange("adultCount", e.target.value)}
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
                      onChange={(e) => handleChange("childCount", e.target.value)}
                      className="mt-2 bg-background border-border"
                    />
                  </div>
                </div>

                {/* Nomes dos adultos adicionais */}
                <AnimatePresence>
                  {adultNames.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
                        Nome dos adultos acompanhantes
                      </p>
                      <AnimatePresence>
                        {adultNames.map((name, i) => (
                          <motion.div
                            key={`adult-${i}`}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-sans font-medium">
                                {i + 2}
                              </span>
                              <Input
                                placeholder={`Nome do adulto ${i + 2}`}
                                value={name}
                                onChange={(e) => handleAdultName(i, e.target.value)}
                                className="bg-background border-border"
                                required
                              />
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Nomes das crianças */}
                <AnimatePresence>
                  {childNames.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground">
                        Nome das crianças
                      </p>
                      <AnimatePresence>
                        {childNames.map((name, i) => (
                          <motion.div
                            key={`child-${i}`}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-sans font-medium">
                                {i + 1}
                              </span>
                              <Input
                                placeholder={`Nome da criança ${i + 1}`}
                                value={name}
                                onChange={(e) => handleChildName(i, e.target.value)}
                                className="bg-background border-border"
                                required
                              />
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Resumo do grupo */}
                {(adultCount > 1 || childCount > 0) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-md border border-border bg-muted/40 px-4 py-3"
                  >
                    <p className="text-xs font-sans text-muted-foreground">
                      Confirmando presença para{" "}
                      <span className="text-foreground font-medium">
                        {adultCount} {adultCount === 1 ? "adulto" : "adultos"}
                      </span>
                      {childCount > 0 && (
                        <>
                          {" "}e{" "}
                          <span className="text-foreground font-medium">
                            {childCount} {childCount === 1 ? "criança" : "crianças"}
                          </span>
                        </>
                      )}
                    </p>
                  </motion.div>
                )}

                {/* Observações */}
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
              </motion.div>
            )}
          </AnimatePresence>

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