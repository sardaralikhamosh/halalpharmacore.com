export interface Company {
  name: string;
  country: string;
  description: string;
  specialties: string[];
  website?: string;
}

export interface CountryDirectory {
  country: string;
  flag: string;
  marketInfo: string;
  companies: Company[];
}

export const directoryData: CountryDirectory[] = [
  {
    country: "United Arab Emirates",
    flag: "AE",
    marketInfo:
      "A strategic hub for halal pharmaceuticals in the MENA region, the UAE combines strong regulatory frameworks with world-class logistics infrastructure. The government actively promotes halal certification standards and serves as a gateway for pharmaceutical trade across the Gulf and beyond.",
    companies: [
      {
        name: "Julphar (Gulf Pharmaceutical Industries)",
        country: "United Arab Emirates",
        description:
          "The largest pharmaceutical manufacturer in the UAE and one of the largest in the Middle East, Julphar operates state-of-the-art facilities producing a wide range of generic and branded pharmaceuticals. The company has been expanding its halal-certified product portfolio across multiple therapeutic categories.",
        specialties: ["Generic Medicines", "Branded Pharmaceuticals", "Halal Certification"],
        website: "julphar.net",
      },
      {
        name: "Neopharma",
        country: "United Arab Emirates",
        description:
          "A leading UAE-based pharmaceutical company with advanced manufacturing facilities in Abu Dhabi. Neopharma produces a broad range of products and has been actively pursuing halal compliance across its product lines to serve the growing regional demand.",
        specialties: ["Generic Drugs", "Contract Manufacturing", "Halal Compliance"],
        website: "neopharma.ae",
      },
      {
        name: "Al Hayat Pharmaceuticals",
        country: "United Arab Emirates",
        description:
          "Established in 1982, Al Hayat Pharmaceuticals is one of the leading pharmaceutical and medical companies in the UAE, headquartered in Sharjah. The company distributes a wide portfolio of pharmaceutical products across the Emirates and the wider region.",
        specialties: ["Pharmaceutical Distribution", "Medical Devices", "Regional Supply"],
        website: "alhayatuae.com",
      },
      {
        name: "Acino Pharmaceuticals FZ-LLC",
        country: "United Arab Emirates",
        description:
          "A Swiss-headquartered pharmaceutical company with a strong presence in the UAE, Acino focuses on emerging markets and offers a range of products in cardiovascular, gastrointestinal, and respiratory therapeutic areas with growing halal compliance initiatives.",
        specialties: ["Cardiovascular", "Gastrointestinal", "Respiratory"],
        website: "acino.com",
      },
    ],
  },
  {
    country: "Malaysia",
    flag: "MY",
    marketInfo:
      "Malaysia is the global pioneer and leader in halal pharmaceutical standards, having established the world's first halal pharmaceutical standard (MS 2424). With strong government backing through the Halal Development Corporation (HDC), Malaysia aims to boost its halal pharmaceutical output to US$5.9 billion by 2030.",
    companies: [
      {
        name: "Duopharma Biotech Berhad",
        country: "Malaysia",
        description:
          "Duopharma is at the forefront of the halal pharmaceutical industry in Malaysia. The company has obtained halal certification for a wide range of its products, including antibiotics, analgesics, and other prescription medicines. It is the leading halal pharmaceutical manufacturer in Southeast Asia with a strong export presence.",
        specialties: ["Antibiotics", "Analgesics", "Prescription Medicines", "Halal-Certified"],
        website: "duopharmabiotech.com",
      },
      {
        name: "Pharmaniaga Berhad",
        country: "Malaysia",
        description:
          "A major Malaysian pharmaceutical company and the country's largest pharmaceutical manufacturer. Pharmaniaga has been actively pursuing halal certification for its products and operates one of the most advanced pharmaceutical manufacturing facilities in the region.",
        specialties: ["Generic Medicines", "Halal Manufacturing", "Government Supply"],
        website: "pharmaniaga.com",
      },
    ],
  },
  {
    country: "Indonesia",
    flag: "ID",
    marketInfo:
      "Indonesia has the largest Muslim population globally and mandates halal certification for pharmaceuticals. The Indonesian Ulema Council (MUI) oversees certification, making it one of the most important and strictly regulated halal pharmaceutical markets in the world.",
    companies: [
      {
        name: "Etana Biotechnologies Indonesia",
        country: "Indonesia",
        description:
          "Etana is an emerging producer of high-quality, affordable and innovative biopharmaceuticals to treat a range of metabolic, autoimmune and other major life-threatening diseases, including cancer. Its facilities have the capability to produce biological therapeutics with halal certification from the Indonesian Ulema Council (MUI).",
        specialties: ["Biopharmaceuticals", "Biosimilars", "Cancer Therapeutics", "MUI Halal Certified"],
        website: "etanabiotech.com",
      },
      {
        name: "Kalbe Farma",
        country: "Indonesia",
        description:
          "One of the largest pharmaceutical companies in Southeast Asia, Kalbe Farma has been progressively adopting halal standards across its extensive product portfolio. The company operates across prescription drugs, consumer health, and nutrition divisions.",
        specialties: ["Prescription Drugs", "Consumer Health", "Nutrition", "Halal Initiatives"],
        website: "kalbe.co.id",
      },
    ],
  },
  {
    country: "Turkey",
    flag: "TR",
    marketInfo:
      "Turkey has a well-established pharmaceutical industry and serves as a bridge between European and Middle Eastern markets. The country's pharmaceutical sector benefits from strong manufacturing capabilities and increasing focus on halal compliance for export markets.",
    companies: [
      {
        name: "Abdi Ibrahim",
        country: "Turkey",
        description:
          "Abdi Ibrahim has been the leader of Turkey's pharmaceutical industry since 2002. The company operates in 16 countries outside Turkey, with exports to over 60 countries. It has been actively pursuing halal certification for its products to serve Muslim-majority markets globally.",
        specialties: ["Generic Pharmaceuticals", "Export to 60+ Countries", "Halal Certification"],
        website: "abdiibrahim.com.tr",
      },
      {
        name: "Bilim Pharmaceuticals",
        country: "Turkey",
        description:
          "A major Turkish pharmaceutical manufacturer with a strong focus on research and development. Bilim produces a wide range of pharmaceutical products and has been expanding its halal-compliant product lines for both domestic and international markets.",
        specialties: ["R&D Focused", "Generic Drugs", "Halal-Compliant Lines"],
        website: "bilim.com.tr",
      },
    ],
  },
  {
    country: "Iran",
    flag: "IR",
    marketInfo:
      "Iran has a rapidly growing pharmaceutical manufacturing sector with significant expertise in biopharmaceuticals. The country's pharmaceutical industry has developed considerable domestic capability in producing biosimilars and recombinant proteins.",
    companies: [
      {
        name: "CinnaGen",
        country: "Iran",
        description:
          "CinnaGen is an Iran-based biopharmaceutical company that manufactured biosimilar drugs, laboratory diagnostic reagents for in vitro use, and recombinant proteins. The company is a major player in the region's biopharmaceutical sector with significant export activities.",
        specialties: ["Biosimilars", "Diagnostic Reagents", "Recombinant Proteins"],
        website: "cinnagen.com",
      },
    ],
  },
  {
    country: "Saudi Arabia",
    flag: "SA",
    marketInfo:
      "Saudi Arabia is a top OIC pharmaceutical importer positioned for a major market role with significant growth potential. The Saudi Food and Drug Authority (SFDA) has been strengthening halal pharmaceutical regulations, creating substantial opportunities for halal-certified manufacturers.",
    companies: [
      {
        name: "Tabuk Pharmaceuticals",
        country: "Saudi Arabia",
        description:
          "One of the largest Saudi pharmaceutical companies, Tabuk Pharmaceuticals manufactures and distributes a wide range of pharmaceutical products. The company has been expanding its halal-certified product portfolio and has a growing international presence.",
        specialties: ["Generic Medicines", "Halal Portfolio", "International Export"],
        website: "tabuk.com.sa",
      },
      {
        name: "Spimaco (Saudi Pharmaceutical Industries & Medical Appliances Corporation)",
        country: "Saudi Arabia",
        description:
          "A leading Saudi pharmaceutical manufacturer producing a broad range of pharmaceutical products. Spimaco has been actively working toward halal compliance across its manufacturing processes and product lines.",
        specialties: ["Pharmaceutical Manufacturing", "Medical Appliances", "Halal Compliance"],
        website: "spimaco.com.sa",
      },
    ],
  },
];
