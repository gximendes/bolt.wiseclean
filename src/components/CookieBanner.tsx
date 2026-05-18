import { useEffect, useState } from "react";

const STORAGE_KEY = "wiseclean_cookies_choice";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Show after a slight delay so it doesn't compete with terms gate
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (choice: "all" | "essential") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, date: new Date().toISOString() })
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[90] p-3 sm:p-4"
    >
      <div
        className="mx-auto max-w-4xl rounded-lg shadow-lg flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3"
        style={{
          background: "#1C2A36",
          color: "#F4EFE9",
          border: "1px solid rgba(201,162,74,0.4)",
        }}
      >
        <p className="font-body text-xs sm:text-sm leading-relaxed flex-1">
          🍪 Usamos cookies essenciais para o funcionamento do site. Pode aceitar cookies de
          análise opcionais para nos ajudar a melhorar.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => save("essential")}
            className="px-3 py-2 rounded-md text-xs sm:text-sm font-medium border transition-colors"
            style={{
              background: "transparent",
              color: "#F4EFE9",
              borderColor: "rgba(244,239,233,0.4)",
            }}
          >
            Apenas Essenciais
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="px-3 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors"
            style={{ background: "#C9A24A", color: "#1C2A36" }}
          >
            Aceitar Tudo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
