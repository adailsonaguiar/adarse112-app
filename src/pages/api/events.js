const eventsBanners = [
  {
    title: "Culto Profético",
    info: "Deus tem um encontro com você nos primeiros finais de semana do ano. Participe e receba uma palavra dos céus para o seu coração.",
    image:
      "https://raw.githubusercontent.com/adailsonaguiar/adarse112assets/master/events/culto-profetico.jpeg",
  },
  {
    title: "Culto Profético",
    info: "Deus tem um encontro com você nos primeiros finais de semana do ano. Participe e receba uma palavra dos céus para o seu coração.",
    image:
      "https://raw.githubusercontent.com/adailsonaguiar/adarse112assets/master/events/culto-profetico.jpeg",
  },
];
export default function handler(req, res) {
  res.status(200).json(eventsBanners);
}
