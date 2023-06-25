// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const menuLinks = [
    { label: "CULTOS", link: "#cultos" },
    { label: "OFERTAS", link: "#dizimos" },
    { label: "FOTOS", link: "#dizimos" },
    { label: "MAPA", link: "#onde-estamos" },
    { label: "BÍBLIA", link: "#billboard" },
    { label: "RÁDIO PAZ", link: "/radio" },
  ];
  res.status(200).json(menuLinks)
}
