import teamALogo from "../../assets/WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";

/** Sample data for the PartnershipList full-screen controller only. */
const partnershipListSample = {
  tournament: "LAHORE SUMMER CUP",
  team: {
    code: "ISU",
    name: "ISLAMABAD UNITED",
    logoUrl: teamALogo,
  },
  partnerships: [
    {
      id: "p1",
      balls: 4,
      left: { name: "RIZWAN", runs: 72, balls: 3 },
      right: { name: "KHAN", runs: 0, balls: 1 },
    },
    {
      id: "p2",
      balls: 1,
      left: { name: "SHAH", runs: 0, balls: 1 },
      right: { name: "SHAH", runs: 0, balls: 0 },
    },
  ],
  summary: {
    extras: 1,
    overs: "0.5",
    score: "73-1",
  },
};

export default partnershipListSample;
