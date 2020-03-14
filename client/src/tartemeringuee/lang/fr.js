const getText = ( { siteName, privacyURL } ) => ( id ) => ({
	'banner':          () => `Nous utilisons des cookies 🍪 afin de mesurer la fréquentation de notre site. Pour en savoir plus sur notre politique de protection des données personnelles, nous vous invitons à <a href="${privacyURL}">cliquer ici</a>.`,
	'accept':          () => 'Accepter',
	'deny':            () => 'Refuser',
	'customise':       () => 'Personnaliser',
	'details':         () => `<h2>Gestion de vos préférences sur les cookies</h2>
<p>Les fonctionnalités de ce site listées ci-dessous s’appuient sur des services proposés par des tiers (Google, etc.).</p> 
<p>Si vous donnez votre accord, ces tiers déposeront des cookies qui nous permettront d'obtenir des statistiques de visite sur notre site.</p> 
<p>Via ces cookies, ces tiers collecteront et utiliseront vos données de navigation, conformément à leur politique de confidentialité (liens ci-dessous).</p>`,
	'allServices':     () => 'Préférences pour tous les services',
	'policyLinkLabel': () => 'Lien vers la politique de confidentialité',
})[ id ]();

export default getText;
