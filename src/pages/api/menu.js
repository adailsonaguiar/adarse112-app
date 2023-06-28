// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const menuLinks = [
    { label: "Cultos", link: "#cultos" },
    { label: "Ofertas", link: "#dizimos" },
    { label: "Fotos", link: "#dizimos" },
    { label: "Mapa", link: "#onde-estamos" },
    { label: "Bíblia", link: "#billboard" },
    { label: "Rádio paz", link: "/radio" },
  ];
  res.status(200).json(menuLinks);
}
