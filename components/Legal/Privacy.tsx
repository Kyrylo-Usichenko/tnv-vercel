import React, { FC } from 'react';
import { TabLi, TabSection, TabSubTitle, TabText, TabUl, TabWrapper } from './styles';

type PrivacyProps = {
	isActive: boolean;
};

const Privacy: FC<PrivacyProps> = ({ isActive }) => {
	return (
		<TabWrapper isActive={isActive}>
			<TabSection>
				<TabText>
					Digital Services SG Six Pte. Ltd. ("Tinvio"), a company incorporated in Singapore, understands how
					important the privacy of personal information is to our users. At Tinvio, we want to make your
					experience satisfying and safe. This statement governs information you provide to us or we learn
					from your using or visiting any websites and applications owned and/or operated by Tinvio and any
					and all services provided to you by Tinvio (collectively, "Services"). Please read the following to
					learn more about our Privacy Policy (the "Policy"). The term "you" or "your" generally refers to the
					individual reading this Policy and/or using the Service. <br /> In order to preserve your trust, we
					want you to understand what information we may collect from you, how we use such information, and
					the choices you have regarding our use of this information. This Policy explains how Tinvio and some
					of the companies we work with collect, use, share and protect information in relation to the
					Services.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>What does this Privacy Policy Cover?</TabSubTitle>
				<TabText>
					This Policy applies to all users and others who access the Services ("Users") in or outside
					Singapore. By accessing or using the Service, or providing information to us in connection with the
					Services, you expressly and unequivocally indicate your acceptance of Tinvio's Privacy Policy. This
					Privacy Policy does not apply to the practices, policies, or procedures employed by third parties
					and/or entities that Tinvio does not own, manage or control, or to individuals and others whom
					Tinvio does not employ, contract, manage, or control.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>What information do we collect?</TabSubTitle>
				<TabText>
					Depending on your user profile, Tinvio collects some or all of the following types of information:
				</TabText>
				<TabUl>
					<TabLi>Your first and last name;</TabLi>
					<TabLi>Your email address, phone number, and your desired password;</TabLi>
					<TabLi>Your display name (this is the name by which you will register for Services);</TabLi>
					<TabLi>
						Other profile data, such as additional contact information, location, occupation, and photo
						Payment information, such as credit card or financial account numbers (if applicable);
					</TabLi>
					<TabLi>
						Market Research: From time to time, Tinvio may conduct online research surveys through email
						invitations, pop-up surveys and online focus groups. When participating in a survey, we may ask
						you to enter Personal Information;
					</TabLi>
					<TabLi>
						Cookies and similar technologies: When you use the Services, we may use cookies and similar
						technologies like pixels, web beacons, and local storage to collect information about how you
						use the Service and provide features to you. With the most common browsers you have the choice
						to accept all cookies, to be notified when a cookie is set or to reject all cookies. If you
						choose to reject cookies you may not be able to use all of Tinvio's available features and
						services;
					</TabLi>
					<TabLi>
						Log file information: Log file information is automatically reported by your browser each time
						you make a request to access (i.e., visit) a web page or app. It can also be provided when the
						content of the webpage or app is downloaded to your browser or device. When you use our Service,
						our servers automatically record certain log file information, including your web request,
						Internet Protocol ("IP") address, browser type, referring / exit pages and URLs, number of
						clicks and how you interact with links on the webpage, domain names, landing pages, pages
						viewed, and other such information. The information allows for Tinvio to provide you the
						features of the Service and for more accurate reporting and improvement of the Service.
					</TabLi>
				</TabUl>
			</TabSection>
			<TabSection>
				<TabSubTitle>What do we use your information for?</TabSubTitle>
				<TabText>The information we collect from you may be used in one of the following ways:</TabText>
				<TabUl>
					<TabLi>
						To provide our Services to you, to communicate with you about your use of our Services and for
						other customer service purposes;
					</TabLi>
					<TabLi>
						To provide information that you have requested to receive from us in response to your opt-in
						requests;
					</TabLi>
					<TabLi>
						To send information related to Tinvio's products, services, and happenings, including
						newsletters and emails;
					</TabLi>
					<TabLi>
						To administer your account, respond to your inquiries and send you administrative
						communications;
					</TabLi>
					<TabLi>
						To improve, test, and monitor the effectiveness of the Services (we continually strive to
						improve the Service based on the information and feedback we receive from you);
					</TabLi>
					<TabLi>To develop and test new products and features;</TabLi>
					<TabLi>To statistically analyse user behavior and activity;</TabLi>
					<TabLi>To conduct research and measurement activities;</TabLi>
					<TabLi>To diagnose or fix technology problems;</TabLi>
					<TabLi>
						To send you personalised emails or secure electronic messages pertaining to your interests,
						including news, announcements, and reminders.
					</TabLi>
				</TabUl>
				<TabText>
					Tinvio does not sell or share any information of any kind with any third party without your explicit
					consent, nor does Tinvio use any information for advertisements unrelated to the marketing and
					promotion of Tinvio's Services.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>How can I modify my information?</TabSubTitle>
				<TabText>
					You may update, correct or delete your Personal Information by contacting us at . You may opt out of
					receiving promotional emails from Tinvio or our partners at any time. How do we disclose your
					information?
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>How do we disclose your information?</TabSubTitle>
				<TabText>
					Except as noted in this Policy, we do not sell, trade, or otherwise transfer to outside parties your
					personally identifiable information without your consent. Additionally, Tinvio does not use any
					personally identifiable information for advertisements unrelated to the marketing and promotion of
					the Services.
				</TabText>
				<TabText>
					We may share your information (including but not limited to, information from cookies, log files,
					device identifiers, and usage data) with businesses that are legally part of the same group of
					companies that Tinvio is part of, or that become part of that group ("Affiliates"). Affiliates may
					use this information to help provide, understand, and improve the Services (including by providing
					analytics) and Affiliates' own services (including by providing you with better and more relevant
					experiences).
				</TabText>
				<TabText>
					We also may share your information with third-party organizations that help us provide the Service
					to you ("Service Providers"). Our Service Providers will be given access to your information as is
					reasonably necessary to provide the Service under reasonable confidentiality terms. For example,
					these providers may help us administer our Website and Applications, manage and administer Services,
					or process credit card payments. Where required by law, these companies agree to only use such
					information for the purposes for which they have been engaged by us unless you expressly permit them
					to use your information for other purposes.
				</TabText>
				<TabText>
					We may remove parts of data that can identify you and share anonymised data with other parties. We
					may also combine your information with other information in a way that it is no longer associated
					with you and share that aggregated information.
				</TabText>
				<TabText>
					We may collect and release Personally Identifiable Information and/or non-personally-identifiable
					information only if required to do so by law, or in the good-faith belief that such action is
					necessary to comply with applicable laws and regulations in or outside Singapore, international law
					or respond to a court order, subpoena, or search warrant or equivalent, or where in our reasonable
					belief, an individual's physical safety may be at risk or threatened.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>What Happens in the Event of a Change of Control?</TabSubTitle>
				<TabText>
					If we sell or otherwise transfer part or the whole of Tinvio or our assets to another organization
					(e.g., in the course of a transaction like a merger, acquisition, bankruptcy, dissolution,
					liquidation), your information collected through the Services may be among the items sold or
					transferred. The buyer or transferee will have to honor the commitments we have made in this Privacy
					Policy.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>How We Store Your Information?</TabSubTitle>
				<TabText>
					The Services are hosted in Singapore. If you are visiting from the United States, European Union or
					other regions with laws governing data collection and use that may differ from Singapore law, please
					note that you are transferring your personal data to Singapore which does not have the same data
					protection laws as the United States or EU or other regions and by providing your personal data you
					consent to: THE USE OF YOUR PERSONAL DATA FOR THE USES IDENTIFIED ABOVE IN ACCORDANCE WITH THIS
					PRIVACY POLICY; AND THE TRANSFER OF YOUR PERSONAL DATA TO SINGAPORE AS INDICATED ABOVE. <br /> We
					use commercially reasonable safeguards to help keep the information collected through the Service
					secure. However, Tinvio cannot ensure the security of any information you transmit to Tinvio or
					guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Third party links:</TabSubTitle>
				<TabText>
					We are not responsible for the practices employed by any websites or services linked to or from our
					Service, including the information or content contained within them. Please remember that when you
					use a link to go from our Service to another website or service, our Privacy Policy does not apply
					to those third-party websites or services. Your browsing and interaction on any third-party website
					or service, including those that have a link on our website, are subject to that third party's own
					rules and policies.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Access to and Modification of your Personal Information:</TabSubTitle>
				<TabText>
					Upon request, Tinvio will provide you with information about whether we hold, or process on behalf
					of a third party, any of your personal information. To request this information please e-mail us at
					privacy@tinvio.com. <br /> If your personal information changes, or if you no longer desire our
					service, you may correct, update, delete/remove, or ask to have it removed from a public forum or
					testimonial by making the change within your account settings or by contacting us via one of the
					methods listed in this Policy. Please note that copies of information that you have updated,
					modified, or deleted may continue to reside in our systems for a period of time. Also, you may not
					be able to remove your personal information from archived web pages that we no longer maintain. In
					the event we are unable to complete your access request, we will let you know if we are unable to do
					so and why. We may decline to process requests that are unreasonably repetitive, require
					disproportionate technical effort, jeopardise the privacy of others, are extremely impractical, or
					for which access is not otherwise required by local law. <br /> If your information has been shared
					with a third party, as described above, or collected on behalf of a third party, then that third
					party has received their own copy of your data. If you have been contacted by one of these third
					parties and wish to correct or request they delete your information, please contact them directly.
					<br />
					If you wish to not have your personal information shared with third parties for the creation and
					display of targeted advertisements, you will need to close your account. This action may be possible
					through the settings within your account or by contacting us at privacy@tinvio.com. We do not
					recommend that you do this unless you plan to no longer use the Services and will have no need to
					receive further communications from us or through our system. Even after you opt-out of all
					communications, we will retain your information in accordance with this Policy, however, we will no
					longer use it to contact you. However, third parties who have received your information in
					accordance with this Policy may still use that information to contact you in accordance with their
					own privacy policies, but they may not use our system to do so. <br /> If you would like to delete
					your account with us, you may do so by emailing us at privacy@tinvio.com and specifying which
					account(s) to delete.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Changes to our Privacy Policy:</TabSubTitle>
				<TabText>
					Tinvio may modify or update this Privacy Policy from time to time, so please review it periodically.
					We may provide you additional forms of notice of modifications or updates as appropriate under the
					circumstances. Your continued use of Tinvio or the Service after any modification to this Privacy
					Policy will constitute your acceptance of such modification. <br /> This policy was last modified in
					Singapore on July 16, 2019.
				</TabText>
			</TabSection>
		</TabWrapper>
	);
};

export default Privacy;
