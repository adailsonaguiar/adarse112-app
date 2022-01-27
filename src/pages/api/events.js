const eventsBanners = [
  {
    title: "Responsabilidade Social",
    info: "Nesta segunda feira dia 24/01/2021 nosso templo foi completamente sanitizado para que nossos membros possam desfrutar das instalações com mais segurança.",
    image:
      "https://raw.githubusercontent.com/adailsonaguiar/adarse112assets/master/events/saniti3.jpeg",
  },
  {
    title: "Responsabilidade Social",
    info: "Nesta segunda feira dia 24/01/2021 nosso templo foi completamente sanitizado para que nossos membros possam desfrutar das instalações com mais segurança.",
    image:
      "https://raw.githubusercontent.com/adailsonaguiar/adarse112assets/master/events/saniti3.jpeg",
  },
];
export default function handler(req, res) {
  res.status(200).json(eventsBanners);
}
