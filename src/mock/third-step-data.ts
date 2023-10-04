import { PricingCardProps } from "../components/pricing-card/PricingCard";

const dummyDataArray: PricingCardProps[] = [
    {
        title: "One Term",
        subtitle: "3 months - 169 AUD",
        originalPrice: 25,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
        title: "Full Year",
        originalPrice: 50,
        subtitle: "12 months",
        discountedPrice: 20,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
];

export default dummyDataArray;