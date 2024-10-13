import { Helmet, HelmetData } from "react-helmet-async";

interface HeadProps {
    title: string;
    description?: string;
}

const helmetData = new HelmetData({});

export const Head = ({ title, description }: HeadProps) => {
    return <Helmet helmetData={helmetData}>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
}