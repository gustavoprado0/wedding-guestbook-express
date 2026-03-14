import ornament from "@/assets/leaf-ornament.jpeg";

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center py-6 ${className}`}>
    <img src={ornament} alt="Ornamento folhas" className="w-40 md:w-56 opacity-70" />
  </div>
);

export default Ornament;
