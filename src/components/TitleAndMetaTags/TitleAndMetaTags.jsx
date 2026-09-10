import { Helmet } from "react-helmet-async";

const defaultTitle = "Dr. Helfer"
const defaultDescription = "Dr. Helfer desc"

export default function TitleAndMetaTags({ title = defaultTitle, description = defaultDescription }) {
	const canonicalUrl = window.location.origin + window.location.pathname

	return (
		<Helmet title={title}>
			<meta name="og:title" content={title} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content={canonicalUrl} />
			<link rel="canonical" href={canonicalUrl} />
			<meta name="og:description" content={description} />
			<meta name="description" content={description} />
		</Helmet>
	)
}
