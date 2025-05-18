// Import images
import corporateSecurityImg from "../assets/corporate-security.jpg";
import controlServicesImg from "../assets/24hour-control.jpg";
import civilSecurityImg from "../assets/civil-security.jpg";

// Import MUI Icons (make sure @mui/icons-material is installed)
import BusinessIcon from "@mui/icons-material/Business";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FactoryIcon from "@mui/icons-material/Factory";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const serviceData = {
  "corporate-security": {
    title: "Corporate Security",
    image: corporateSecurityImg,
    description: [
      "Globalization has changed the structure and pace of corporate life; the saturation of traditional markets is taking companies to more risky areas. New forms of accountability come into existence in the form of Corporates.",
      "Wherever they are operating, Corporates need special attention and Security in the form of:",
    ],
    features: [
      "Personnel Security",
      "Physical Security",
      "Information Security",
      "Corporate Governance",
      "Crime Prevention & Detection",
      "Fraud Deterrence",
    ],
    conclusion:
      "ASF has built a comprehensive platform to deter and minimize corporate risks under one unified security solution.",
    icon: BusinessIcon,
  },
  "24hour-control": {
    title: "24-Hours Control Services",
    image: controlServicesImg,
    description: [
      "24 X 7 Control Services for all types of premises including:",
      " Companies, Factories, Productions Units, Multistory Residential and Commercial Complex, Hospitals, Education Institutes, Corporates, Large Bunglows, Villas, restricted entry zones and all the other establishments where you need only authorized and permissible access only for those who are granted to access. ASF have trained there personnel to identify and grant the permission to access with only your permission. ASF is able to deter the unwanted and stop any type of happenings to reach you. You are guarded by ASF and you only “Sit back & Relax",
    ],
    features: [
      "Trained personnel to identify and grant access permissions",
      "Deterrence of unwanted visitors",
      "Prevention of security incidents",
      "Comprehensive monitoring solutions",
      "Customized access control",
    ],
    conclusion:
      "With ASF's 24/7 control services, you can be assured that only authorized personnel gain access to your premises. You're guarded by ASF - just 'Sit back & Relax'.",
    icon: AccessTimeIcon,
  },
  "civil-security-service": {
    title: "Civil Security Services",
    image: civilSecurityImg,
    description: [
      "The Guards @ ASF are trained enough to bear the responsibility for the Old age persons, children , Women & disabled person to help and guide them up to the level of highest degree of accuracy with the knowledge of the premises and the Society. The Guards @ ASF are trained to rescue and inform the competent administrative/ authorities.",
    ],
    features: [
      "High-degree of accuracy in assistance",
      "Thorough knowledge of premises",
      "Emergency rescue training",
      "Immediate notification of authorities",
      "Community integration",
      "Disability awareness training",
    ],
    conclusion:
      "ASF guards provide compassionate security services while maintaining the highest standards of professional conduct.",
    icon: PeopleIcon,
  },
  "gunman-service": {
    title: "Gunman Services / Armed Security Guard",
    image: corporateSecurityImg,
    description: [
      "We @ ASF are providing the trained, efficient, customized & cost effective Armed Security Guard Services to the Banks and all type of institutions/establishments on the basis of requirement. We are offering a wide array of Armed Security Guards. We offer this Security Guard service according to the client’s needs. Offered array of services is rendered as per quality norms. In addition to this, our professionals have experience that helped them in offering this Security Guard Service in the best possible way.",
    ],
    features: [
      "Trained and experienced personnel",
      "Client-specific customization",
      "Cost-effective and scalable solutions",
      "Strict compliance with quality and safety standards",
    ],
    conclusion:
      "Our professionals bring unmatched efficiency and reliability to safeguard your premises with armed security.",
    icon: SecurityIcon,
  },
  "housekeeping-services": {
    title: "Housekeeping Services",
    image: corporateSecurityImg,
    description: [
      "We are known as one of the Manpower & Service providers of Housekeeping . These services are offered by our well trained housekeeping staff. These services are offered in Organizations, Offices, Corporate houses and all the other Segments. ",
      "We are the provider of one of the most reliable, efficient and effective mechanized housekeeping and cleaning services to various sectors. Our services display a perfect blend of professionalism, innovation and timeliness. To cater flawless facility maintenance services, we consistently put in our efforts to combine the best Services.",
    ],
    features: [
      "Mechanized cleaning solutions",
      "Professionalism and timeliness",
      "Facility maintenance expertise",
      "Customized service packages",
    ],
    conclusion:
      "We consistently strive to offer flawless facility maintenance services with innovation and quality.",
    icon: CleaningServicesIcon,
  },
  "industrial-security-services": {
    title: "Industrial Security Services",
    image: corporateSecurityImg,
    description: [
      "We are engaged in offering our customers Industrial Security Services that are demanded most. Our highly deft Security Guards Service is able to figure out the Security related problems. Our skilled Security Guards verify and analyse all the parameters related to Security Services. To meet the varying desires of our clients, we are engrossed in providing highly reliable Industrial Security Guards Service. Trained under the command of capable personnel. In addition to this, our services are very much cost customised & cost effective. ",
    ],
    features: [
      "Threat identification and analysis",
      "Trained under expert supervision",
      "Reliable and cost-customized service",
      "Security audits and reports",
    ],
    conclusion:
      "We provide secure, flexible and professional industrial security solutions.",
    icon: FactoryIcon,
  },
  "house-maintenance-services": {
    title: "House Maintenance Services",
    image: corporateSecurityImg,
    description: [
      "In rush life, busy and hectic schedule of working and earning for our loved once, we don’t have time to think of the utilities and House hold goods to keep them Good. You don’t worry we are here to care you and your loved House hold goods always with little bite higher in cost, save your precious time which enable you to think of your life precious Business and loved once.",
      "We here introducing a new type of services in the market to facilitate the utilization of the facilities available in the Large Homes which needs the proper and regular maintenance to keep ready at any time of use. We make you feel to experience a good management of your Home your great support we very quickly take up all your worries in very first instant and make you feel Goooooood. We offering the multitasking services in this segment just as: For more details and meet our executives, Please call us…",
    ],
    features: [
      "Scheduled maintenance",
      "Utility care services",
      "Prompt support team",
      "Flexible packages",
    ],
    conclusion:
      "Experience good management of your home with ASF. Call us for more details and meet our executives.",
    icon: HomeRepairServiceIcon,
  },
  "bank-atm-service": {
    title: "Bank & ATM Security Services",
    image: corporateSecurityImg,
    description: [
      "We @ ASF are providing the Armed Guards & Unarmed Guards to the various Private Sector and Government Sector Banks to safe guards. The Guards are trained to deter and stop the any type of criminal activities and fraud activities. ",
    ],
    features: [
      "Trained to handle high-risk environments",
      "Fraud and crime deterrence",
      "Strict monitoring and compliance",
      "Regular performance evaluations",
    ],
    conclusion:
      "Our guards ensure that banking premises and ATMs remain secure, safe, and compliant with protocols.",
    icon: AccountBalanceIcon,
  },
};

export default serviceData;
