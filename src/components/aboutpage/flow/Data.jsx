import {
  MdHomeWork,
  MdOutlineFindInPage,
  MdHandshake,
  MdMapsHomeWork,
  MdInsertDriveFile,
  MdThumbUp,
} from "react-icons/md";

export const services = [
  {
    id: 1,
    title: "Initial Consultation",
    content:
      "Understand your needs, budget, and preferred locations for buying or selling.",
    icon: <MdHandshake />,
  },
  {
    id: 2,
    title: "Site Visit & Property Match",
    content:
      "We shortlist and guide you through properties that match your expectations.",
    icon: <MdHomeWork />,
  },
  {
    id: 3,
    title: "Market Research",
    content:
      "Detailed market insights to ensure you were investing wisely and safely.",
    icon: <MdOutlineFindInPage />,
  },
  {
    id: 4,
    title: "Documentation Support",
    content:
      "We handle legal checks, ownership verification, and document preparation.",
    icon: <MdInsertDriveFile />,
  },
  {
    id: 5,
    title: "Negotiation & Deal Finalization",
    content:
      "Our team supports transparent pricing discussions and closes the deal smoothly.",
    icon: <MdMapsHomeWork />,
  },
  {
    id: 6,
    title: "Post-Sale Assistance",
    content:
      "From registration to interior leads — we’re with you even after the handover.",
    icon: <MdThumbUp />,
  },
];
